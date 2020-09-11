interface IIssueReducerType {
  issuesList: IIssue[];
  filters: IFilters;
  error: IError;
}

interface IError {
  open: boolean;
  message: string;
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
  | IssueActionType<typeof IssuesActions.SET_ERROR, IError>
  ;

interface ILabels {
  name: string;
}

interface INodeLabelsResult {
  node: ILabels;
}

interface IIssueResult {
  author: {
    avatarUrl: string;
    login: string;
    url: string;
  };
  bodyHTML: string;
  closedAt: string;
  createdAt: string;
  databaseId: number;
  number: number;
  state: string;
  title: string;
  url: string;
  updatedAt: string;
  labels: {
    edges: INodeLabelsResult[]
  };
}

interface IIssue {
  author: {
    avatarUrl: string;
    login: string;
    url: string;
  };
  bodyHTML: string;
  closedAt: string;
  createdAt: string;
  databaseId: number;
  number: number;
  state: string;
  title: string;
  url: string;
  updatedAt: string;
  labels: ILabels[];
}

interface INodeIssuesResult {
  node: IIssueResult;
}

interface IGithubResultType {
  repository: {
    databaseId: number;
    issues: {
      edges: INodeIssuesResult[]
    }
  };
}
