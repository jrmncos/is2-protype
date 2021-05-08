import React from "react"
import Grid from '@material-ui/core/Grid';
import { Box, Divider, Typography } from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Pregunta from "../components/Pregunta";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },

}));

const preguntas = [
  {
    titulo: "¿Cuales de estos niveles NO es considerado como un nivel de la Arquitectura de Internet?",
    respuestas: ["Infraestructura", "Población", "Red social", "Hardware", "Software", "Contenidos"],
    correcta: 1
  },
  {
    titulo: "Las tecnologías del nivel de infraestructura es considerada como la mayor en costos de producción unitarios con respecto a las tecnologías de hardware.",
    respuestas: ["Verdadero", "Falso"],
    correcta: 0
  },
  {
    titulo: "¿El usuario en qué Nivel de la Arquitectura de Internet encajaría?",
    respuestas: ["Infraestructura", "Red social", "Hardware", "Software", "Contenidos"],
    correcta: 1
  },
  {
    titulo: "¿Cuales es una forma de regulación capitalista?",
    respuestas: ["Propiedad estatal", "Propiedad intelectual", "Apropiación incluyente", "Derechos de autor"],
    correcta: 1
  },
  {
    titulo: "¿Qué son los Backbones?",
    respuestas: [" Son los principales softwares necesarios para el funcionamiento de Internet", " Son los principales usuarios de Internet.", "Son las principales conexiones de internet"],
    correcta: 2
  },
  {
    titulo: "Los tendidos submarinos de fibra óptica, los backbones continentales y los satélites pertenecen a los gobiernos de cada país que oligopolizan la circulación de los flujos de información digital.",
    respuestas: ["Verdadero", "Falso"],
    correcta: 1
  },
  {
    titulo: "¿Cual es el porcentaje aproximado de la información digital que circula por el globo cubierta de forma satelital y cableado?",
    respuestas: ["10% en satélites y 90% en cableado submarino", "50% en satélites y 50% en cableado submarino", " 90% en satélites y 10% en cableado submarino"],
    correcta: 0
  }
]

export default function ArquitecturaPolitica() {
  const classes = useStyles();
  const [correctas, setCorrectas] = React.useState(0);
  const [mostrarSolucion, setMostrarSolucion] = React.useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Handle Submit")
    setMostrarSolucion(!mostrarSolucion)
  };

  return(
    <>
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="stretch"
      spacing={2}
    > 

      <Typography variant="h3" component="h2" gutterBottom>
        Arquitectura Política de Internet
      </Typography>

      <Divider/>
      <Box m={1}/>


      <form onSubmit={handleSubmit}>
      <Box m={2}/>
        {
          preguntas.map((pregunta) =>{
            return(
              <>
                <Pregunta 
                  pregunta={pregunta} 
                  setCorrectas={setCorrectas}
                  mostrarSolucion={mostrarSolucion}
                />
                <Box m={2}/>
              </>
            )
          })
        }

        <Box m={2}/>
        <Button type="submit" variant="outlined" color="primary" className={classes.button}>
          Completar!
        </Button>
      </form>

      {
        mostrarSolucion && <h1>La cantidad de respuestas correctas es {correctas} / {preguntas.length}</h1>
      }

    </Grid>
    </>
  )
}