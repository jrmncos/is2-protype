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
      10 ways to have a better conversation
    </Typography>    
    <Divider/>
    <Box m={1}/>
    <YouTube videoId="R1vskiVDwl4" opts={opts} onReady={onReady} />
    <Box m={1}/>

    <Typography variant="subtitle1" component="h2" gutterBottom>
      En la charla TED “10 ways to have a better conversation”, de Celeste Headlee, publicada en Mayo de 2015, se plantea cómo las personas no escuchan al otro, no prestan atención a lo que el otro dice y solo nos concentramos en contestar.
		</Typography>

    <Typography variant="subtitle1" component="h2" gutterBottom>
      Headlee dice que somos menos propensos a conectar, lo que significa que no escuchamos al resto. Y que tomamos decisiones sobre dónde vivir, con quién vivir e incluso quiénes serán nuestros amigos, con base a lo que ya creemos y no sobre opiniones que nos pueden llegar a dar otras personas; eso significa que no escuchamos al resto. Además, nos comenta que una conversación requiere un equilibrio entre hablar y escuchar, y en algún lugar del camino, ese equilibrio se pierde.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify"  >
    Por lo que propone enseñar a conversar y a escuchar, a través de una serie de diez reglas:
    <List>
      <ListItem>
        <ArrowRightIcon />
        <ListItemText
          disableTypography
          primary={
          <Typography variant="subtitle1" gutterBottom align="justify">
            1. 	No ser multitareas. Es decir, estar presentes 100% en las conversaciones, no mitad presente y mitad ausente (dejar de lado celular, Tablet, llaves del auto, etc)
          </Typography>
          }
          />
      </ListItem>

      <ListItem>
        <ArrowRightIcon />
        <ListItemText
          disableTypography
          primary={
          <Typography variant="subtitle1" gutterBottom align="justify">
           2. 	No ser dogmático. Iniciar una conversación suponiendo que hay algo que aprender, y no parecer un sabiondo.
          </Typography>
          }
          />
      </ListItem>

      <ListItem>
        <ArrowRightIcon />
        <ListItemText
          disableTypography
          primary={
          <Typography variant="subtitle1" gutterBottom align="justify">
             3. 	Usar preguntas abiertas. Evitar las preguntas que tengan respuestas como sí o no, y utilizar aquellas que comiencen con quién, qué, cuándo, dónde, por qué o cómo.
          </Typography>
          }
          />
      </ListItem>

      <ListItem>
        <ArrowRightIcon />
        <ListItemText
          disableTypography
          primary={
          <Typography variant="subtitle1" gutterBottom align="justify">
             4. 	Seguir el ritmo. Prestar atención en las conversaciones y no distraerse con por ejemplo, con pensamientos, ya que eso puede ocasionar que vuelva a preguntar algo que ya le han respondido.
          </Typography>
          }
          />
      </ListItem>

      <ListItem>
        <ArrowRightIcon />
        <ListItemText
          disableTypography
          primary={
          <Typography variant="subtitle1" gutterBottom align="justify">
             5. 	Si no se sabe algo, decir que no se sabe. Hay que ser prudente sobre los temas que usted cree ser experto y sobre los que afirma saber con seguridad. Hay que tratar de ser precavidos.
          </Typography>
          }
          />
      </ListItem>

      <ListItem>
        <ArrowRightIcon />
        <ListItemText
          disableTypography
          primary={
          <Typography variant="subtitle1" gutterBottom align="justify">
             6. 	No comparar sus experiencias con las de los demás. Toda experiencia es individual , por lo que si alguien está comentando un problema, no se compare con que la pasó peor, o que también tuvo consecuencias, ya que no es el protagonista en ese momento.
          </Typography>
          }
          />
      </ListItem>

      <ListItem>
        <ArrowRightIcon />
        <ListItemText
          disableTypography
          primary={
          <Typography variant="subtitle1" gutterBottom align="justify">
            7. 	Procurar no ser repetitivos. Es condescendiente y muy aburrido.
          </Typography>
          }
          />
      </ListItem>

      <ListItem>
        <ArrowRightIcon />
        <ListItemText
          disableTypography
          primary={
          <Typography variant="subtitle1" gutterBottom align="justify">
            8. 	Evitar los detalles. A las personas no les interesa las fechas, años, nombres. Les importa quien/es le/s está/n hablando, cómo son, qué tienen en común.
          </Typography>
          }
          />
      </ListItem>
      <ListItem>
        <ArrowRightIcon />
        <ListItemText
          disableTypography
          primary={
          <Typography variant="subtitle1" gutterBottom align="justify">
            9. 	Escuchar. Es la más importante. Hay que evitar ser dos personas gritándose oraciones a penas relacionadas, y poner el esfuerzo y la energía en prestar atención en la conversación.
          </Typography>
          }
          />
      </ListItem>
      <ListItem>
        <ArrowRightIcon />
        <ListItemText
          disableTypography
          primary={
          <Typography variant="subtitle1" gutterBottom align="justify">
            10.  Ser breves. Headlee compara a una buena charla con una minifalda; debe ser corta como para captar interés, pero lo suficientemente larga para cubrir el tema.
          </Typography>
          }
          />
      </ListItem>

    </List>
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify"  >
     Para finalizar, coincidiendo con Headlee, podemos decir que si bien las reglas planteadas son esenciales para poder establecer una conversación, si dominamos al menos una de ellas, ya se podrán ver resultados favorables en las conversaciones.
    </Typography>

    <Box m={1}/>
    <Typography variant="h5" component="h2" gutterBottom style={{fontStyle: "italic", color:"#808080"}}>
      Referencias
    </Typography>

    <Typography variant="subtitle1" gutterBottom style={{fontStyle: "italic"}} align="justify">
      TED - Celeste Headflee (2015). 10 ways to have a better conversation.
      <Link href="#">
        https://www.ted.com/talks/celeste_headlee_10_ways_to_have_a_better_conversation
      </Link>
    </Typography>

    </Grid>
    </>
  )
}