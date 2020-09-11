import { issues } from '../../reducers/issue';
import { mapGithubResult, IssuesActions } from '../../actions/issue';

import data from '../actions/data';

describe('Issues reducer', () => {

  it('should return the state with new filters `status`', () => {
    const initialState: IIssueReducerType = {
      issuesList: [],
      filters: {
        owner: 'facebook',
        name: 'react',
        status: ['OPEN'],
      },
    };
    const newFilters = {
      owner: 'facebook',
      name: 'react',
      status: ['OPEN', 'CLOSED'],
    };
    expect(issues(initialState, {
      type: IssuesActions.SET_FILTERS,
      payload: newFilters
    })).toEqual({
      issuesList: [],
      filters: newFilters,
    });
  });

  it('should return the state with new filters `owner` `name`', () => {
    const initialState: IIssueReducerType = {
      issuesList: [],
      filters: {
        owner: 'facebook',
        name: 'react',
        status: ['OPEN'],
      },
    };
    const newFilters = {
      owner: 'prisma',
      name: 'prisma',
      status: ['OPEN'],
    };
    expect(issues(initialState, {
      type: IssuesActions.SET_FILTERS,
      payload: newFilters
    })).toEqual({
      issuesList: [],
      filters: newFilters,
    });
  });

  it('should return the state with new filters `all`', () => {
    const initialState: IIssueReducerType = {
      issuesList: [],
      filters: {
        owner: 'facebook',
        name: 'react',
        status: ['OPEN'],
      },
    };
    const newFilters = {
      owner: 'facebook',
      name: 'react-native',
      status: ['CLOSED'],
    };
    expect(issues(initialState, {
      type: IssuesActions.SET_FILTERS,
      payload: newFilters
    })).toEqual({
      issuesList: [],
      filters: newFilters,
    });
  });

  it('should return the state with new Issues length 1', () => {
    const mapedResult = mapGithubResult(data);

    const initialState: IIssueReducerType = {
      issuesList: [mapedResult[0], mapedResult[1]],
      filters: {
        owner: 'facebook',
        name: 'react',
        status: ['OPEN'],
      },
    };

    const newIssues = [mapedResult[0]];

    expect(issues(initialState, {
      type: IssuesActions.SET_ISSUES,
      payload: newIssues
    })).toEqual({
      ...initialState,
      issuesList: newIssues,
    });
  });

  it('should return the state with new Issues length 2', () => {
    const mapedResult = mapGithubResult(data);
    const initialState: IIssueReducerType = {
      issuesList: [mapedResult[2]],
      filters: {
        owner: 'facebook',
        name: 'react',
        status: ['OPEN'],
      },
    };
    const newIssues = [mapedResult[3], mapedResult[4]];
    expect(issues(initialState, {
      type: IssuesActions.SET_ISSUES,
      payload: newIssues
    })).toEqual({
      ...initialState,
      issuesList: newIssues,
    });
  });

});