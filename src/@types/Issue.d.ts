interface IIssueReducerType {
  issuesList: IIssue[];
  filters: IFilters;
}

interface IFilters {
  owner?: string;
  name?: string;
  status?: string;
}

enum IssuesActions {
  SET_ISSUES = 'SET_ISSUES',
  SET_FILTERS = 'SET_FILTERS',
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
  url: string;
  title: string;
  labels: {
    edges: [{ node: ILabels }]
  };
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
  };
}