import * as React from 'react';

// Modules
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import Select from '@material-ui/core/Select';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';

export function Filters() {
  const classes = useStyles();

  return (
    <>
      <FormControl variant='outlined' className={classes.formControl}>
        <InputLabel id='demo-simple-select-outlined-label'>Age</InputLabel>
        <Select
          labelId='demo-simple-select-outlined-label'
          id='demo-simple-select-outlined'
          value={'age'}
          onChange={() => {
            console.log('onChange');
          }}
          label='Age'
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant='outlined' className={classes.formControl}>
        <InputLabel id='demo-simple-select-outlined-label'>Age</InputLabel>
        <Select
          labelId='demo-simple-select-outlined-label'
          id='demo-simple-select-outlined'
          value={'age2'}
          onChange={() => {
            console.log('onChange');
          }}
          label='Age'
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
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
