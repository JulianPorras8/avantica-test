import * as React from 'react';

// Modules
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

// Components
import { Filters, IssueDialog, SearchInput } from '../components';

export function IssuesPage() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [showDetailButton, setShowDetailButton] = React.useState(false);
  const [selectedIssue, setSelectedIssue] = React.useState<IIssue | null>(null);

  const handleClose = () => {
    setOpen(false);
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
          <IssueDialog open={open} onClose={handleClose} issue={selectedIssue} />
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
                className={classes.button}
                variant='contained'
                color='secondary'
                onClick={() => { setOpen(true); }}
              >
                Issue detail
              </Button>}
            </Grid>
          </Grid>
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
    margin: theme.spacing(2),
  },
  button: {
    // marginBottom: 15,
  },
}));
