import { CardHeader, Grid } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ImageZoom from 'react-medium-image-zoom'

import graficoScrum from'../../images/graph.png';


export default function ResultSimulation()  {
  const classes = useStyles();
  

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item xs={11}>
        <Card className={classes.root}>
          <CardHeader
            className={classes.subtitleResults}
            title={
              <Typography 
              variant="h6" component="h2">
                Resultados de la simulación
              </Typography>
            }
          />
        </Card>
      </Grid> 

      <Box m={1}/>
      <Grid item xs={11}>
        <Card className={classes.root}>
          <CardHeader
            className={classes.subtitleResults}
            title={
              <Typography 
              variant="h6" component="h2">
                Duración
              </Typography>
            }
          />
          <CardActionArea>
            <CardContent>
              <Typography variant="h6" component="h2" display="inline">El proyecto duró </Typography>
              <RedTextTypography variant="h6" component="h2" display="inline">26  </RedTextTypography>
              <Typography variant="h6" component="h2" display="inline">semanas de</Typography>
              <BlueTextTypography variant="h6" component="h2" display="inline"> 24 </BlueTextTypography>       
              <Typography variant="h6" component="h2" display="inline">estimadas. </Typography>             
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      
      <Box m={1}/>
      <Grid item xs={11}>
        <Card className={classes.root}>
          <CardHeader
            className={classes.subtitleTareas}
            title={
              <Typography 
                variant="h6" component="h2">
                  Tareas realizadas
              </Typography>
            }
          />
          <CardActionArea>
            <CardContent>
              <Typography variant="h6" component="h2" display="inline">Se realizaron </Typography>
              <RedTextTypography variant="h6" component="h2" display="inline">197  </RedTextTypography>
              <Typography variant="h6" component="h2" display="inline">tareas de </Typography>
              <BlueTextTypography variant="h6" component="h2" display="inline">214 </BlueTextTypography>       
              <Typography variant="h6" component="h2" display="inline">totales. </Typography>                               
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      
      <Box m={1}/>
      <Grid item xs={11}>
        <Card className={classes.root}>
          <CardHeader
            className={classes.subtitlePresupuesto}
            title={
              <Typography 
                variant="h6" component="h2">
                Presupuesto
              </Typography>
            }
          />
            <CardActionArea>
              <CardContent>
                <Typography variant="h6" component="h2" display="inline">Se utilizó </Typography>
                <RedTextTypography variant="h6" component="h2" display="inline">$56200  </RedTextTypography>
                <Typography variant="h6" component="h2" display="inline">de </Typography>
                <BlueTextTypography variant="h6" component="h2" display="inline">$62000 </BlueTextTypography>       
                <Typography variant="h6" component="h2" display="inline">del presupuesto. </Typography>                               
              </CardContent>
            </CardActionArea>
        </Card>
      </Grid>

      <Box m={1}/>
      <Grid item xs={11}>
        <Card className={classes.root}>
          <CardHeader
            className={classes.subtitleGraph}
            title={
              <Typography 
                variant="h6" component="h2">
                  Gráfico
              </Typography>
            }
          />
          <CardActionArea>
            <CardContent>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                spacing={1}
              >
                <Grid item xs={6}>
                  <ImageZoom
                    image={{
                      src: graficoScrum,
                      alt: 'Golden Gate Bridge',
                      className: 'img',
                      style: { width: '24em' }
                    }}
                    zoomImage={{
                      src: 'bridge-big.jpg',
                      alt: 'Golden Gate Bridge'
                    }}
                  />
                  
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6" component="h2" display="inline">El proyecto superó un poco las semanas estimadas, rendimiento del equipo fue optimo, sin embargo la próxima vez podrias </Typography>
                  <RedTextTypography variant="h6" component="h2" display="inline">no exigir tantas horas extras</RedTextTypography>
                  <Typography variant="h6" component="h2" display="inline">. </Typography>  
                  <Typography variant="h6" component="h2" display="inline">También ten en cuenta el presupuesto, que sobre al final del proyecto no es un buen</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Box m={1}/>
    </Grid>
  );
}

const BlueTextTypography = withStyles({
  root: {
    color: '#33A8FF'
  }
})(Typography);

const RedTextTypography = withStyles({
  root: {
    color: '#FF5733'
  }
})(Typography);

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    height: '100%'
  },
  media: {
    paddingTop: '81.25%',
    borderRadius: '50%',
    margin: '28px'
  },
  titleResultados:{
    backgroundColor:'#5973a6',
    height:'20px',
    width:'98%',
    textAlign: "center",
    marginLeft: "1%",
  },
  subtitleResults:{
    backgroundColor:'#5973a6',
    height:'50px',
    color:"white"
  },
  subtitleTareas:{
    backgroundColor:'#5973a6',
    height:'50px',
    color:"white"
  },
  subtitlePresupuesto:{
    backgroundColor:'#5973a6',
    height:'50px',
    color:"white"
  },
  subtitleGraph:{
    backgroundColor:'#5973a6',
    height:'50px',
    color:"white"
  },
  titleMeetings:{
    backgroundColor:'#5973a6',
    height:'20px',
    width:'380px',
    textAlign: "center",
    marginRight: "10px",
    marginLeft: "10px",
    color:"white"
  },
});