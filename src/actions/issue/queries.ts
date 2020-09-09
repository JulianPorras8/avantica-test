// repository(owner: "facebook", name: "react") {
export const queryGetFacebookIssues = `query GetIssues($owner: String!, $name: String!, $states: [IssueState!]) {
  repository(owner: $owner, name: $name) {
    databaseId
    issues(first: 20, states: $states, orderBy: { direction: DESC, field: CREATED_AT }) {
      edges {
        node {
          databaseId
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
