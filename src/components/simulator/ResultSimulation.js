import { CardHeader, Grid } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import graficoScrum from'../../images/graph.png';


export default function ResultSimulation()  {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      backgroundColor="#556B2F">

      <Card className={classes.root}>
              <Box m={2}/>
              <CardHeader
                className={classes.titleResultados}
                title={
                  <Typography variant="h6" component="h2">
                    Resultados de la simulación
                  </Typography>
                }
              />
              <CardActionArea >
                <Box m={1}/>
                <Grid item xs={12}>
                  <Card className={classes.root}>
                    <CardHeader
                      className={classes.subtitleResults}
                      title={
                        <Typography 
                        variant="h4" component="h2">
                          Duración
                        </Typography>
                      }
                    />
                    <CardActionArea>
                      <CardContent>
                      <div>
                        <Typography variant="h5" component="h2" display="inline">El proyecto duró </Typography>
                        <RedTextTypography variant="h5" component="h2" display="inline">26  </RedTextTypography>
                        <Typography variant="h5" component="h2" display="inline">semanas de</Typography>
                        <BlueTextTypography variant="h5" component="h2" display="inline"> 24 </BlueTextTypography>       
                        <Typography variant="h5" component="h2" display="inline">estimadas. </Typography>             
                      </div>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              </CardActionArea>
              
              <CardActionArea >
                <Box m={1}/>
                <Grid item xs={12}>
                  <Card className={classes.root}>
                    <CardHeader
                      className={classes.subtitleTareas}
                      title={
                        <Typography 
                        variant="h4" component="h2">
                          Tareas realizadas
                        </Typography>
                      }
                    />
                    <CardActionArea>
                      <CardContent>
                      <div>
                        <Typography variant="h5" component="h2" display="inline">Se realizaron </Typography>
                        <RedTextTypography variant="h5" component="h2" display="inline">197  </RedTextTypography>
                        <Typography variant="h5" component="h2" display="inline">tareas de </Typography>
                        <BlueTextTypography variant="h5" component="h2" display="inline">214 </BlueTextTypography>       
                        <Typography variant="h5" component="h2" display="inline">totales. </Typography>                               
                      </div>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              </CardActionArea>

              <CardActionArea >
                <Box m={1}/>
                <Grid item xs={12}>
                  <Card className={classes.root}>
                    <CardHeader
                      className={classes.subtitlePresupuesto}
                      title={
                        <Typography 
                        variant="h4" component="h2">
                          Presupuesto
                        </Typography>
                      }
                    />
                    <CardActionArea>
                      <CardContent>
                      <div>
                        <Typography variant="h5" component="h2" display="inline">Se utilizó </Typography>
                        <RedTextTypography variant="h5" component="h2" display="inline">$56200  </RedTextTypography>
                        <Typography variant="h5" component="h2" display="inline">de </Typography>
                        <BlueTextTypography variant="h5" component="h2" display="inline">$62000 </BlueTextTypography>       
                        <Typography variant="h5" component="h2" display="inline">del presupuesto. </Typography>                               
                      </div>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              </CardActionArea>

              <CardActionArea >
                <Box m={1}/>
                <Grid item xs={12}>
                  <Card className={classes.root}>
                    <CardHeader
                      className={classes.subtitleGraph}
                      title={
                        <Typography 
                        variant="h4" component="h2">
                          Gráfico
                        </Typography>
                      }
                    />
                    <CardActionArea>
                      <CardContent>
                      <div>
                        <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="center"
                            spacing={1}
                          >
                            <Grid item xs={6}>
                              <img  src={graficoScrum}  height='100%' width='100%'/>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography variant="h6" component="h2" display="inline">El proyecto superó un poco las semanas estimadas, rendimiento del equipo fue optimo, sin embargo la próxima vez podrias </Typography>
                              <RedTextTypography variant="h6" component="h2" display="inline">no exigir tantas horas extras</RedTextTypography>
                              <Typography variant="h6" component="h2" display="inline">. </Typography>  
                              <Typography variant="h6" component="h2" display="inline">También ten en cuenta el presupuesto, que sobre al final del proyecto no es un buen</Typography>
                            </Grid>
                          </Grid>
                        </div>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              </CardActionArea>

              </Card>    
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
    backgroundColor:'#b5d5f6',
    height:'20px',
    width:'98%',
    textAlign: "center",
    marginLeft: "1%",
  },
  subtitleResults:{
    backgroundColor:'#C9F19C',
    height:'50px',
  },
  subtitleTareas:{
    backgroundColor:'#FFEA81',
    height:'50px',
  },
  subtitlePresupuesto:{
    backgroundColor:'#D0A3FF',
    height:'50px',
  },
  subtitleGraph:{
    backgroundColor:'#B6F5F1',
    height:'50px',
  },
});