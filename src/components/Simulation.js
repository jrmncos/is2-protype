import React, { useState } from "react";
import SimulationChoice from "./SimulationChoice";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Simulator from "./Simulator";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

export default function Simulation() {
  const [levelSelected, setLevelSelected] = useState(null)
  const classes = useStyles();

  const renderSwitch = () => {
    console.log("Switch!")
    switch(levelSelected){
      case "beginner":
        return <Simulator/>
      case "intermediate":
        return <Simulator/>
      case "advanced":
        return <Simulator/>
      default:
        return <Simulator/>
    }
  }

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
          <Grid item xs={8}>
            {!Boolean(levelSelected) && <SimulationChoice setLevelSelected = {setLevelSelected}/>}
          </Grid>
          {levelSelected && renderSwitch()}
        </Grid>
        </main>
      </Container>
    </>
  )
}