import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import YouTube from 'react-youtube';
import { Box, Divider } from "@material-ui/core";

const opts = {
  height: '500',
  width: '100%'
};

export default function Water() {

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
      David Foster Wallace. This is water. Discurso de Graduación. Kenyon College.
		</Typography>

    <Divider/>
    <Box m={1}/>
    <YouTube videoId="TwzEZPLisBM" opts={opts} onReady={onReady} />
    <Box m={1}/>

    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="stretch"
      spacing={2}
    >
    <Typography variant="subtitle1" component="h2" gutterBottom>
      En el discurso “This is water” de David Foster Wallace comienza con una pequeña historia relatada por Wallace sobre dos peces: “Érase dos peces jóvenes que nadaban juntos cuando de repente se toparon con un pez viejo, que los saludó y les dijo, «Buenos días, muchachos ¿Cómo está el agua?» Los dos peces jóvenes siguieron nadando un rato, hasta que eventualmente uno de ellos miró al otro y le preguntó, «¿Qué es el agua?».
    </Typography>

    <Typography variant="subtitle1" component="h2" gutterBottom>
      Luego el autor, explica que algo principal que importa en la educación, es que está, no te enseñe a pensar sino cómo vas a pensar. Por lo que menciona, si la libertad de pensar parece obvia y discutir sobre ella seria una perdida de tiempo, deberían pensar en la anécdota de los peces y dejar de lado el valor de lo que es obvio.,
		</Typography>

    <Typography variant="subtitle1" gutterBottom align="justify"  >
      A continuación cuenta una breve historia sobre dos personas y sus diferentes visiones sobre una misma situación, la cual sirve para realizar el análisis de cómo cada persona puede tener su interpretación sobre un mismo acontecimiento. Por lo cual, demuestra que las personas no deberían cerrarse a su forma de pensar y tener un pensamiento más abierto, para analizar el pensamiento cerrado de las personas, explica cómo las personas se creen el centro del universo y todas las experiencias son creadas alrededor de las mismas. Para esto, utiliza como ejemplo la posible vida de un adulto típico, en la cual se levanta temprano,va al trabajo, luego debe ir a comprar ya que no tiene que cenar y sufre del tránsito al momento de trasladarse. Comenta como esta persona se siente frustrada por pasar las distintas situaciones como encontrarse con el mal trato de una persona o los enojos de otra, y el solo querer llegar a su casa y estar tranquilo. El autor al utilizar este ejemplo, quiere demostrar como las personas se centran en su bienestar y no piensan en lo que podrían estar pasando las personas a su alrededor, es decir, alguna de esas personas que estaba apurada en el tránsito quizás estaba llevando a su hijo al hospital.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Con todo esto y retomando la historia de los peces, el autor quiere llegar a la conclusión que: “Es acerca de los valores que implica la real educación, que no tiene nada que ver con el acumular conocimiento y sí con la simple atención, atención a lo que es real y esencial, tan oculto en plena vista a nuestro alrededor, todo el tiempo, que tenemos que estar constantemente recordándonos a nosotros mismos, una y otra vez: Esto es agua. Esto es agua. Esto es agua.”
    </Typography>

	
		<Box m={1}/>
    <Typography variant="h5" component="h2" gutterBottom style={{fontStyle: "italic", color:"#808080"}}>
      Referencias
    </Typography>

    <Typography variant="subtitle1" gutterBottom style={{fontStyle: "italic"}} align="justify">
      
    </Typography>
    </Grid>
    </Grid>
    </>
  )
}