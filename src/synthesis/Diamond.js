import React from "react";

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ReactPlayer from "react-player";
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  },
  media: {
    paddingTop: '81.25%',
    borderRadius: '50%',
    margin: '28px'
},
});

export default function Diamond() {
  const classes = useStyles();


  return (
    <>
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="stretch"
      spacing={2}
    >
    <Typography variant="h3" component="h2" gutterBottom>
      Hay diamantes en la mina de datos 
    </Typography>
    <Grid item xs={4}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.hbs.edu/Style%20Library/api/headshot.aspx?id=6615"
          title="Edificación FVL"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
          Gary Loveman
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Es un economista, empresario y ex profesor académico estadounidense director de Harrah's Entertainment
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
    </Grid>
    <Grid item xs={8}>
      <Typography variant="subtitle1" gutterBottom align="justify">
        El caso de estudio trata sobre como el casino Harra’s Entertainment ha superado a sus competidores y ha logrado beneficios importantes, explorando sus bases de datos para desarrollar incentivos atractivos para los clientes.
        </Typography>
      <Typography variant="subtitle1" gutterBottom align="justify">
        Mientras los demás casinos invertían en instalaciones costosas y ostentosas, Harrah’s intenta incrementar sus ganancias acudiendo a los datos para analizar el comportamiento y los perfiles de sus clientes, tratando de persuadirlos desde sus gustos o preferencias. Sobre todo habiendo comprobado que solo un pequeño porcentaje de lo que sus clientes destinaban al juego era utilizado en sus instalaciones y que la clientela con perfil económico alto o de grandes apostadores a la que apuntaban antes no era precisamente la mejor clientela con la que contaban. Para ello, la empresa implementó una tarjeta de jugador llamada Total Gold, en la cual acumulaba puntos para canjearla por servicios. Si bien era un sistema que tenía sus fallas, los sistemas de información habían acumulado una enorme cantidad de datos de los clientes y sus preferencias. 
      </Typography>
    </Grid>
    </Grid>
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="stretch"
      spacing={2}
    >
      <Box m={1}/>

      <ReactPlayer url='https://youtu.be/aLIeEucdvSI' width={'100%'} height={500}/>


      <Typography variant="subtitle1" gutterBottom align="justify">
      Los datos recabados permiten además categorizar a los clientes, brindarles actividades u ofertas más afines según sus preferencias, también lleva a los clientes de menor categoría a la obsesión por alcanzar una categoría mayor y poder disfrutar de ser un cliente preferencial.
      
      Otras conductas de un cliente como periodicidad, atracciones visuales y servicios de preferencia pueden ser medidas con la obtención de sus datos simplemente otorgándoles una tarjeta personal registrada para realizar actividades de compra, juegos u otras actividades que quizás no sean tan rentables para el negocio en cuanto a transacciones realizadas con el plástico, pero si en los datos obtenidos que permiten cambiar estrategias de marketing ajustadas a la necesidad de una empresa.
      </Typography>
      <Typography variant="subtitle1" gutterBottom align="justify">
      La exploración de datos o data mining en profundidad y el marketing basado en la ciencia de decisiones serían de poco valor para lograr incrementos de ventas en establecimientos equivalentes si no fuese por el enfoque total hacia la satisfacción del cliente.
      También se utilizó el sistema para medir el desempeño de sus empleados  en cuanto a la satisfacción de los clientes. Estas medidas de satisfacción del cliente basada en calificaciones ha permitido a nuestros locales seguir creciendo, incluso aquellos en mercados con problemas.
      En conclusión, mientras algunas empresas invierten grandes montos de dinero en construcción e intentan mantener a los clientes forzosamente, otras recaban datos y adecúan sus servicios en pos de las preferencias y/o necesidades de sus clientes, brindándoles lo que realmente necesitan para sentirse más cómodos con el producto final en varios aspectos.
      </Typography>
    
    </Grid>
    </>
  )
}