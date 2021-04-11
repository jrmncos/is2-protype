import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
  },
  media: {
    height: 200,
  },

});

export default function SimulationChoice({ levelSelected }) {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://www.e-zigurat.com/blog/wp-content/uploads/sites/2/2019/08/PMII.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Sobre el simulador
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              El siguiente simulador tiene como objetivo resolver las distintas problematicas que se presentaron en los casos de estudios. Para ello, ustede debe ajustar las variables de decisión del proyecto para lograr una mayor estimación
            </Typography>

          </CardContent>

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Sobre los niveles de dificultad
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              El caso Beginner trata sobre Indie Games ... \n
              El caso Beginner trata sobre Otra caso ...
            </Typography>

          </CardContent>

        </CardActionArea>
        <CardActions >
          <Grid 
            container 
            spacing={4} 
            className={classes.mainGrid} 
            m={4}
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={8}>
              <Button size="large" style={{ borderRadius: 35, backgroundColor: "#21b6ae", textTransform: 'none'}} variant="contained" >
                Beginner
              </Button>
            </Grid>
            <Grid item xs={8}>
              <Button size="large"style={{ borderRadius: 35, backgroundColor: "#21b6ae", textTransform: 'none'}} variant="contained" >
                Intermediate
              </Button>
            </Grid>
            <Grid item xs={8}>
              <Button size="large" style={{ borderRadius: 35, backgroundColor: "#21b6ae", textTransform: 'none'}} variant="contained" >
                Advanced
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </>
  );
}