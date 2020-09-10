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
  author: {
    avatarUrl: string;
    login: string;
    url: string;
  };
  body: string;
  bodyHTML: string;
  closedAt: string;
  createdAt: string;
  databaseId: number;
  description: string;
  number: string;
  state: string;
  title: string;
  url: string;
  updatedAt: string;
  labels: {
    edges: [{ node: ILabels }]
  };
}

interface IIssue {
  author: {
    avatarUrl: string;
    login: string;
    url: string;
  };
  body: string;
  bodyHTML: string;
  closedAt: string;
  createdAt: string;
  databaseId: number;
  description: string;
  number: string;
  state: string;
  title: string;
  url: string;
  updatedAt: string;
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