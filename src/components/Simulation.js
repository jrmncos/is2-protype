import React, { useState } from "react";
import Cisco from "../synthesis/Cisco";
import FLV from "../synthesis/FVL";
import Home from "./Home";
import SimulationChoice from "./SimulationChoice";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

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
      case "easy":
        return <FLV/>
      case "medium":
        return <Cisco/>
      default:
        return <Home/>
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