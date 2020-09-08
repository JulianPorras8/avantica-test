export const queryGetFacebookIssues = `query {
  repository(owner: "facebook", name: "react") {
    issues(last: 20, states: CLOSED) {
      edges {
        node {
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
