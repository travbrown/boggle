import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { lightBlue, green } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: 205,
  },
  paper: {
    marginBottom: 5,
    color: green
  },
  button: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
/**
 * TODO: 
 * 
 */
function BoggleGrid() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Grid container spacing={0} >
        <Grid container spacing={0}>
            <Grid container item md={4} spacing={0}>
                <Paper className={classes.paper}>
                    <Button className={classes.button}>xs</Button>
                </Paper>     
            </Grid>
            <Grid container item md={4} spacing={0}>
                <Paper className={classes.paper}>
                    <Button className={classes.button}>xs</Button>
                </Paper>   
            </Grid>
            <Grid container item md={4} spacing={0}>
                <Paper className={classes.paper}>
                    <Button className={classes.button}>xs</Button>
                </Paper>     
            </Grid>
        </Grid>
        <Grid container spacing={0}>
            <Grid container item md={4} spacing={0}>
                <Paper className={classes.paper}>
                    <Button className={classes.button}>xs</Button>
                </Paper>     
            </Grid>
            <Grid container item md={4} spacing={0}>
                <Paper className={classes.paper}>
                    <Button className={classes.button}>xs</Button>
                </Paper>   
            </Grid>
            <Grid container item md={4} spacing={0}>
                <Paper className={classes.paper}>
                    <Button className={classes.button}>xs</Button>
                </Paper>     
            </Grid>
        </Grid>
        <Grid container spacing={0}>
            <Grid container item md={4} spacing={0}>
                <Paper className={classes.paper}>
                    <Button className={classes.button}>xs</Button>
                </Paper>     
            </Grid>
            <Grid container item md={4} spacing={0}>
                <Paper className={classes.paper}>
                    <Button className={classes.button}>xs</Button>
                </Paper>   
            </Grid>
            <Grid container item md={4} spacing={0}>
                <Paper className={classes.paper}>
                    <Button className={classes.button}>xs</Button>
                </Paper>     
            </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default BoggleGrid;