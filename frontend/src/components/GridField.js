import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

    const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    }));

    export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}  direction="row"
            textAlign="center"
            justify="space-around"
            alignItems="center">
            <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}><b>Mobile</b><br></br>+918877887766</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}><b>Email</b><br></br>shabeer@gmail.com</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}><b>Cocoon Id</b><br></br>31r235236</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}><b>Booking Info</b><br></br>Room 3 Bed A</Paper>
            </Grid>
        </Grid>
        </div>
    );
    }