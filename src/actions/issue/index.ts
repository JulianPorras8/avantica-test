import { GraphQLClient } from 'graphql-request';
import map from 'lodash/map';

import { queryGetFacebookIssues } from './queries';

export enum IssuesActions {
  SET_ISSUES = 'SET_ISSUES',
  SET_FILTERS = 'SET_FILTERS',
}
/**
 * The Github response is very complex, this function reduce the complexity to manipulate easier.
 * @param result
 */
const mapGithubResult = (result: IGithubResultType): IIssue[] => {
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

export function get_issues(owner: string, repository: string, states: string[]) {
  // tslint:disable-next-line: ban-types
  return async (dispatch: Function) => {
    const graphQLClient = new GraphQLClient('https://api.github.com/graphql', {
      headers: {
        'Authorization': 'Bearer 96c2c42b2dd81915d74f54526a0a8d397d4d1efe',
        'Content-Type': 'application/json',
      },
    });

    const result: IGithubResultType = await graphQLClient.request(queryGetFacebookIssues, {
      owner,
      states,
      name: repository,
    });
    const mapedResult = mapGithubResult(result);

    return dispatch({ type: IssuesActions.SET_ISSUES, payload: mapedResult });
  };
}

export function set_filters(filters: IFilters): IssueAction {
  return {
    type: IssuesActions.SET_FILTERS,
    payload: filters,
  };
}
