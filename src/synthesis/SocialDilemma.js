import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Box, Divider } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 400,

  },
});

export default function SocialDilemma() {
  const classes = useStyles();

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
          El dilema de las redes sociales
        </Typography>
        <Divider />
        <Box m={1} />

        <Typography variant="subtitle1" gutterBottom align="justify">
          El dilema de las redes sociales es un documental donde se entrevista a varios ex empleados de empresas como Facebook, Google, Instagram, Twitter, Youtube. Ellos describen la adicción y efectos negativos de las redes sociales, como resultado de estrategias que manipulan emociones y comportamientos, para mantener conectados a los usuarios.
        </Typography>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://www.familyandmedia.eu/wp-content/uploads/2020/12/the-social-dilemma-1.jpg"
              title="Portada del documental en Netflix"
            />
            <CardContent>
              <Typography gutterBottom variant="body2" component="h2">
                Portada del documental estrenado en 2020 dirigido por Jeff Orlowski
              </Typography>

            </CardContent>
          </CardActionArea>

        </Card>
        <Box m={1} />
        <Typography variant="subtitle1" gutterBottom align="justify">
          En el documental uno de los entrevistados dice: "Si no pagas por el producto, el producto eres tú". Las redes sociales ganan dinero con nuestro tiempo, cuantas más horas pasa un usuario conectado a sus redes sociales, más información obtienen sobre características de sus consumos, hábitos y gustos. Esta información obtenida es procesada por un sistema que se encarga de realizar predicciones de lo que haremos y de quienes somos. A partir de esto, generan modelos de predicción y el que tenga el modelo con mayor acierto será el ganador. Los modelos de predicción son muy importantes ya que sirven por ejemplo: para que una empresa pueda insertar un producto al mercado y así se garantice su éxito. En Facebook los clientes pueden ser empresas que venden productos, políticas y Gobiernos, que pagan por mostrar productos o ideas a audiencias dispuestas a participar. Sin embargo, hay que recordar que todo esto funciona solo si los usuarios permanecen conectados y están expuestos a muchos anuncios.
        </Typography>
        <Typography variant="subtitle1" gutterBottom align="justify">
          Otro de los temas que mencionan es que contienen herramientas diseñadas para enganchar y manipular a sus usuarios. Un ex-empleado de Google advirtió al comienzo a sus colegas sobre el riesgo de adicción a los usuarios, pero fue ignorado. Las personas fueron creadas para vivir en sociedad y aparearse, por lo que las redes sociales sin duda es un vehículo para optimizar la conexión entre las personas y esto lo vuelve adictivo.
        </Typography>

        <Typography variant="subtitle1" gutterBottom align="justify">
          El documental describe herramientas que se crean para mantener distraídos a sus usuarios mientras los anunciantes ganan dinero. Una sería el desplazamiento automático, desarrollado para simular que no hay un fin y el usuario permanezca conectado. Otras serían las notificaciones, se describen como una de las herramientas más eficaces para atraer a los que están fuera y mantener a los que ya están conectados. Los "me gusta" y comentarios con elogios o críticas, permitiría manipular y hacer dependientes a los usuarios. Aquí aparece el uso de la psicología en las redes sociales. A través de técnicas psicológicas como el “Refuerzo positivo intermitente” logran hábitos en el usuario de manera inconsciente. Por ejemplo, cada vez que desplazamos el contenido de la pantalla y el usuario observa una nueva noticia que le interesa, se produce un refuerzo positivo intermitente.
        </Typography>

        <Typography variant="subtitle1" gutterBottom align="justify">
          Se describen métodos para manipular las emociones a través de la dopamina (relacionada con el placer, la alegría y el bienestar). La recompensa inmediata, como serían los "me gusta" o los comentarios positivos, las redes sociales crearon métodos de navegación que estimulan la dopamina a niveles altos. Permitiendo que cada vez los usuarios se vuelvan más solitarios y necesitados. Debido a la manipulación de emociones por parte de las redes, se puede ver mediante estadísticas que se relaciona con el aumento de casos de depresión y ansiedad, especialmente entre niños y adolescentes. Esto va generando el aumento de los casos de suicidios en  niños.
        </Typography>

        <Typography variant="subtitle1" gutterBottom align="justify">
          Mencionan que las noticias falsas se propagan más rápido que las verdaderas, tienen un gran alcance en las redes para mantener a los usuarios expuestos a los anuncios y generan más dinero a las empresas que la información verdadera.
        </Typography>

        <Typography variant="subtitle1" gutterBottom align="justify">
          La sugerencias de los entrevistados es deshabilitar las notificaciones, para acceder la red social cuando uno lo desee; hacer las búsquedas de los videos o contenidos uno mismo según nuestro interés; seguir a personas o páginas con las que no está de acuerdo, logrando así profundizar el conocimiento; desconectarse una hora antes de acostarse, dejando en modo avión el celular, tablet y computadora portátil fuera de la habitación; tener en cuenta que anuncio o publicación se desea clickear.
        </Typography>
        <Typography variant="subtitle1" gutterBottom align="justify">
          Por último, todos estuvieron de acuerdo que estas redes sociales se crearon para conectar a las personas, ayudar a conectar a familiares perdidos, realizar reuniones, conectarse con familiares y amigos que están lejos, entre otras. Pero últimamente está teniendo otros propósitos como dividir la sociedad, crear guerras culturales, creación de teorías conspirativas, etc.
        </Typography>


      </Grid>
    </>
  )
}