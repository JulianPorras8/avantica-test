import { GraphQLClient } from 'graphql-request';
import map from 'lodash/map';

import { queryGetFacebookIssues } from './queries';

// Private functions
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
  return async (dispatch: Function, getState: Function) => {
    const graphQLClient = new GraphQLClient('https://api.github.com/graphql', {
      headers: {
        'Authorization': 'Bearer c5bf246a57270722b1b19454bb70758bedca3bf8',
        'Content-Type': 'application/json',
      },
    });

    const result: IGithubResultType = await graphQLClient.request(queryGetFacebookIssues, {
      owner,
      states,
      name: repository,
    });
    const mapedResult = mapGithubResult(result);
    // console.log('41 mapedResult', mapedResult);
    // return;
    return dispatch({ type: IssuesActions.SET_ISSUES, payload: mapedResult });
  };
}

export function set_filters(filters: IFilters): IssueAction {
  return {
    type: IssuesActions.SET_FILTERS,
    payload: filters,
  };
}
