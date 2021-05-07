import React from "react"
import Grid from '@material-ui/core/Grid';
import { Box, Card, CardContent, Typography } from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Pregunta from "../components/Pregunta";
import { YouTube } from "@material-ui/icons";

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
    titulo:'En el siglo XXI, ¿Cuáles serán los productos principales de la economía?',
    respuestas: ['Cuerpos, cerebros y mentes.', 'Combustibles fósiles y tecnología.', 'Criptomonedas.'],
    correcta: 0
  },
  {
    titulo: '¿Por qué son tan importantes los datos?',
    respuestas: ['Los datos permiten alimentar algoritmos biológicos.', 'Permiten conocer los movimientos bancarios de las personas.', 'Amplía la base de datos de las personas.'],
    correcta:0
  },
  {
    titulo: '¿Cuáles son las 2 revoluciones en el presente?',
    respuestas: ['La revolución infotecnológica y la biotecnológica.', 'Los combustibles ecológicos y medios sustentables.', 'El medio ambiente y el cambio climático.'],
    correcta:0
  },
  {
    titulo: 'Cuando se creen los algoritmos que logren entender mejor a un individuo…	' ,
    respuestas: ['Se podrá predecir los deseos, manipular las emociones y tomar decisiones.', 'Se podrá obtener mejores métodos de obtención de datos.', 'Los test de conocimiento serán obsoletos.'],
    correcta: 0
  },
  {
    titulo: 'La información distribuida es procesada...',
    respuestas: ['Democráticamente.', 'Aleatoriamente.', 'Uniformemente.'],
    correcta: 0
  },
  {
    titulo: 'La información centralizada es procesada...',
    respuestas: ['Dictatorialmente.', 'Aristocraticamente.','Burocráticamente.',],
    correcta:0
  },
  {
    titulo: '¿Cómo se debería regular la propiedad de los datos?',
    respuestas: ['Es un tema aún sin solución.', 'De manera privada.', 'De manera abierta y global.'],
    correcta:0
  }
]

const opts = {
  height: '800',
  width: '100%'
};

export default function Future() {
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
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="stretch"
      spacing={2}
    > 

      <Typography variant="h3" component="h2" gutterBottom>
				El Futuro de la Humanidad      
			</Typography>

      <Grid item xs={12} style={{width:"100%"}}>
          <Card>
          <YouTube videoId="_u9fsv6p-hg" opts={opts} onReady={onReady} />
            <CardContent style={{backgroundColor: "#99ccff"}}>
              <Typography variant="h5" gutterBottom>
                El cuestionario debe ser resuelto posterior a ver la conferencia de Yuval Noah Harari
              </Typography>
            </CardContent>
          </Card>
        </Grid>

      <Box m={1.5}/>

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