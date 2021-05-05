import React from "react"
import Grid from '@material-ui/core/Grid';
import { Box, Card, CardContent, Divider, Typography } from "@material-ui/core";

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
    titulo: '¿El examen de Certificación Profesional en Dirección de Proyectos (PMP) cómo se estructura?',
    respuestas: ['Se estructura en Grupos de procesos.', 'Se estructura en Áreas de conocimiento.'],
    correcta: 0
  },
  {
    titulo: 'La certificación de Profesional en Dirección de Proyectos tiene una vigencia de:',
    respuestas: ['2 años', '3 años', '3 años'],
    correcta:1
  },
  {
    titulo: '¿Qué son las Unidades de desarrollo profesional (PDUs)?',
    respuestas: ['Es la unidad de medida que se utiliza en el examen', 'Es la unidad de medida para contabilizar los requisitos al examen', 'Es la unidad de medida para contabilizar y mantener la certificación'],
    correcta:2
  },
  {
    titulo: '¿Cual es la distribución de puntos PDUs que se necesita para Profesional en Dirección de Proyectos?',
    respuestas: ['60 PDUs, 30 en Educación y 30 en Devolver a la profesión.', '50 PDUs, 25 en Educación y 25 en Devolver a la profesión.', '60 PDUs, 35 en Educación y 25 en Devolver a la profesión.'],
    correcta:2
  },
  {
    titulo: 'Para las certificaciones PMI-ACP, PMI-RMP y PMI-SP,¿Cuál es la distribución de PDUs?',
    respuestas: ['50 PDUs, 18 mínimo en Educación y 32 en Devolver a la profesión.', '40 PDUs, 18 mínimo en Educacion y 22 en Devolver a la profesión.', '30 PDUs, 18 mínimo en Educación y 12 en Devolver a la profesión.'],
    correcta:2
  },
  {
    titulo: 'Esta certificación indica que el individuo posee el conocimiento de los principios de “La guía de los fundamentos para la dirección de Proyectos”. ¿De qué certificación hablamos?',
    respuestas: ['Certificación en Profesional en Dirección de Proyectos (PMP)', 'Certificación en Técnico Certificado en Dirección de Proyectos (CAPM)', 'Certificacion en Profesional en Dirección de Portafolios (PfMP) ', 'Certificación en Profesional en Análisis de Negocios (PMI-PBA)', 'Certificación en Practicante Certificado en Enfoques Ágiles (PMI-ACP) ', 'Certificación en Profesional en Gestión de Riesgos (PMI-RMP)', 'Certificación en Profesional en Gestión de Tiempos (PMI-SP)'],
    correcta:1
  },
  {
    titulo: '¿Cuáles son las dos certificaciones muy específicas que se mencionan en el podcast?',
    respuestas: ['Certificación en Profesional en Análisis de Negocios (PMI-PBA) y Practicante Certificado en Enfoques Ágiles (PMI-ACP).', 'Certificación en Profesional en Gestión de Riesgos (PMI-RMP) y Profesional en Gestión de Tiempos (PMI-SP). ', 'Certificación en Profesional en Dirección de Proyectos (PMP) y Certificación en Técnico Certificado en Dirección de Proyectos (CAPM).'],
    correcta:1
  },
  {
    titulo: 'La certificación PMI-RMP reconoce el conocimiento en el área especializada de evaluar e identificar los riesgos de los proyectos. ¿Esta afirmación es correcta?',
    respuestas: ['Verdadero', 'Falso'],
    correcta:0
  },
  {
    titulo: 'Gracias a la certificación (CAPM) se busca reconocer el conocimiento y la experiencia en el área especializada de desarrollar y mantener los cronogramas y tiempos de los proyectos.',
    respuestas: ['Verdadero', 'Falso'],
    correcta: 1
  },
  {
    titulo: '¿Cuál es la certificación que demuestra la habilidad de trabajar efectivamente con los interesados para definir sus requerimientos de negocio?',
    respuestas: ['(PMP).', 'PMI-PBA).', '(PMI-ACP).'],
    correcta: 1
  },
  
]

export default function Certificaciones() {
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