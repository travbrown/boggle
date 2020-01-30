import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: 205,
  },
  paper: {
    marginBottom: 5,
  },
  button: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,

  },
}));

const BoggleGrid = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0} >
        <Grid container spacing={0}>
            <Grid container item md={4} spacing={0}>
                <Paper className={classes.paper}>
                    <Button className={classes.button}>{props.grid[0][0]}</Button>
                </Paper>     
            </Grid>
            <Grid container item md={4} spacing={0}>
                <Paper className={classes.paper}>
                    <Button className={classes.button}>{props.grid[0][1]}</Button>
                </Paper>   
            </Grid>
            <Grid container item md={4} spacing={0}>
                <Paper className={classes.paper}>
                    <Button className={classes.button}>{props.grid[0][2]}</Button>
                </Paper>     
            </Grid>
        </Grid>
        <Grid container spacing={0}>
            <Grid container item md={4} spacing={0}>
                <Paper className={classes.paper}>
                    <Button className={classes.button}>{props.grid[1][0]}</Button>
                </Paper>     
            </Grid>
            <Grid container item md={4} spacing={0}>
                <Paper className={classes.paper}>
                    <Button className={classes.button}>{props.grid[1][1]}</Button>
                </Paper>   
            </Grid>
            <Grid container item md={4} spacing={0}>
                <Paper className={classes.paper}>
                    <Button className={classes.button}>{props.grid[1][2]}</Button>
                </Paper>     
            </Grid>
        </Grid>
        <Grid container spacing={0}>
            <Grid container item md={4} spacing={0}>
                <Paper className={classes.paper}>
                    <Button className={classes.button}>{props.grid[2][0]}</Button>
                </Paper>     
            </Grid>
            <Grid container item md={4} spacing={0}>
                <Paper className={classes.paper}>
                    <Button className={classes.button}>{props.grid[2][1]}</Button>
                </Paper>   
            </Grid>
            <Grid container item md={4} spacing={0}>
                <Paper className={classes.paper}>
                    <Button className={classes.button}>{props.grid[2][2]}</Button>
                </Paper>     
            </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default BoggleGrid;