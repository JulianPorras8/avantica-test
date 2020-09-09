import * as React from 'react';

// Modules
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import Select from '@material-ui/core/Select';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import map from 'lodash/map';

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
  const [owner, setOwner] = React.useState(OWNERS[0]);
  const [repository, setRepository] = React.useState(OWNERS[0].repositories[0]);
  const issueActions = useActions(IssueActions);

  return (
    <>
      <FormControl variant='outlined' className={classes.formControl}>
        <InputLabel id='owners-label'>Owner</InputLabel>
        <Select
          labelId='owners-label'
          id='owners'
          value={owner.value}
          onChange={(e) => {
            console.log('onChange owners', e.target.value);
            // issueActions.()
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
          value={repository}
          onChange={(e) => {
            console.log('onChange repositories', e.target.value);
          }}
          label='Repository'
        >
          {map(owner.repositories, (repo, index) => {
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
          value={'ALL'}
          onChange={(e) => {
            console.log('onChange status', e.target.value);
          }}
          label='Issues status'
        >
          <MenuItem value={'ALL'}>
            <em>ALL</em>
          </MenuItem>
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
