import { GraphQLClient } from 'graphql-request';
import map from 'lodash/map';

// Queires
import { queryGetFacebookIssues } from './queries';

// Config
import config from '../../config';

export enum IssuesActions {
  SET_ISSUES = 'SET_ISSUES',
  SET_FILTERS = 'SET_FILTERS',
}
/**
 * The Github response is very complex, this function reduce the complexity to manipulate easier.
 * @param result
 */
export const mapGithubResult = (result: IGithubResultType): IIssue[] => {
  return map(result.repository.issues.edges, (item) => {
    const issue = item.node;
    return {
      ...issue,
      labels: map(item.node.labels.edges, (labelItem) => labelItem.node),
    };
  });
};

export function set_issues(issues: IIssue[]): IssueAction {
  return {
    type: IssuesActions.SET_ISSUES,
    payload: issues,
  };
}

export const get_issues = (owner: string, repository: string, states: string[]) => {
  // tslint:disable-next-line: ban-types
  return async (dispatch: Function) => {
    const graphQLClient = new GraphQLClient(config.API_GITHUB_GRAPHQL, {
      headers: {
        'Authorization': `Bearer ${config.PERSONAL_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });
    try {
      const result: IGithubResultType = await graphQLClient.request(queryGetFacebookIssues, {
        owner,
        states,
        name: repository,
      });
      const mapedResult = mapGithubResult(result);
      return dispatch({ type: IssuesActions.SET_ISSUES, payload: mapedResult });
    } catch (error) {
      return dispatch({ type: IssuesActions.SET_ISSUES, payload: [] });
    }
  };
}

export function set_filters(filters: IFilters): IssueAction {
  return {
    type: IssuesActions.SET_FILTERS,
    payload: filters,
  };
}
