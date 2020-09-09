import { History } from 'history';
import { combineReducers } from 'redux';

import * as issueReducer from './issue';

export default (history: History) =>
  combineReducers({
    ...issueReducer,
  });
