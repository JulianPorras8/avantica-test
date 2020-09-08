import { GraphQLClient } from 'graphql-request';
import map from 'lodash/map';

import { queryGetFacebookIssues } from './queries';

const mapGithubResult = (result: IGithubResultType): IIssue[] => {
  return map(result.repository.issues.edges, (item) => {
    const issue = item.node;
    return {
      ...issue,
      labels: map(item.node.labels.edges, (labelItem) => labelItem.node),
    };
  });
};

export async function getFacebookIssues() {
  const graphQLClient = new GraphQLClient('https://api.github.com/graphql', {
    headers: {
      'Authorization': 'Bearer 3a9e23c0fe2a6f534b04f36367ffddf67a3bf898',
      'Content-Type': 'application/json',
    },
  });

  const result: IGithubResultType = await graphQLClient.request(queryGetFacebookIssues);
  return mapGithubResult(result);
}
