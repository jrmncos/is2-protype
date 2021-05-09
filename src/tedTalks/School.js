import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {  Box, Divider } from "@material-ui/core";
import YouTube from 'react-youtube';
import { Link } from "wouter";

const opts = {
  height: '500',
  width: '100%'
};

export default function School() {

  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

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
      Ken Robinson: ¿Do schools kill creativity?
    </Typography>    
    <Divider/>
    <Box m={1}/>
    <YouTube videoId="iG9CE55wbtY" opts={opts} onReady={onReady} />
    <Box m={1}/>

    <Typography variant="subtitle1" component="h2" gutterBottom>
      En la charla TED, “Do schools kill creativity?” de Ken Robinson. El autor comienza relatando una pequeña historia y exponiendo sobre cómo los niños se arriesgan y no tienen miedo equivocarse. Lo cual hace que al estar abiertos a equivocarse, se les pueden ocurrir cosas más originales.
      Por otro lado, menciona como todos los sistemas educativos del mundo tienen la misma forma jerárquica de educar, primero las matemáticas y lenguas, debajo humanidades y por último el arte, ya que los sistemas educativos se crearon para satisfacer las necesidades de la industrialización, es decir, las materias más útiles para el trabajo, eran más importantes y se dejaban de lado por ejemplo, el arte.
		</Typography>
    <Typography variant="subtitle1" component="h2" gutterBottom>
		  Además explica tres cosas que se saben de la inteligencia: Primero, que es diversa, segundo, la inteligencia es dinámica y tercero que es única. Luego cuenta una anécdota de cómo Gillian Lynne (Coreógrafa de obras como “Cats” y “El fantasma de la ópera)  descubrió su talento, Cuando era pequeña en la escuela creían que tenía un trastorno de aprendizaje, por lo cual la llevaron a un especialista. El cual dejó a la niña en una habitación con la radio encendida y mientras observaba con la madre desde otro lugar, ven que Gillian comienza a moverse al ritmo de la música, lo cual el médico le dijo a la madre: "Sra. Lynne, Gillian no está enferma, ella es una bailarina, llévela a la escuela de danza.". Luego de entrar a la escuela del Royal Ballet y graduarse, fundó su propia compañía de danza y fue responsable de las obras musicales más importantes de la historia. Ken menciona que quizás otro médico le recetaba medicamentos y le pedía que se calmara, y no llegaría a ser lo que es. 
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify"  >
      Por último, Robinson llega a la conclusión: “Nuestra única esperanza para el futuro es adoptar una nueva concepción de la ecología humana, una en que reconstruyamos nuestro concepto de la riqueza de la capacidad humana.” por lo cual repensar la forma de educar a los jóvenes y así poder brindarles un futuro mejor..
    </Typography>

    <Box m={1}/>
    <Typography variant="h5" component="h2" gutterBottom style={{fontStyle: "italic", color:"#808080"}}>
      Referencias
    </Typography>

    <Typography variant="subtitle1" gutterBottom style={{fontStyle: "italic"}} align="justify">
      Robinson, Ken (2016) Do schools kill creativity?
      <Link href="#">
        https://www.ted.com/talks/sir_ken_robinson_do_schools_kill_creativity?language=es 
      </Link>
    </Typography>

    </Grid>
    </>
  )
}