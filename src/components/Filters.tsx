import * as React from 'react';

// Modules
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import Select from '@material-ui/core/Select';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import map from 'lodash/map';
import filter from 'lodash/filter';
import { useSelector } from 'react-redux';

// Redux
import { useActions } from '../actions';
import * as IssueActions from '../actions/issue';

const OWNERS = [{
  owner: 'Facebook',
  value: 'facebook',
  repositories: ['react', 'react-native'],
}];

const ISSUES_STATUS = ['OPEN', 'CLOSED'];

export function Filters() {
  const classes = useStyles();

  const filters = useSelector((state: RootState) => state.issues.filters);
  const issueActions = useActions(IssueActions);

  const repositories = filter(OWNERS, (item) => item.value === filters.owner)[0].repositories;

  return (
    <>
      <FormControl variant='outlined' className={classes.formControl}>
        <InputLabel id='owners-label'>Owner</InputLabel>
        <Select
          labelId='owners-label'
          id='owners'
          value={filters.owner}
          onChange={(e) => {
            issueActions.set_filters({
              ...filters,
              owner: e.target.value,
            });
          }}
          label='Owner'
        >
          {map(OWNERS, (ownerItem, index) => {
            return (
              <MenuItem key={index} value={ownerItem.value}>{ownerItem.owner}</MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl variant='outlined' className={classes.formControl}>
        <InputLabel id='repositories-label'>Repository</InputLabel>
        <Select
          labelId='repositories-label'
          id='repositories'
          value={filters.name}
          onChange={(e) => {
            issueActions.set_filters({
              ...filters,
              name: e.target.value,
            });
          }}
          label='Repository'
        >
          {map(repositories, (repo, index) => {
            return (
              <MenuItem key={index} value={repo}>{repo}</MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl variant='outlined' className={classes.formControl}>
        <InputLabel id='issues-status-label'>Issues state</InputLabel>
        <Select
          labelId='issues-status-label'
          id='issues-status'
          value={filters.status && filters.status.length > 1 ? 'ALL' : filters.status[0]}
          onChange={(e) => {
            const statusValue = e.target.value === 'ALL' ? ISSUES_STATUS : [e.target.value];
            issueActions.set_filters({
              ...filters,
              status: statusValue,
            });
          }}
          label='Issues status'
        >
          <MenuItem value={'ALL'}>ALL</MenuItem>
          {map(ISSUES_STATUS, (status, index) => {
            return (<MenuItem key={index} value={status}>{status}</MenuItem>);
          })}
        </Select>
      </FormControl>
    </>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));
