export const queryGetFacebookIssues = `query GetIssues($owner: String!, $name: String!, $states: [IssueState!]) {
  repository(owner: $owner, name: $name) {
    databaseId
    issues(first: 100, states: $states, orderBy: { direction: DESC, field: CREATED_AT }) {
      edges {
        node {
          author {
            avatarUrl
            login
          }
          body
          bodyHTML
          closedAt
          createdAt
          databaseId
          number
          resourcePath
          state
          title
          url
          labels(first: 5) {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
  }
}`;
