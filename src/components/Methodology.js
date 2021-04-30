import React from "react";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Kanban from "./Kanban";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

export default function Simulation() {
  const classes = useStyles();

  return (
    <> 
      <Container maxWidth="lg">
        <main>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.mainGrid}
        > 
          <Kanban/>
        </Grid>
        </main>
      </Container>
    </>
  )
}
