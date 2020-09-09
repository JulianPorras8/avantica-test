import * as React from 'react';

// Modules
import Chip from '@material-ui/core/Chip';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import { Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/styles';
import map from 'lodash/map';
import { useSelector } from 'react-redux';

// Components
import { Filters, TodoTable } from '../../components';

// Redux
import { useActions } from '../../actions';
import * as  IssuesActions from '../../actions/issue';

export default function Asynchronous() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const issues = useSelector((state: RootState) => state.issues.issuesList);
  console.log('29 issuesList', issues);
  const issuesActions = useActions(IssuesActions);

  const loading = open && issues.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }
    // Get issues
    issuesActions.get_issues('facebook', 'react', ['OPEN']);

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
      onInputChange={() => {
        console.log('onInputChange');
      }}
      onChange={() => {
        console.log('onChange');
      }}
      getOptionSelected={(option, value) => option.databaseId === value.databaseId}
      getOptionLabel={(option) => option.title}
      options={issues}
      loading={loading}
      getLimitTagsText={(more) => <span>+{more}</span>}
      renderOption={(option) => (
        <React.Fragment>
          <span><HighlightOffIcon style={{ color: 'red' }} /></span>
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
      <Grid container>
        <Grid item xs={8}>
          <Asynchronous />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant='h4' gutterBottom>
            Issues List
				  </Typography>
          <TodoTable />
        </Grid>
      </Grid>
      {/* <Grid item xs={6}>
        <div className={classes.buttonContainer}>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            onClick={handleAddTodo}
          >
            Add Todo
					</Button>
        </div>
      </Grid> */}
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
