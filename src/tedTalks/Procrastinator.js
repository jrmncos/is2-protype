import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import YouTube from 'react-youtube';
import { Link } from "wouter";
import {  Box, Divider, List, ListItem, ListItemText } from "@material-ui/core";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const opts = {
  height: '500',
  width: '100%'
};

export default function Conversation() {

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
			Tim Urban: Inside the mind of a master procrastinator
		</Typography>

    <Divider/>
    <Box m={1}/>
    <YouTube videoId="arj7oStGLkU" opts={opts} onReady={onReady} />
    <Box m={1}/>

    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="stretch"
      spacing={2}
    >
    <Typography variant="subtitle1" component="h2" gutterBottom>
			El autor presenta dos comportamientos del procrastinador, el primero lo llama el Mono de la Gratificación Instantánea (Instant Gratification Monkey), a partir de ahora como “el Mono”, y Motor de Decisiones Racionales (Rational Decision-Maker), a partir de ahora como “el Motor”. 
		</Typography>

    <Typography variant="subtitle1" component="h2" gutterBottom>
			Explica que solo en la mente de la gente procrastinadora existe el Mono, que solo quiere divertirse y no tiene sentido del tiempo, más allá del presente. En cambio, el Motor es aquel que puede recordar el pasado y planificar el futuro. Usualmente el Mono toma el control de las acciones, lo que lleva a perder el tiempo haciendo cosas innecesarias.
		</Typography>

    <Typography variant="subtitle1" gutterBottom align="justify"  >
			Entonces, explica el autor, que cuando se acerca la fecha límite (o “deadline”) de los proyectos aparece la única cosa a la que el Mono le teme, el “Monstruo del Pánico”, a partir de ahora “el Monstruo”, cuando este Monstruo aparece el Motor logra obtener el control de la acciones. De esta manera, el procrastinador puede continuar todas las tareas acumuladas de los proyectos. 
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
			Menciona que este método funciona, pero que a partir de comentarios de sus lectores en su blog puede detectar que existe otro tipo de procrastinación, la procrastinación sin deadline. Este nuevo tipo de procrastinación provoca que el Mono nunca deje de tomar las decisiones, lo que provoca en la gente un efecto negativo, menciona Urban:
    </Typography>

		<Typography variant="subtitle1" gutterBottom align="justify"  style={{fontStyle: "italic"}}>
			“No tiene motivos para despertar algo, por eso no se contienen los efectos de la procrastinación; se postergan indefinidamente. Y es esta procrastinación de largo plazo la que es menos visible y de la que se habla menos que de la graciosa, de corto plazo, que tiene plazos. Por lo general se la padece en silencio y a solas. Y puede ser la fuente de enormes lamentos e infelicidad a largo plazo”.
		</Typography>

		<Typography variant="subtitle1" gutterBottom align="justify">
			Luego, Urban se corrige a sí mismo mencionando que piensa que todos somos procrastinadores, no hay procrastinadores y no-procrastinadores, la diferencia está en que hay gente que maneja mejor los deadlines.
    </Typography>

		<Typography variant="subtitle1" gutterBottom align="justify">
			Para concluir la charla, Urban nos muestra un Calendario de Vida, una imagen que contiene 1 (una) caja por cada semana en un periodo de 90 (noventa) años. Con esto Tim está queriendo demostrar que en realidad no es mucho tiempo, por eso debemos comenzar a pensar en qué cosas estamos procrastinando y qué cosas estamos postergando en la vida.
    </Typography>
    
		<Box m={1}/>
    <Typography variant="h5" component="h2" gutterBottom style={{fontStyle: "italic", color:"#808080"}}>
      Referencias
    </Typography>

    <Typography variant="subtitle1" gutterBottom style={{fontStyle: "italic"}} align="justify">
			Autor: Tim Urban Charla: https://www.ted.com/talks/tim_urban_inside_the_mind_of_a_master_procrastinator/transcript#t-830538
    </Typography>
    </Grid>
    </Grid>
    </>
  )
}