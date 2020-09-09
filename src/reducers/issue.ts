import createReducer from './createReducer';

const initialState: IIssueReducerType = {
  issuesList: [],
  filters: {
    owner: '',
    name: '',
    status: '',
  },
};

export const issues = createReducer<IIssueReducerType>(initialState, {
  [IssuesActions.SET_ISSUES](state: IIssueReducerType, action: IssueAction) {
    return {
      ...state,
      issuesList: action.payload,
    };
  },
  [IssuesActions.SET_FILTERS](state: IIssueReducerType, action: IssueAction) {
    return {
      ...state,
      filters: action.payload,
    };
  },
});
