import { IssuesActions } from '../actions/issue';
import createReducer from './createReducer';

const initialState: IIssueReducerType = {
  issuesList: [],
  filters: {
    owner: 'facebook',
    name: 'react',
    status: ['OPEN'],
  },
  error: {
    open: false,
    message: '',
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
  [IssuesActions.SET_ERROR](state: IIssueReducerType, action: IssueAction) {
    return {
      ...state,
      error: action.payload,
    };
  },
});
