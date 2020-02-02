/*jshint esversion: 6 */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const BoggleGrid = (props) => {
  const classes = useStyles();

  const FormRow = (row) => {
    return (
      <React.Fragment>
        <Grid item xs={2}>
            <Paper className={classes.paper}> {row[0]}</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>{row[1]}</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>{row[2]}</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>{row[3]}</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>{row[4]}</Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container justify='center' spacing={1}>
        <Grid container item justify='center' xs={8} spacing={1}>
          {FormRow(props.grid[0])}
        </Grid>
        <Grid container item justify='center' xs={8} spacing={1}>
          {FormRow(props.grid[1])}
        </Grid>
        <Grid container item justify='center' xs={8} spacing={1}>
          {FormRow(props.grid[2])}
        </Grid>
        <Grid container item justify='center' xs={8} spacing={1}>
          {FormRow(props.grid[3])}
        </Grid>
        <Grid container item justify='center' xs={8} spacing={1}>
          {FormRow(props.grid[4])}
        </Grid>
      </Grid>
    </div>
  );
}

export default BoggleGrid;