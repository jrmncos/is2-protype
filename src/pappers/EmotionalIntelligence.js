import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Box, Divider } from "@material-ui/core";
import { Link } from "wouter";

export default function EmotionalIntelligence() {

  return (
    <>
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="stretch"
      spacing={2}
    >
    <Typography variant="h3" component="h2" gutterBottom>
      Emotional Intelligence
    </Typography>    
    <Divider/>
    <Box m={1}/>
    <Typography variant="h5" component="h2" gutterBottom style={{fontStyle: "italic", color:"#808080"}}>
      Resumen “The Correlation between Emotional Intelligence and Project Management Success”
    </Typography>
    <Typography variant="subtitle1" gutterBottom align="justify"  >
      En el paper “The Correlation between Emotional Intelligence and Project Management Success” de los autores Mounir El Khatib, Mariam Almteiri, Shaikha Aysha Al Qasemi, se describe el estudio que se realizó en los emiratos árabes unidos para analizar la correlación entre la inteligencia emocional y el éxito de la gestión de proyectos.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Primero se detalla que es la inteligencia emocional, para lo cual cita a diferentes autores, uno de los primeros que cita, explica que se identifica cinco componentes en la inteligencia emocional: La autoconciencia, la autorregulación, la motivación, la empatía y habilidades sociales. Además de también mencionar la visión de otros autores sobre la inteligencia emocional.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Luego se describen las razones por las cuales el estudio se realiza en los emiratos árabes unidos, una de ellas es la cantidad de megaproyectos que se realizan en el lugar y la necesidad de project managers para los mismos.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Para poder realizar la investigación se hicieron encuestas diferentes gerentes de proyectos dentros se los distintos departamentos de la empresa “Emirates Airlines” en los EAU, para poder llegar a los encuestados se utilizó el método de muestreo de bola de nieve, el cual, hace que se le pida realizar la encuesta a un gerente y este refiera a otros para realizarla, y así conseguir más candidatos para la investigación. 
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Una vez finalizada la investigación,se detallan los resultados, los cuales confirman que la inteligencia emocional de un project manager se correlaciona positivamente con el éxito de un proyecto. 
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Por lo cual, para una mayor probabilidad de éxito de un proyecto recomiendan un gerente emocionalmente inteligente, ya que puede anticipar cualquier problema y abordarlo adecuadamente.
    </Typography>

    <Box m={1}/>
    <Typography variant="h5" component="h2" gutterBottom style={{fontStyle: "italic", color:"#808080"}}>
      Relación con PMBOK
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Podemos encontrar una relación del paper  “The Correlation between Emotional Intelligence and Project Management Success” con algunos de los tópicos de gestión de proyectos del PMBOK, en este caso podemos asociarlo a la gestión de recursos humanos y a la gestión de riesgos.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Por un lado se asocia a la gestión de recursos humanos, ya que la inteligencia emocional potencia los procesos de “Desarrollar el equipo” y “Dirigir el equipo” ya que mejora la relación del equipo lo cual es óptimo para llegar a buenos resultados de proyecto.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Luego se lo relaciona con la gestión de riesgos ya que los gerentes de proyectos al tener una buena inteligencia emocional hace que tengan mejores reacciones al momento de detectar un riesgo que ponga en peligro el proyecto y así lograr que todo el equipo avance correctamente.
    </Typography>

    <Box m={1}/>
    <Typography variant="h5" component="h2" gutterBottom style={{fontStyle: "italic", color:"#808080"}}>
      Referencias
    </Typography>

    <Typography variant="subtitle1" gutterBottom style={{fontStyle: "italic"}} align="justify">
      El Khatib, M., Almteiri, M. y Al Qasemi, S. (2021) The Correlation between Emotional Intelligence and Project Management Success. iBusiness, 13 , 18-29.
      <Link href="#">
        https://www.scirp.org/journal/paperinformation.aspx?paperid=107331
      </Link>
    </Typography>
    </Grid>
    </>
  )
}