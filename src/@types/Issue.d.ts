interface IIssueReducerType {
  issuesList: IIssue[];
  filters: IFilters;
}

interface IFilters {
  owner: string;
  name: string;
  status: string[];
}

interface IssueActionType<T, P> {
  type: T;
  payload: P;
}

type IssueAction =
  | IssueActionType<typeof IssuesActions.SET_ISSUES, IIssue[]>
  | IssueActionType<typeof IssuesActions.SET_FILTERS, IFilters>
;

interface ILabels {
  name: string;
}

interface IIssueResult {
  databaseId: number;
  state: string;
  description: string;
  url: string;
  title: string;
  labels: {
    edges: [{ node: ILabels }]
  };
}

interface IIssue {
  databaseId: number;
  state: string;
  description: string;
  url: string;
  title: string;
  labels: ILabels[];
}

interface IGithubResultType {
  repository: {
    databaseId
    issues: {
      edges: [{ node: IIssueResult }]
    }
  };
}