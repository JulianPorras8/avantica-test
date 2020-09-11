export const queryGetFacebookIssues = `query GetIssues($owner: String!, $name: String!, $states: [IssueState!]) {
  repository(owner: $owner, name: $name) {
    databaseId
    issues(first: 5, states: $states, orderBy: { direction: DESC, field: CREATED_AT }) {
      edges {
        node {
          author {
            avatarUrl
            login
            url
          }
          bodyHTML
          updatedAt
          closedAt
          createdAt
          databaseId
          number
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
