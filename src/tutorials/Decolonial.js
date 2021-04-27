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

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },

}));


export default function Decolonial() {
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
        Certificaciones en Dirección de Proyectos
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
          <Card>
          <iframe title={"podcast"} src="https://anchor.fm/matas-a-wersocky/embed/episodes/Programas-de-Certificacin-en-Direccin-de-Proyectos-eujav6/a-a56r1fd" height="102px" width="400px" frameborder="0" scrolling="no" style={{width:"100%"}}/>
            <CardContent style={{backgroundColor: "#99ccff"}}>
              <Typography variant="h5" gutterBottom>
                Para completar el cuestionario recomendamos escuchar el podcast producido por Matías Wersocky
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box m={1}/>
      <form onSubmit={handleSubmit}>
        <Card>
          <FormControl component="fieldset" error={error} className={classes.formControl}>
            <Typography variant="h6" gutterBottom >
              ¿El examen de Certificación Profesional en Dirección de Proyectos (PMP) cómo se estructura?
            </Typography>

            <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
              <FormControlLabel value="1" control={<Radio />} label=" 1) Se estructura en Grupos de procesos." />
              <FormControlLabel value="2" control={<Radio />} label="2) Se estructura en Áreas de conocimiento." />
            </RadioGroup>
            <FormHelperText>{helperText}</FormHelperText>
          </FormControl>
        </Card>
        <Box m={2}/>

        <Card>
        <FormControl component="fieldset" error={error} className={classes.formControl}>
          <Typography variant="h6" gutterBottom >
            La certificación de Profesional en Dirección de Proyectos tiene una vigencia de:
          </Typography>

          <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
            <FormControlLabel value="1" control={<Radio />} label=" 1) 2 años." />
            <FormControlLabel value="2" control={<Radio />} label="2) 3 años." />
            <FormControlLabel value="2" control={<Radio />} label="3) 4 años." />
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
        </Card>
        <Box m={2}/>

        <Card>
        <FormControl component="fieldset" error={error} className={classes.formControl}>
          <Typography variant="h6" gutterBottom >
            ¿Qué son las Unidades de desarrollo profesional (PDUs)?
          </Typography>

          <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
            <FormControlLabel value="1" control={<Radio />} label=" 1)  Es la unidad de medida que se utiliza en el examen"/>
            <FormControlLabel value="2" control={<Radio />} label="2) Es la unidad de medida para contabilizar los requisitos al examen" />
            <FormControlLabel value="2" control={<Radio />} label="3) Es la unidad de medida para contabilizar y mantener la certificación" />
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
        </Card>
        <Box m={2}/>

        <Card>
        <FormControl component="fieldset" error={error} className={classes.formControl}>
          <Typography variant="h6" gutterBottom >
            ¿Cual es la distribución de puntos PDUs que se necesita para Profesional en Dirección de Proyectos?
          </Typography>
          <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
            <FormControlLabel value="1" control={<Radio />} label=" 1) 60 PDUs, 30 en Educación y 30 en Devolver a la profesión." />
            <FormControlLabel value="2" control={<Radio />} label="2) 50 PDUs, 25 en Educación y 25 en Devolver a la profesión." />
            <FormControlLabel value="2" control={<Radio />} label="2) 60 PDUs, 35 en Educación y 25 en Devolver a la profesión." />
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
        </Card>
        <Box m={2}/>

        <Card>
        <FormControl component="fieldset" error={error} className={classes.formControl}>
          <Typography variant="h6" gutterBottom >
            Para las certificaciones PMI-ACP, PMI-RMP y PMI-SP, cuál es la distribución de PDUs?
          </Typography>

          <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
            <FormControlLabel value="1" control={<Radio />} label=" 1) 50 PDUs, 18 mínimo en Educación y 32 en Devolver a la profesión." />
            <FormControlLabel value="2" control={<Radio />} label="2) 40 PDUs, 18 mínimo en Educacion y 22 en Devolver a la profesión." />
            <FormControlLabel value="2" control={<Radio />} label="3) 30 PDUs, 18 mínimo en Educación y 12 en Devolver a la profesión." />
          </RadioGroup>

          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
        </Card>
        <Box m={2}/>

        <Card>
        <FormControl component="fieldset" error={error} className={classes.formControl}>
          <Typography variant="h6" gutterBottom >
            Esta certificación indica que el individuo posee el conocimiento de los principios de “La guía de los fundamentos para la dirección de Proyectos”. ¿De qué certificación hablamos? 
          </Typography>

          <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
            <FormControlLabel value="1" control={<Radio />} label=" 1)  Certificación en Profesional en Dirección de Proyectos (PMP)." />
            <FormControlLabel value="2" control={<Radio />} label="2) Certificación en Técnico Certificado en Dirección de Proyectos." />
            <FormControlLabel value="2" control={<Radio />} label="3) Certificacion en Profesional en Dirección de Portafolios (PfMP)." />
            <FormControlLabel value="2" control={<Radio />} label="4) Certificación en Profesional en Análisis de Negocios (PMI-PBA)." />
            <FormControlLabel value="2" control={<Radio />} label="5) Certificación en Practicante Certificado en Enfoques Ágiles." />
            <FormControlLabel value="2" control={<Radio />} label="6) Certificación en Profesional en Gestión de Riesgos (PMI-RMP)." />
            <FormControlLabel value="2" control={<Radio />} label="6) Certificación en Profesional en Gestión de Tiempos (PMI-SP)." />  
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
        </Card>
        <Box m={2}/>

        <Card>
          <FormControl component="fieldset" error={error} className={classes.formControl}>
            <Typography variant="h6" gutterBottom >
              ¿Cuáles son las dos certificaciones muy específicas que se mencionan en el podcast?
            </Typography>

            <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
              <FormControlLabel value="1" control={<Radio />} label=" 1) Certificación en Profesional en Análisis de Negocios (PMI-PBA) y Practicante Certificado en Enfoques Ágiles (PMI-ACP)." />
              <FormControlLabel value="2" control={<Radio />} label="2) Certificación en Profesional en Gestión de Riesgos (PMI-RMP) y Profesional en Gestión de Tiempos (PMI-SP). " />
              <FormControlLabel value="2" control={<Radio />} label="3) Certificación en Profesional en Dirección de Proyectos (PMP) y Certificación en Técnico Certificado en Dirección de Proyectos (CAPM). " />
            </RadioGroup>
            <FormHelperText>{helperText}</FormHelperText>
          </FormControl>
        </Card>

        <Box m={2}/>

        <Card>
          <FormControl component="fieldset" error={error} className={classes.formControl}>
            <Typography variant="h6" gutterBottom >
            La certificación PMI-RMP reconoce el conocimiento en el área especializada de evaluar e identificar los riesgos de los proyectos. ¿Esta afirmación es correcta?
            </Typography>

            <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
              <FormControlLabel value="1" control={<Radio />} label=" 1) Verdadero." />
              <FormControlLabel value="2" control={<Radio />} label="2) Falso. " />
            </RadioGroup>
            <FormHelperText>{helperText}</FormHelperText>
          </FormControl>
        </Card>

        <Box m={2}/>

        <Card>
          <FormControl component="fieldset" error={error} className={classes.formControl}>
            <Typography variant="h6" gutterBottom >
              Gracias a la certificación (CAPM) se busca reconocer el conocimiento y la experiencia en el área especializada de desarrollar y mantener los cronogramas y tiempos de los proyectos.
            </Typography>

            <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
              <FormControlLabel value="1" control={<Radio />} label=" 1) Verdadero." />
              <FormControlLabel value="2" control={<Radio />} label="2) Falso. " />
            </RadioGroup>
            <FormHelperText>{helperText}</FormHelperText>
          </FormControl>
        </Card>

        <Box m={2}/>

        <Card>
          <FormControl component="fieldset" error={error} className={classes.formControl}>
            <Typography variant="h6" gutterBottom >
              ¿Cual es la certificación que demuestra la habilidad de trabajar efectivamente con los interesados para definir sus requerimientos de negocio
            </Typography>

            <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
              <FormControlLabel value="1" control={<Radio />} label=" 1) (PMP)." />
              <FormControlLabel value="2" control={<Radio />} label="2) (PMI-PBA)." />
              <FormControlLabel value="2" control={<Radio />} label="3) (PMI-ACP)." />
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