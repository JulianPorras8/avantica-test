import * as React from "react";

// Modules
import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles";
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import Chip from '@material-ui/core/Chip';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import TextField from '@material-ui/core/TextField';
import map from 'lodash/map';

// Components
import { TodoDialog, TodoTable } from "../../components";

// Controllers
import { getFacebookIssues } from './issuesHandler';

export default function Asynchronous() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [issues, setIssues] = React.useState<IIssue[]>([]);
  const loading = open && issues.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      try {
        const result = await getFacebookIssues();
        if (active) {
          setIssues(result);
        }
      } catch (error) {
        console.log(error);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setIssues([]);
    }
  }, [open]);

  return (
    <Autocomplete
      id="asynchronous-issues"
      autoComplete={true}
      style={{ width: '100%' }}
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
              )
            })}
          </span>
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="React Issues"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
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
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddTodo = () => {
    setOpen(true);
  };

  return (
    <Grid container className={classes.root}>
      <TodoDialog open={open} onClose={handleClose} />
      <Grid item xs={6}>
        <Typography variant="h4" gutterBottom>
          Issues List
				</Typography>
      </Grid>
      <Grid item xs={6}>
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
      </Grid>
      <Grid item xs={12}>
        <Asynchronous />
      </Grid>
      <Grid item xs={12}>
        <TodoTable />
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: 20,
    [theme.breakpoints.down("md")]: {
      paddingTop: 50,
      paddingLeft: 15,
      paddingRight: 15,
    },
  },

  buttonContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginBottom: 15,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));
