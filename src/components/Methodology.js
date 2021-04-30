import React from "react";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Kanban from "./Kanban";
import Typography from '@material-ui/core/Typography';
import { Box, Card, CardActionArea, CardMedia, Divider } from "@material-ui/core";
import prototipado from "../resources/prototipado.jpeg"
import YouTube from 'react-youtube';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 250,

  },
}));

const opts = {
  height: '500',
  width: '100%'
};

export default function Simulation() {
  const classes = useStyles();

  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  return (
    <> 
      <Container maxWidth="lg">
        <main>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.mainGrid}
        > 
          <Grid item xs={12}>
            <Typography variant="h3" component="h2" gutterBottom>
              Modelos de ciclo de vida y Metodologias
            </Typography>
            <Divider/>
          </Grid>
          <Box m={1}/>
          <Grid item xs={8}>
            <Typography variant="h5" component="h2" gutterBottom style={{fontStyle: "italic", color:"#808080"}}>
              Introducción
            </Typography>
            <Typography variant="subtitle1" gutterBottom align="justify">
              En la siguiente actividad, 'introduccion...' un tablero Kanban junto con la Metodología de ciclo de vida propuesta por McConan en el libro ... (Definir bien la intro)
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom style={{fontStyle: "italic", color:"#808080"}}>
              Modelo de ciclo de vida
            </Typography>
            <Typography variant="subtitle1" gutterBottom align="justify">
              El autor define ciclo de vida como las distintas etapas de un Software. Desde el Inicio del Sistema, hasta la versión 'n' en la última máquina del último cliente.
            </Typography>
            <Typography variant="subtitle1" gutterBottom align="justify">
              Por otra parte, un modelo de ciclo de vida preescribe lo que pasa en las distintas instancias de un ciclo de vida.
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom style={{fontStyle: "italic", color:"#808080"}}>
              Prototipado Evolutivo
            </Typography>
            <Typography variant="subtitle1" gutterBottom align="justify">
              Uno de los modelos de ciclo de vida propuesto por McConan es el Prototipado Evolutivo. Este consiste en definir una serie de requerimientos iniciales, y luego comenzar con su diseño e implementación. Luego, de tener algunas funcionalidades implementadas, se validan con el cliente y se prosigue con el proyecto. Finalmente, cuando se termina el tiempo planificado (o los recursos) se entrega el prototipo y el proyecto termina.
            </Typography>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={prototipado}
                  title="Prototipado evolutivo"
                />
              </CardActionArea>
            </Card>
            <Box m={2}/>
            <Typography variant="h5" component="h2" gutterBottom style={{fontStyle: "italic", color:"#808080"}}>
              Kanban
            </Typography>
            <Typography variant="subtitle1" gutterBottom align="justify">
              Aca falta agregar una buena descripción de Kanban
            </Typography>

            <YouTube videoId="Bcid33tgq8A" opts={opts} onReady={onReady} />

            <Box m={2}/>
            <Typography variant="h5" component="h2" gutterBottom style={{fontStyle: "italic", color:"#808080"}}>
              Actividad
            </Typography>
            <Typography variant="subtitle1" gutterBottom align="justify">
              Usted debe crear un tablero Kanban que modelo el protipado evolutivo. En la columna 'Por hacer' puede agregar Kanban Cards con los requrimientos. 
              
            </Typography>
            <Typography variant="subtitle1" gutterBottom align="justify">
              Pruebe crear más columnas que definan los pasos del prootipado evolutivo
            </Typography>
          </Grid>

          <Box m={1}/>
          <Grid item xs={12}>
              <Kanban/>
          </Grid>
        </Grid>
        </main>
      </Container>
    </>
  )
}
