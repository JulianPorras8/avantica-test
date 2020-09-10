import * as React from 'react';

// Styles
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';

// Components
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import parse from 'html-react-parser';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import map from 'lodash/map';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

interface Props {
  issue: IIssue | null;
  open: boolean;
  onClose: () => void;
}

export function IssueDialog(props: Props) {
  const classes = useStyles();

  if (!props.issue || !Object.keys(props.issue).length) {
    return null;
  }

  const handleClose = () => {
    props.onClose();
  };
  const issue = props.issue;
  return (
    <div>
      <Dialog maxWidth={'lg'} fullWidth={true} open={props.open} onClose={handleClose} aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>
          <span>
            {issue.state === 'OPEN' && <ErrorOutlineIcon style={{ color: '#28a745' }} className={classes.stateIcon} />}
            {issue.state === 'CLOSED' && <HighlightOffIcon style={{ color: '#cb2431' }} className={classes.stateIcon} />}
          </span>
          <span>{issue.title}</span>
        </DialogTitle>
        <DialogContent>
          <Grid container>
            <Grid item md={10}>
              <div className={classes.descriptionContainer}>
                {parse(issue.bodyHTML)}
              </div>
            </Grid>
            <Grid item md={2}>
              <Grid container spacing={3}>
                <Grid item md={12}>
                  <Avatar alt={issue.author.login} src={issue.author.avatarUrl} />
                  <Typography variant='button' display='block' gutterBottom>
                    Reporter:
                  </Typography>
                  <Link href={issue.author.url}>
                    {issue.author.login}
                  </Link>
                </Grid>
                <Grid item md={12}>
                  <span style={{ width: '100%' }}>
                    <Typography variant='button' display='block' gutterBottom>
                      Labels
                    </Typography>
                  </span>
                  {map(issue.labels, (label, index) => {
                    return (
                      <Chip key={index}
                        label={label.name}
                        className={classes.chip}
                      />
                    );
                  })}
                </Grid>
                <Grid item md={12}>
                  <span style={{ width: '100%' }}>
                    <Typography variant='button' display='block' gutterBottom>
                      Created at:
                    </Typography>
                  </span>
                  {new Date(issue.createdAt).toLocaleString()}
                </Grid>
                <Grid item md={12}>
                  <span style={{ width: '100%' }}>
                    <Typography variant='button' display='block' gutterBottom>
                      {issue.state === 'CLOSED' ? 'Closed at:' : 'Updated at:'}
                    </Typography>
                  </span>
                  {issue.state === 'CLOSED'
                    ? new Date(issue.closedAt).toLocaleString()
                    : new Date(issue.updatedAt).toLocaleString()}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button color='primary' href={issue.url}>
            See more
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  descriptionContainer: {
    maxWidth: '100%',
    overflow: 'scroll',
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  stateIcon: {
    margin: theme.spacing(1),
  }
}));
