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

export default function Pregunta({pregunta, correctas, setCorrectas, mostrarSolucion}){
  const classes = useStyles();

  const [helperText, setHelperText] = React.useState('');
  const [value, setValue] = React.useState(0);
  const [error, setError] = React.useState(false);

  useEffect(()=>{
    if(mostrarSolucion){
      console.log("Effect")
      if(value === pregunta.correcta){
        setHelperText("Respuesta correcta")
        setCorrectas(correctas + 1)
      } 
      else{
        setHelperText("Respuesta es incorrecta")
      }
    }
  }, [value,pregunta, mostrarSolucion, correctas, setCorrectas])

  const handleRadioChange = (event) => {
    console.log("Radio Change")
    console.log(event.target.value)
    setValue(parseInt(event.target.value, 10));
    //setHelperText(' ');
    //setError(false);
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
                <FormControlLabel value={idx} control={<Radio/>} label={respuesta}/>
              )
            })
          }
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </Card>
    </>
  )
}