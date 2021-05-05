import { Card, FormControl, FormControlLabel, FormHelperText, Radio, RadioGroup, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },

}));

export default function Pregunta({pregunta, setCorrectas, mostrarSolucion}){
  const classes = useStyles();

  const [helperText, setHelperText] = React.useState('');
  const [value, setValue] = React.useState(0);
  const [error, setError] = React.useState(false);

  useEffect(()=>{
    if(value === pregunta.correcta){
      setHelperText("Respuesta correcta")
      setCorrectas(prevCorrectas => prevCorrectas + 1)
    } 
    else{
      setHelperText("La opción correcta es la número " +  (pregunta.correcta+1 ) +")")
      setError(true)
    }
  }, [value, pregunta, setCorrectas])

  const handleRadioChange = (event) => {
    setValue(parseInt(event.target.value, 10));
  };
  
  return(
    <>
    <Card>
      <FormControl component="fieldset" error={error} className={classes.formControl}>
        <Typography variant="h6" gutterBottom >
          {pregunta.titulo}
        </Typography>
        <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
          {
            pregunta.respuestas.map((respuesta, idx) => {
              return(
                <FormControlLabel value={idx} control={<Radio/>} label={(idx+1)+") "+respuesta}/>
              )
            })
          }
        </RadioGroup>
        <FormHelperText>{mostrarSolucion && helperText}</FormHelperText>
      </FormControl>
    </Card>
    </>
  )
}