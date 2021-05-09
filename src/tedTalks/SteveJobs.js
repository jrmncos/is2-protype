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

export default function SteveJobs() {

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
      Jobs, Steve (2011) Steve Jobs Discurso en Stanford
    </Typography>    
    <Divider/>
    <Box m={1}/>
    <YouTube videoId="HHkJEz_HdTg" opts={opts} onReady={onReady} />
    <Box m={1}/>

    <Typography variant="subtitle1" component="h2" gutterBottom>
      Empieza diciendo que tiene el honor de estar presente y menciona que nunca se graduó y que estar en ese momento presente es lo más cerca que ha estado de una graduación universitaria.
      Cuenta tres historias relacionadas con su vida, dejando en cada una enseñanzas.
		</Typography>

    <Typography variant="subtitle1" component="h2" gutterBottom>
      La primera historia se refiere a “conectar los puntos''. Habla de que no podemos conectar los puntos hacia adelante, sólo podemos  hacerlo hacia atrás. Así que debemos confiar en que los puntos se conectarán alguna vez en el futuro. Además de que debemos confiar en algo, en nuestro instinto, el destino, la vida, o lo que sea.
      Esta forma de actuar a él dice que nunca lo dejó tirado, y que le marcó la diferencia en su vida.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify"  >
      La segunda historia es sobre el amor y la pérdida. En esta historia deja como enseñanza que el trabajo va a llenar gran parte de nuestras vidas, y la única forma de estar realmente satisfecho es hacer lo que consideramos un trabajo genial, un  trabajo que amemos. Si aún no lo encontramos, tenemos que seguir buscando, que no hay que conformarse.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      La tercera historia es sobre la muerte.
      Él dice que nadie quiere morir. Sin embargo la muerte es el destino que todos compartimos. Nadie ha escapado de ella. Es el agente de cambio de la vida donde retira lo viejo para hacer sitio a lo nuevo.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Menciona que ahora lo nuevo somos nosotros, pero dentro de no demasiado tiempo. Luego nos iremos convirtiendo en lo viejo, y seremos apartados. Nuestro tiempo es limitado, así que no debemos gastarlo viviendo la vida de otro.
      No dejar que las opiniones de los demás impidan que hagamos lo que queramos hacer.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Y lo más importante, tener el coraje de seguir a nuestro corazón y nuestra intuición. De algún modo ellos ya saben lo que tú realmente quieres ser.
      Todo lo demás pasa a ser secundario.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Finaliza contando que una publicación asombrosa llamada The Whole Earth Catalog, una de las biblias de su generación, creada por Stewart y su equipo que sacaron varios números y cuando llegó su momento, sacaron un último número donde en su contratapa decía: “Sigue hambriento. Sigue alocado”.
      Era su último mensaje de despedida.   
      Steve siempre ha deseado eso para él. Y termina el discurso deseándole lo mismo a todos los graduados. 
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Finaliza contando que una publicación asombrosa llamada The Whole Earth Catalog, una de las biblias de su generación, creada por Stewart y su equipo que sacaron varios números y cuando llegó su momento, sacaron un último número donde en su contratapa decía: “Sigue hambriento. Sigue alocado”.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Era su último mensaje de despedida.   
      Steve siempre ha deseado eso para él. Y termina el discurso deseándole lo mismo a todos los graduados. 
    </Typography>


    <Box m={1}/>
    <Typography variant="h5" component="h2" gutterBottom style={{fontStyle: "italic", color:"#808080"}}>
      Referencias
    </Typography>

    <Typography variant="subtitle1" gutterBottom style={{fontStyle: "italic"}} align="justify">
      Jobs, Steve (2011) Steve Jobs Discurso en Stanford 
      <Link href="#">
        https://www.youtube.com/watch?v=HHkJEz_HdTg 
      </Link>
    </Typography>
    </Grid>
    </>
  )
}