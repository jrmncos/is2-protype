import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 450,

  },
});

export default function IndieGames(){
  const classes = useStyles();

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
        Indie Games
      </Typography>
      
      <Box m={1}/>


      <Typography variant="subtitle1" gutterBottom align="justify">
        Indie Game: The Movie es una película estilo documental, en la cual podemos ver la historia de 3 videojuegos indies y cómo fue el desarrollo de los mismos, contados desde la perspectiva de sus desarrolladores. Los videojuegos que aparecen en el film son: Braid, Super Meat Boy y Fez.
      </Typography>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://i.ytimg.com/vi/vobkKX6Wblk/maxresdefault.jpg"
            title="Portada del documental en Netflix"
          />
          <CardContent>
            <Typography gutterBottom variant="body2" component="h2">
              Portada del documental estrenado en 2012 dirigido por James Swirsky, Lisanne Pajot
            </Typography>

          </CardContent>
        </CardActionArea>

      </Card>
      <Box m={1}/>
      <Typography variant="subtitle1" gutterBottom align="justify">
        Por el lado de Braid, se trata de un videojuego de plataformas desarrollado por Jonathan Blow y lanzado en el año 2008 para Xbox Live Arcade. En el film podemos ver que es un videojuego que partió de un prototipo que contenía la gran mayoría de rasgos que caracterizaron al juego en su versión final, como la habilidad del protagonista de volver atrás en el tiempo y los puzzles, puntos claves en la travesía que propone Braid. El juego obtuvo muy buenas críticas, tanto de jugadores como de medios especializados en videojuegos, y llegó a vender 10000 copias en el primer día de lanzamiento, sin embargo, Blow cuenta durante el film que se sintió decepcionado ya que según él, la mayoría de personas que jugaron el videojuego no entendieron el mensaje del mismo.
      </Typography>
      <Typography variant="subtitle1" gutterBottom align="justify">
        Por otro lado, tenemos el caso de Super Meat Boy, el cual es un juego de plataformas, desarrollado por Team Meat y lanzado en la misma plataforma en el año 2010. En el film, podemos ver que al momento de desarrollar el videojuego, los desarrolladores Edmund McMillen y Tommy Refenes se inspiraron en videojuegos de sus infancias, como por ejemplo Super Mario Bros. Y podemos ver también que tuvieron que apurarse en el desarrollo debido a que querían sacar el videojuego a la venta durante un evento de Xbox llamado “Game Feast”. El lanzamiento tuvo un arranque turbulento, debido a que en las primeras horas del lanzamiento el juego no aparecía en la tienda digital de Xbox, aún así logró vender 20000 copias en el primer día de lanzamiento. Es un juego que lo caracteriza su personaje principal, ya que se trata de un personaje hecho de carne y sin piel, y también tiene un humor particular, muy propio de los desarrolladores. En el film podemos ver que los desarrolladores se esforzaron mucho para poder terminar el desarrollo del videojuego y que tenían que dedicarle tanto tiempo que tuvieron que sacrificar el hecho de tener una vida social. Además de que en los últimos tramos del desarrollo, ambos desarrolladores se estaban quedando sin dinero.
      </Typography>

      <Typography variant="subtitle1" gutterBottom align="justify">
        Por último tenemos el caso de Fez, el cual es un juego de plataformas, desarrollado por Polytron, y fue lanzado en el año 2012  también para Xbox Live Arcade. El desarrollo de este juego fue un gran remolino de emociones para sus creadores por la inmensidad de problemas y situaciones complejas que tuvieron que afrontar durante el desarrollo, tanto a nivel planificación y desarrollo como a nivel organizacional. El desarrollo del videojuego fue tan complicado que uno de sus desarrolladores, Phil Fish, comentó que el juego fue re-hecho 3 veces, y que si no lograba terminar el videojuego, él iba a suicidarse.
      </Typography>

      <Typography variant="subtitle1" gutterBottom align="justify">
        Al finalizar el film nos queda claro que los desarrolladores de los 3 videojuegos, coincidieron en que a ellos les gusta hacer videojuegos indies, porque son creaciones muy personales, a diferencia de videojuegos triple AAA desarrollados por grandes empresas. Además, coincidieron en que jamás trabajarían para tales empresas.
      </Typography>
      
      </Grid>
    </>
  )
}