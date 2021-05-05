import React from "react"
import Grid from '@material-ui/core/Grid';
import { Box, Card, CardContent, Divider, Typography } from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ReactAudioPlayer from 'react-audio-player';
import atrapados from '../resources/atrapados.m4a';
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
    titulo: "¿Qué tipo de afección son la complacencia automatizada y el sesgo por la automatización?",
    respuestas: ["Afección cognitiva", "Afección no cognitiva"],
    correcta: 0
  },
  {
    titulo: "¿Cuando se produce la complacencia automatizada?",
    respuestas: ["Cuando sentimos mucha seguridad y confiamos en exceso en una computadora.", "Cuando se confía en exceso la información que vemos en una computadora."],
    correcta: 1
  },
  {
    titulo: "¿Cuando se produce el sesgo por la automatización?",
    respuestas: ["Cuando sentimos mucha seguridad y confiamos en exceso en una computadora.", "Cuando se confía en exceso la información que vemos en una computadora."],
    correcta: 1
  },
  {
    titulo: "¿Por qué se agudizan las afecciones cognitivas?",
    respuestas: ["Por nuevas tecnologías con más fiabilidad y más refinamiento que se lanzan al mercado.", "Por nuevas tecnologías con menos fiabilidad que se lanzan al mercado."],
    correcta: 0
  },
  {
    titulo: "¿Qué pasa cuando no recibimos feedbacks negativos cuando usamos los sistemas automatizados?",
    respuestas: ["Se produce un proceso cognitivo llamado despreocupación desaprendida.", "Se produce un proceso cognitivo llamado despreocupación aprendida."],
    correcta: 0
  },
  {
    titulo: "Cuando se habla de “Es diferente, el conocimiento genuino que requiere nuestro esfuerzo y se manifiesta en habilidades que obtener información inmediata de una computadora”. Se habla de.. ",
    respuestas: ["Efecto generación.", "Efecto degeneración."],
    correcta: 0
  },
  {
    titulo: "La dependencia a la automatización tecnológica..",
    respuestas: ["Ayuda a mejorar las habilidades y el conocimiento.", "Erosiona las habilidades y el conocimiento"],
    correcta: 1
  },
  {
    titulo: "Usar mapas generados por ordenadores permite:",
    respuestas: ["Desarrollar un mapa cognitivo.", "Nos dan poca información espacial y pocas señales de navegación."],
    correcta: 1
  },
  {
    titulo: "Que tipo de viaje es un proceso continuo de crecimiento y desarrollo:",
    respuestas: ["Viajar a pie.", "Viajar en transporte."],
    correcta: 0
  },
  {
    titulo: "Que tipo de células son más complejas:",
    respuestas: ["Células del espacio.", "Células cuadrículas."],
    correcta: 1
  },
  {
    titulo: "Las celulas del espacio y cuadrículas forma un sistema:",
    respuestas: ["De navegación y de formación de recuerdos.", "Sensorial."],
    correcta: 0
  },
  {
    titulo: "¿Qué facilita a que se crea que una máquina sea una herramienta suficiente y superior para realizar el trabajo de la mente?",
    respuestas: ["La creencia de que el cerebro opera aisladamente del cuerpo.", "La creencia de que el intelecto opera en conjunto con el cuerpo."],
    correcta: 0
  },
]

export default function Atrapados() {
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
        Atrapados: cómo las máquinas se apoderan de nuestras vidas. ¿Cómo internet influencia nuestras mentes?
      </Typography>

      <Divider/>
      <Box m={1}/>

      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid item xs={8} style={{width:"100%"}}>
          <Card >
            <ReactAudioPlayer
              src={atrapados}
              autoPlay
              controls
              style={{width:"100%"}}
            />
            <CardContent style={{backgroundColor: "#99ccff"}}>
              <Typography variant="h5" gutterBottom>
                Para completar el cuestionario recomendamos escuchar el podcast producido por Antonio Liendro
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

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