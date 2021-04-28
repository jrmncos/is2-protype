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

const beginner = {
  descripcion: "Indie Game: Un grupo de dos desarrolladores lo contrata como Project Manager Junior para ayudarlos con su proyecto. Deben lograr sacar el juego 'Supear Meat Boy' dentro de 24 semanas y cuentan con un presupuesto de $5.000 dolares.",
  presupuesto: "$5000",
  semanas: 10,
  tareas:55
}

const intermediate = {
  descripcion: "Fundación Valle del Lili: El cuerpo médico de la FLV lo contrata como consultor para llevar adelante el desarrollo de una solución integral que resuelva los problemas que conlleva manejar los procesos del hospital en papel. Los médicos aún no tienen del todo claro cuales son los requerimientos funcionales, pero exigen que el proyecto esté terminado en 40 semanas y cuentan con un presupuesto de $30.000",
  presupuesto: "$30000",
  semanas: 40,
  tareas: 197
}

const advanced = {
  descripcion: "La empresa CISCO lo contrata como PM Senior, para hacer un gran 'refactor' de un Sistema core de la empresa. La idea es cambiar lo que se encuentra actualmente para poder hacer la arquitectura del Sistema más confiable, escalable y performante. CISCO cuenta con un presupuesto de $70.000 pero el proyecto solo puede durar 16 semanas.",
  presupuesto: "$70000",
  semanas: 16,
  tareas: 400,
  eventos: [
    {
      prob: 0.9,
      descripcion: "Los directivos encontraron otras prioridades en el negocio. Por ende se reduce el presupuesto al 30%.",
      acontecio: false
    },
    {
      prob: 0.5,
      descripcion:"Debido a una mala estimación de un modulo core de la arquitectura, se añaden más tareas al proyecto.",
      acontecio: false
    }
  ]
}

export default function Simulation() {
  const [levelSelected, setLevelSelected] = useState(null)
  const classes = useStyles();

  const renderSwitch = () => {
    console.log("Switch!")
    switch(levelSelected){
      case "beginner":
        return <Simulator nivel = {beginner}/>
      case "intermediate":
        return <Simulator nivel={intermediate}/>
      case "advanced":
        return <Simulator nivel={advanced}/>
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

