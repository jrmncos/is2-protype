import React from "react"
import Grid from '@material-ui/core/Grid';
import { Box, Card, Typography } from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

export default function Genero() {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

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
        <Card>
          <FormControl component="fieldset" error={error} className={classes.formControl}>
            <Typography variant="h6" gutterBottom >
              La “Teoría de la domesticación”, propuesta por Roger Silverstone y Hirsch (1992) describe la relación entre las tecnologías y su consumo, indicando que las tecnologías para ser funcionales, deben ser insertadas
            </Typography>

            <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
              <FormControlLabel value="1" control={<Radio />} label=" 1) En la vida cotidiana." />
              <FormControlLabel value="2" control={<Radio />} label="2) En la vida laboral." />
              <FormControlLabel value="3" control={<Radio />} label="3) En el desarrollo de nuevas tecnologías." />
              
            </RadioGroup>
            <FormHelperText>{helperText}</FormHelperText>
          </FormControl>
        </Card>
        <Box m={2}/>

        <Card>
        <FormControl component="fieldset" error={error} className={classes.formControl}>
          <Typography variant="h6" gutterBottom >
            La “Teoría de la domesticación” se mostraba como una herramienta útil para
          </Typography>

          <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
            <FormControlLabel value="1" control={<Radio />} label=" 1) Explicar nuevas tecnologías a todo el mundo" />
            <FormControlLabel value="2" control={<Radio />} label="2) Explicar como la tecnología pasa a formar parte de simbolismos e identidades de género" />
            <FormControlLabel value="3" control={<Radio />} label="3) Explicar la tecnología con igual de condiciones, tanto a hombres como mujeres, y de esa manera lograr la integración social de ambos" />
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
        </Card>
        <Box m={2}/>

        <Card>
        <FormControl component="fieldset" error={error} className={classes.formControl}>
          <Typography variant="h6" gutterBottom >
            El Guión de género o gender script, es una herramienta que explica como el género está implicado en
          </Typography>

          <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
            <FormControlLabel value="1" control={<Radio />} label=" 1) El diseño de las tecnologías"/>
            <FormControlLabel value="2" control={<Radio />} label="2) El desarrollo de las tecnologías" />
            <FormControlLabel value="3" control={<Radio />} label="3) Las pruebas realizadas en las tecnologías" />
            <FormControlLabel value="4" control={<Radio />} label="4) Ninguna de las anteriores" />
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
        </Card>
        <Box m={2}/>

        <Card>
        <FormControl component="fieldset" error={error} className={classes.formControl}>
          <Typography variant="h6" gutterBottom >
            La clasificación de los guiones de géneros es: Individual, simbólico y estructural
          </Typography>
          <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
            <FormControlLabel value="1" control={<Radio />} label=" 1) Verdadero" />
            <FormControlLabel value="2" control={<Radio />} label="2) Falso" />
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
        </Card>
        <Box m={2}/>

        <Card>
        <FormControl component="fieldset" error={error} className={classes.formControl}>
          <Typography variant="h6" gutterBottom >
            Dentro de las fases de diseño de software, nos interesa más introducir el concepto de guiones de género es en:
          </Typography>

          <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
            <FormControlLabel value="1" control={<Radio />} label=" 1) Fase de diseño" />
            <FormControlLabel value="2" control={<Radio />} label="2) Fase de análisis y especificaciones de los requerimientos " />
            <FormControlLabel value="3" control={<Radio />} label="3) Fase de mantenimiento" />
            
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
        </Card>
        <Box m={2}/>

        <Card>
        <FormControl component="fieldset" error={error} className={classes.formControl}>
          <Typography variant="h6" gutterBottom >
            Teniendo en cuenta el ejemplo de la incorporación de máquinas de afeitar eléctricas de Philips, marque 3 las opciones que considere incorrectas:
          </Typography>

          <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
            <FormControlLabel value="1" control={<Radio />} label=" 1) El diseño de las máquinas de afeitar era el mismo para todos" />
            <FormControlLabel value="2" control={<Radio />} label="2) El diseño de las afeitadoras para mujeres tenían un diseño diferentes a las afeitadoras de los hombres" />
            <FormControlLabel value="3" control={<Radio />} label="3) Era posible realizar pequeños arreglos a las afeitadoras por mujeres" />
            <FormControlLabel value="4" control={<Radio />} label="4) Las afeitadoras incluían un set de herramientas para que cualquiera pudiera realizarle arreglos" />
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
        </Card>
        <Box m={2}/>

        <Card>
        <FormControl component="fieldset" error={error} className={classes.formControl}>
          <Typography variant="h6" gutterBottom >
            Las Tecnologías dirigidas “a todo el mundo”
          </Typography>

          <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
            <FormControlLabel value="1" control={<Radio />} label=" 1) Son neutras y utilizables por todo el mundo" />
            <FormControlLabel value="2" control={<Radio />} label="2) Siguen presentando barreras para algunos usuarios " />            
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
        </Card>
        <Box m={2}/>

        <Card>
        <FormControl component="fieldset" error={error} className={classes.formControl}>
          <Typography variant="h6" gutterBottom >
            Clasificación de los varios modos en que operan los guiones de género, según Rommes. Marque 3 correctas
          </Typography>

          <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
            <FormControlLabel value="1" control={<Radio />} label=" 1) Reforzar las diferencias entre trabajo masculino y trabajo femenino" />
            <FormControlLabel value="2" control={<Radio />} label="2) Unificar las diferencias entre trabajo masculino y trabajo femenino " />
            <FormControlLabel value="3" control={<Radio />} label="3) Crear barreras de accesibilidad a las tecnologías que siguen perjudicando a algunas personas" />
            <FormControlLabel value="4" control={<Radio />} label="4) Eliminan las barreras de accesibilidad a las tecnologías" />
            <FormControlLabel value="4" control={<Radio />} label="5) Reproducir representaciones estereotipadas de género" />
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
        </Card>

      </form>
      <Box m={2}/>
      <Button type="submit" variant="outlined" color="primary" className={classes.button}>
            Completar!
      </Button>

    </Grid>
    </>
  )
}