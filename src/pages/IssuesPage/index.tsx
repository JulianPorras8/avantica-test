import * as React from 'react';

// Modules
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Chip from '@material-ui/core/Chip';
import CircularProgress from '@material-ui/core/CircularProgress';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Grid from '@material-ui/core/Grid';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import map from 'lodash/map';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// Components
import { Filters, TodoTable } from '../../components';

// Redux
import { useActions } from '../../actions';
import * as  IssuesActions from '../../actions/issue';

export default function Asynchronous() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const { issuesList, filters } = useSelector((state: RootState) => state.issues);
  const issuesActions = useActions(IssuesActions);

  const loading = open && issuesList.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }
    // Get issues according with filters
    issuesActions.get_issues(filters.owner, filters.name, filters.status);

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      issuesActions.set_issues([]);
    }
  }, [open]);

  return (
    <Autocomplete
      id='asynchronous-issues'
      autoComplete={true}
      className={classes.searchControl}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      onChange={(e) => {
        console.log('onChange', e.target);
        console.log('onChange', e.currentTarget);
      }}
      getOptionSelected={(option, value) => {
        console.log('70 option', option);
        console.log('71 value', value);
        return option.databaseId === value.databaseId;
      }}
      getOptionLabel={(option) => option.title}
      options={issuesList}
      loading={loading}
      renderOption={(option) => (
        <React.Fragment key={option.databaseId}>
          <span>
            {option.state === 'OPEN' && <ErrorOutlineIcon style={{ color: '#28a745' }} />}
            {option.state === 'CLOSED' && <HighlightOffIcon style={{ color: '#cb2431' }} />}
          </span>
          {option.title}
          <span>
            {map(option.labels, (label, index) => {
              return (
                <Chip key={index}
                  label={label.name}
                  className={classes.chip}
                />
              );
            })}
          </span>
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label='React Issues'
          variant='outlined'
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color='inherit' size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}

export function IssuesPage() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid container>
        <Filters />
      </Grid>
      <Grid container justify={'center'}>
        <Grid item xs={8}>
          <Asynchronous />
        </Grid>
        <Grid item xs={4}>
          <div className={classes.buttonContainer}>
            <Button
              className={classes.button}
              variant='contained'
              color='secondary'
              onClick={() => { console.log('aaa') }}
            >
              Open Issue
					    </Button>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: 20,
    [theme.breakpoints.down('md')]: {
      paddingTop: 50,
      paddingLeft: 15,
      paddingRight: 15,
    },
  },

  buttonContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginBottom: 15,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  searchControl: {
    margin: theme.spacing(1),
    width: '100%',
  },
}));
