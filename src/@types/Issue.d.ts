interface ILabels {
  name: string;
}

interface IIssueResult {
  databaseId: number;
  url: string;
  title: string;
  labels: {
    edges: [{ node: ILabels }]
  }
}

interface IIssue {
  databaseId: number;
  url: string;
  title: string;
  labels: ILabels[];
}

interface IGithubResultType {
  repository: {
    issues: {
      edges: [{ node: IIssueResult }]
    }
  }
}