import React from "react"
import Grid from '@material-ui/core/Grid';
import { Box, Card, CardContent, Divider, Typography } from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
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

//[1,2,1,2,3,1,2] =>

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
  }

]

export default function Atrapados() {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('');
  const [correctas, setCorrectas] = React.useState(0);
  const [mostrarSolucion, setMostrarSolucion] = React.useState(false)

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    /*

    if (value === 'best') {
      setHelperText('You got it!');
      setError(false);
    } else if (value === 'worst') {
      setHelperText('Sorry, wrong answer!');
      setError(true);
    } else {
      setHelperText('Respuesta correcta 1)');
      setError(true);
    }
    */
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
      <Typography variant="h4" component="h2" gutterBottom>
        Parte 1:
      </Typography>

        {
          preguntas.map((pregunta) =>{
            return(
              <>
                <Pregunta 
                  pregunta={pregunta} 
                  correctas={correctas} 
                  setCorrectas={setCorrectas}
                  mostrarSolucion={mostrarSolucion}
                />
                <Box m={2}/>
              </>
            )
          })
        }

        <Box m={2}/>
        <Typography variant="h4" component="h2" gutterBottom>
        Parte 2:
        </Typography>
        <Box m={2}/>

        <Card>
          <FormControl component="fieldset" error={error} className={classes.formControl}>
            <Typography variant="h6" gutterBottom >
              Usar mapas generados por ordenadores permite:
            </Typography>

            <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
              <FormControlLabel value="1" control={<Radio />} label=" 1) Desarrollar un mapa cognitivo." />
              <FormControlLabel value="2" control={<Radio />} label="2)Nos dan poca información espacial y pocas señales de navegación. " />            
            </RadioGroup>
            <FormHelperText>{helperText}</FormHelperText>
          </FormControl>
        </Card>

        <Box m={2}/>

      <Card>
        <FormControl component="fieldset" error={error} className={classes.formControl}>
          <Typography variant="h6" gutterBottom >
            Que tipo de viaje es un proceso continuo de crecimiento y desarrollo:
          </Typography>
          <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
            <FormControlLabel value="1" control={<Radio />} label=" 1) Viajar a pie." />
            <FormControlLabel value="2" control={<Radio />} label="2) Viajar en transporte. " />            
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
      </Card>

      <Box m={2}/>

      <Card>
        <FormControl component="fieldset" error={error} className={classes.formControl}>
          <Typography variant="h6" gutterBottom >
            Que tipo de células son más complejas:
          </Typography>

          <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
            <FormControlLabel value="1" control={<Radio />} label=" 1) Células del espacio." />
            <FormControlLabel value="2" control={<Radio />} label="2) Células cuadrículas. " />            
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
      </Card>

      <Box m={2}/>
      
      <Card>
        <FormControl component="fieldset" error={error} className={classes.formControl}>
          <Typography variant="h6" gutterBottom >
            Las celulas del espacio y cuadrículas forma un sistema:
          </Typography>

          <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
            <FormControlLabel value="1" control={<Radio />} label=" 1) De navegación  y de formación de recuerdos." />
            <FormControlLabel value="2" control={<Radio />} label="2) Sensorial. " />            
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
      </Card>

      <Box m={2}/>

      <Card>
        <FormControl component="fieldset" error={error} className={classes.formControl}>
          <Typography variant="h6" gutterBottom >
            ¿Qué facilita a que se crea que una máquina sea una herramienta suficiente y superior para realizar el trabajo de la mente?
          </Typography>

          <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
            <FormControlLabel value="1" control={<Radio />} label=" 1) La creencia de que el cerebro opera aisladamente del cuerpo." />
            <FormControlLabel value="2" control={<Radio />} label="2)  La creencia de que el intelecto opera en conjunto con el cuerpo. " />            
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
      </Card>
      
      <Box m={2}/>
        <Button type="submit" variant="outlined" color="primary" className={classes.button}>
          Completar!
        </Button>
      </form>



    </Grid>
    </>
  )
}