import * as React from 'react';

// prettier-ignore
import {  IconButton, Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/styles';
import { useSelector } from 'react-redux';

import { useActions } from '../actions';
import * as TodoActions from '../actions/issue';

export function TodoTable() {
  // const classes = useStyles();
  // const issuesList = useSelector((state: RootState) => state.issues);
  // const todoActions = useActions(TodoActions);
  // console.log('16 issuesList', issuesList);
  // const onRowClick = (todo: IIssue) => {
  //   // TODO: define what to do here
  // };

  return (
    <div></div>
    // <Paper className={classes.paper}>
    //   <Table className={classes.table}>
    //     <TableHead>
    //       <TableRow>
    //         <TableCell padding='default'>Status</TableCell>
    //         <TableCell padding='default'>Text</TableCell>
    //         <TableCell padding='default'>Delete</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {issuesList.map((n: IIssue) => {
    //         return (
    //           <TableRow
    //             key={n.databaseId}
    //             hover
    //             onClick={(event) => onRowClick(n)}
    //           >
    //             <TableCell padding='none'>

    //             </TableCell>
    //             <TableCell padding='none'>{n.title}</TableCell>
    //             <TableCell padding='none'>
    //               <IconButton
    //                 aria-label='Delete'
    //                 color='default'
    //                 onClick={() =>
    //                   todoActions.deleteTodo(n.databaseId)
    //                 }
    //               >
    //                 <DeleteIcon />
    //               </IconButton>
    //             </TableCell>
    //           </TableRow>
    //         );
    //       })}
    //     </TableBody>
    //   </Table>
    // </Paper>
  );
}

const useStyles = makeStyles({
  paper: {
    width: '100%',
    minWidth: 260,
    display: 'inline-block',
  },
  table: {
    width: '100%',
  },
});
