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
    titulo:'La "Teoría de la domesticación", propuesta por Roger Silverstone y Hirsch (1992) describe la relación entre las tecnologías y su consumo, indicando que las tecnologías para ser funcionales, deben ser insertadas',
    respuestas: ['En la vida cotidiana', 'En la vida laboral', 'En el desarrollo de nuevas tecnología'],
    correcta: 0
  },
  {
    titulo: 'La “Teoría de la domesticación” se mostraba como una herramienta útil para:',
    respuestas: ['Explicar nuevas tecnologías a todo el mundo', 'Explicar como la tecnología pasa a formar parte de simbolismos e identidades de género', 'Explicar la tecnología con igual de condiciones, tanto a hombres como mujeres, y de esa manera lograr la integración social de ambos'],
    correcta:1
  },
  {
    titulo: 'El Guión de género o gender script, es una herramienta que explica cómo el género está implicado en:',
    respuestas: ['El diseño de las tecnologías', 'El desarrollo de las tecnologías', 'Las pruebas realizadas en las tecnologías', 'Ninguna de las anteriores'],
    correcta:0
  },
  {
    titulo: 'La clasificación de los guiones de géneros es: Individual, simbólico y estructural' ,
    respuestas: ['Verdadero', 'Falso'],
    correcta: 0
  },
  {
    titulo: 'Dentro de las fases de diseño de software, nos interesa más introducir el concepto de guiones de género es en:',
    respuestas: ['Fase de diseño', 'Fase de análisis y especificaciones de los requerimientos', 'Fase de mantenimiento'],
    correcta: 1
  },
  {
    titulo: 'Teniendo en cuenta el ejemplo de la incorporación de máquinas de afeitar eléctricas de Philips...',
    respuestas: ['El diseño de las máquinas de afeitar era el mismo para todos', 'El diseño de las afeitadoras para mujeres tenían un diseño diferentes a las afeitadoras de los hombres', 'Era posible realizar pequeños arreglos a las afeitadoras por mujeres', 'Las afeitadoras incluían un set de herramientas para que cualquiera pudiera realizarle arreglos'],
    correcta:1
  },
  {
    titulo: 'Las Tecnologías dirigidas “a todo el mundo”',
    respuestas: ['Son neutras y utilizables por todo el mundo', 'Son neutras y utilizables por todo el mundo'],
    correcta:1
  },
  {
    titulo: 'La teoría del actor-red explica la “durabilidad material”',
    respuestas: ['Verdadero', 'Falso'],
    correcta:1
  },
  {
    titulo: '“Aprende tú mismo”, modalidad que requiere cierta autoconfianza en las propias capacidades tecnológicas, que decían que carecían las mujeres. ',
    respuestas: ['Verdadero', 'Falso'],
    correcta:1
  },
  {
    titulo: 'El enfoque semiótico de los guiones de género...',
    respuestas: ['Es un enfoque teórico', 'No sólo es un enfoque teórico, sino que se ha utilizado como herramienta analítica para estudiar los procesos de generalización en múltiples estudios de caso.'],
    correcta:1
  },
  {
    titulo: 'El feminismo constructivista afirma que el género no sólo se asocia a las tecnologías una vez construidas, sino se incorpora en la materialidad de los artefactos, lo que supone la implicación del género en el “contenido” mismo de la tecnología.',
    respuestas: ['Verdadero', 'Falso'],
    correcta:1
  },

]

export default function Genero() {
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
        Género en el contenido de la tecnología
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