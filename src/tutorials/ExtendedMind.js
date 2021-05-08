import React from "react"
import Grid from '@material-ui/core/Grid';
import { Box, Divider, Typography } from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Pregunta from "../components/Pregunta";
import YouTube from 'react-youtube';

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
    titulo: "Según el autor los autores de Extended Mind ¿Donde termina la mente y comienza el resto del mundo?",
    respuestas: ["La mente termina en el cerebro (o en el cuerpo).", "Los limites no están del todo claro. Objetos que están más allá de nuestro cuerpo deben contar como parte de nuestra mente."],
    correcta: 1
  },
  {
    titulo: "Imaginese que su cerebro es un disco rígido en el cual almacena información. Una parte de su memoria se encarga de almacenar los números de telefonos celulares de sus seres más allegados.¿Qué ocurre si almacena esos números en su SmartPhone?",
    respuestas: ["El cerebro deja de ser la fuente principal y rápida donde ir a consultar esa información.", "Se libera esa parte del cerebro encargada de almacenar los números de celular.", "Se genera una dependencia con la información almacenada en el SmartPhone.", "Todas las opciones son correctas."],
    correcta: 3
  },
  {
    titulo: "Según los autores, a qué equivale (no literalmente) la perdida de un SmartPhone con todas las fotos de unas vacaciones muy apreciadas. (Suponga que es su SmartPhone)",
    respuestas: ["Un error humano por no hacer backup de las fotos.", "Una fisura en el Sistema de Archivos Mental."],
    correcta: 1
  },
  {
    titulo: "El 'Gemelo Virtual' que genera Replika, ¿Forma parte de la mente de la persona que utiliza la aplicación?",
    respuestas: ["Sí, se puede interactuar con el gemelo de la misma manera que con su dueño.", "Sí, los datos que se le proporcionan al gemelo son confiables, por lo que las respuesta que proporciona son pensamientos que su dueño alguna vez penso.", "No, la IA del gemelo no puede responder como su creador."],
    correcta: 1
  },
  {
    titulo: "¿Qué podría llegar a ocurrir si el dueño del gemelo de 'Replika' pierde su SmartPhone con todos sus datos?",
    respuestas: ["Una parte de él habrá 'fallecido' dado que el clon era parte de su mente extendida.", "El dueño no percibe ningún cambio, ya que la información que el proveyó al Clon, ya la tiene almacenada en sí mismo."],
    correcta: 0
  }
]

const opts = {
  height: '500',
  width: '100%'
};

export default function ExtendedMind() {
  const classes = useStyles();
  const [mostrarSolucion, setMostrarSolucion] = React.useState(false)
  const [correctas, setCorrectas] = React.useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Handle Submit")
    setMostrarSolucion(!mostrarSolucion)
  };

  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }


  return(
    <>
    <Typography variant="h3" component="h2" gutterBottom>
      Extended Mind - Replika
    </Typography>
    <Divider/>
    <Box m={1}/>
    <Typography variant="h5" component="h2" gutterBottom>
      Antes de comenzar con el cuestionario, recomendamos fuertemente visualizar los siguientes videos:
    </Typography>

    <YouTube videoId="Gdb9YSyelj0" opts={opts} onReady={onReady} />
    <Box m={1}/>
    <YouTube videoId="yQGqMVuAk04" opts={opts} onReady={onReady} />

    <Box m={2}/>
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="stretch"
      spacing={2}
    > 
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