import * as React from 'react';

// Material Components
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert/Alert';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';

// Modules
import { useSelector } from 'react-redux';

// Components
import { Filters, IssueDialog, SearchInput } from '../components';

// Actions
import { useActions } from '../actions';
import * as IssueActions from '../actions/issue';

export function IssuesPage() {
  const classes = useStyles();

  const [openDialog, setOpenDialog] = React.useState(false);
  const [showDetailButton, setShowDetailButton] = React.useState(false);
  const [selectedIssue, setSelectedIssue] = React.useState<IIssue | null>(null);
  const error = useSelector((state: RootState) => state.issues.error);
  const issueActions = useActions(IssueActions);

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleErrorClose = () => {
    issueActions.set_error({ open: false, message: '' });
  };

  const handleShowDetailButton = (value: boolean) => {
    setShowDetailButton(value);
  };

  const handleSelectedIssue = (issue: IIssue | null) => {
    setSelectedIssue(issue);
  };

  return (
    <Grid container className={classes.root}>
      <Grid container justify={'center'}>
        <Grid item md={6}>
          <IssueDialog open={openDialog} onClose={handleClose} issue={selectedIssue} />
          <Filters />
          <Grid container justify={'center'}>
            <Grid item xs={12}>
              <SearchInput
                showDetailButton={handleShowDetailButton}
                selectedIssue={handleSelectedIssue}
                issue={selectedIssue}
              />
            </Grid>
          </Grid>
          <Grid container justify={'center'}>
            <Grid container item md={4} direction='row' justify='center' alignItems='center'>
              {showDetailButton && <Button
                variant='contained'
                color='secondary'
                onClick={() => { setOpenDialog(true); }}
              >
                Issue detail
              </Button>}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Snackbar open={error.open} autoHideDuration={6000} onClose={handleErrorClose}>
        <Alert onClose={handleErrorClose} severity='error'>
          {error.message}
        </Alert>
      </Snackbar>
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
    margin: theme.spacing(2),
  },
}));
