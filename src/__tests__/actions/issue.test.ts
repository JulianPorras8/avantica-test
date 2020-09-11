// Modules
import { AnyAction } from 'redux';
import configureMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import nock from 'nock';

// Actions
import { set_issues, set_filters, get_issues, mapGithubResult, IssuesActions } from '../../actions/issue';

// Data for testing
import data from './data';

// This solve a problem with types on redux-thunk
type DispatchExts = ThunkDispatch<any, void, AnyAction>;

const middlewares = [thunk];
const mockStore = configureMockStore<any, DispatchExts>(middlewares);

describe('actions', () => {

  afterEach(() => {
    nock.enableNetConnect();
  });

  beforeAll(() => nock.disableNetConnect());

  afterEach(() => nock.cleanAll());

  it('`set_issues` should return an empty array', () => {
    const expectedAction = {
      type: IssuesActions.SET_ISSUES,
      payload: []
    };
    expect(set_issues([])).toEqual(expectedAction);
  });

  it('`set_issues` should return an array with lenght 1', () => {
    const mapedResult = mapGithubResult(data);
    const issues = [mapedResult[0]];
    const expectedAction = {
      type: IssuesActions.SET_ISSUES,
      payload: issues,
    };
    expect(set_issues(issues)).toEqual(expectedAction);
  });

  it('`set_filters` should return an action with correct values [OPEN]', () => {
    const filters = {
      owner: 'facebook',
      name: 'react',
      status: ['OPEN'],
    };
    const expectedAction = {
      type: IssuesActions.SET_FILTERS,
      payload: filters,
    };
    expect(set_filters(filters)).toEqual(expectedAction);
  });

  it('`set_filters` should return an action with correct values [OPEN, CLOSED]', () => {
    const filters = {
      owner: 'facebook',
      name: 'react',
      status: ['OPEN', 'CLOSED'],
    };
    const expectedAction = {
      type: IssuesActions.SET_FILTERS,
      payload: filters,
    };
    expect(set_filters(filters)).toEqual(expectedAction);
  });

  it('`get_issues` get issues from facebook', () => {
    nock('https://api.github.com').post('/graphql').reply(200, { data });

    const mapedResult = mapGithubResult(data);
    const expectedActions = [{ type: IssuesActions.SET_ISSUES, payload: mapedResult }];
    const store = mockStore();

    return store.dispatch(get_issues('facebook', 'react', ['OPEN'])).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

});