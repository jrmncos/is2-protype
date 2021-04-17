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
    height: 400,

  },
});

export default function GreatHack(){
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
        The Great Hack
      </Typography>

      <Typography variant="subtitle1" gutterBottom align="justify">
        The Great Hack o Nada es Privado es un documental de Netflix del año 2019, que expone la influencia de la consultora británica Cambridge Analytica (CA) en dos procesos políticos: las elecciones del 2016 en los Estados Unidos entre Donald Trump y Hillary Clinton, y el referéndum del Brexit en el Reino Unido. Además, el documental muestra sin profundizar demasiado, que CA también logró incidir en algunos otros procesos electorales con asiento en países de África y de Latinoamérica.
      </Typography>
      
      <Box m={1}/>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://i2.wp.com/www.puro-geek.com/wp-content/uploads/2019/07/the-great-hack-1200.jpg?fit=1000%2C603&ssl=1"
            title="Portada del documental en Netflix"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              Portada del documental en Netflix
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              El documental desato debate en las redes
            </Typography>
          </CardContent>
        </CardActionArea>

      </Card>
      <Box m={1}/>

      <Typography variant="subtitle1" gutterBottom align="justify">
        El documental pone en foco en la toma de información sin autorización de usuarios por parte de las redes sociales. Se centra en cómo Cambridge Analytica obtuvo más de 50 millones de usuarios de Facebook, y que hizo con esos datos. La consultora y la red social mencionada tuvieron que enfrentar cuestiones legales y pagar millonarias multas.
      </Typography>
      <Typography variant="subtitle1" gutterBottom align="justify">
        Mediante una aplicación quiz games (por ejemplo, juego de test de personalidad)  se logró juntar más de 200.000 datos de personas. La aplicación se descargaba al celular y se vinculaba con Facebook y cuando un usuario daba su consentimiento, daba acceso a su información personal, sus intereses, sus contactos y su ubicación. El gran problema estaba en que no solo se obtenían los datos de estos usuarios sino también se obtenían la información personal de los contactos de Facebook de cada usuario sin que estos supieran. Debido a esto, el volumen de información ilegal alcanzó a millones de usuarios, según se muestra en el documental. Cambridge Analytica analizó los datos para luego agrupar a los usuarios más vulnerables, los votantes indecisos, que eran fáciles de atraer con publicidad engañosa, mejor conocida como fake news. De esta manera, trataba de convencer a los indecisos a quienes tenían que votar y así favorecer a los candidatos con los cuales la consultora trabajaba.
      </Typography>
      <Typography variant="subtitle1" gutterBottom align="justify">
        El documental muestra a tres protagonistas principales, que muestran como Cambridge Analytica operaba y que no cumplía con las normas del comisionado de Información del Reino Unido. Primero, Carole Cadwalladr, una periodista de investigación de The Guardian llevó a fondo la investigación sobre cómo CA usó los datos que tenía en su poder. Segundo, tenemos a David Carroll, un profesor que presentó una queja ante la oficina del comisionado para recuperar sus datos. Por último, Brittany Kaiser, antigua directora de la consultora, brindó información útil para conocer más sobre el escándalo. Además, se incluyen entrevistas de ex trabajadores de la consultora en cuestión, como Julian Wheatland y Christopher Wylie, cuyo aporte permitió conocer el caso con mayor profundidad.
      </Typography>
      
      </Grid>
    </>
  )
}