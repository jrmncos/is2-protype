import React from "react"
import Grid from '@material-ui/core/Grid';
import { Box, Typography } from "@material-ui/core";

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
    titulo:'La colonización es un proceso de control, en donde el sistema central de poder se instala y gobierna las tierras a sus alrededores y sus recursos.',
    respuestas: ['Verdadero', 'Falso'],
    correcta: 0
  },
  {
    titulo: 'Según Heidegger se define como un movimiento incesante de recursos acumulados e interconectados o "reserva permanente" incluido el humano a:',
    respuestas: ['Impulso colonial', 'Colonialismo', 'Colonización'],
    correcta:0
  },
  {
    titulo: 'Según Loomba, el prefijo “post” en el término "poscolonial" implica una secuela: ',
    respuestas: ['Temporal, como en venir después', 'Ideológica, como suplantar', 'Ambas'],
    correcta:2
  },
  {
    titulo: 'La informática poscolonial aborda cuestiones de la cultura y el poder en el trabajo en contextos:' ,
    respuestas: ['Económico y social', 'Informáticos y de las TICS', 'Todos los contextos (informáticos, económicos, social, religión, etc)'],
    correcta: 1
  },
  {
    titulo: 'Según Quijano, el pensamiento descolonial lidera todas las teorías del sistema mundial, sin intención de redefinirlo.',
    respuestas: ['Verdadero', 'Falso (lo redefine como el análisis del sistema mundial desde los márgenes, en lugar del centro)'],
    correcta: 1
  },
  {
    titulo: 'La idea de computación descolonial se propone como una respuesta al “impulso colonial”',
    respuestas: ['Verdadero', 'Falso'],
    correcta:0
  },
  {
    titulo: 'La computación descolonial se trata de interrogar quién está haciendo computación, dónde lo están haciendo y qué significa la computación',
    respuestas: ['Verdadero', 'Falso'],
    correcta:0
  },
  {
    titulo: 'La computación descolonial sugiere examinar el concepto “la raza y/como informática”',
    respuestas: ['Verdadero', 'Falso'],
    correcta:0
  },
  
]

export default function Decolonial() {
  const classes = useStyles();
  const [mostrarSolucion, setMostrarSolucion] = React.useState(false)
  const [correctas, setCorrectas] = React.useState(0);

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
        Informática Decolonial
      </Typography>

      <form onSubmit={handleSubmit}>
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