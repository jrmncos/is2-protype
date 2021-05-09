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

export default function FacebookDemocracy() {

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
      Facebook’s role in Brexit and the threat to democracy
    </Typography>    
    <Divider/>
    <Box m={1}/>
    <YouTube videoId="OQSMr-3GGvQ" opts={opts} onReady={onReady} />
    <Box m={1}/>

    <Typography variant="subtitle1" component="h2" gutterBottom>
      Carole Cadwalladr una periodista de investigación de The Observer cuenta que el periodico le pidió que escribiera un artículo sobre la votación del Brexit, por lo que tuvo que ir a una ciudad del Sur de Gales llamada Ebbw Vale.
		</Typography>

    <Typography variant="subtitle1" component="h2" gutterBottom>
      Luego la periodista fue hasta esa ciudad porque quería saber por qué el 62% de las personas votaron por “leave”. Para comprender mejor Ebbw Vale tenía una de las mayores concentraciones de votos para que el Reino Unido saliera de la Unión Europea.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify"  >
      Las siguientes imágenes sirven para mostrar cómo era la ciudad antes y cómo es en la actualidad. Antes bien tenía como principal actividad la industria de carbón y la acería pero luego hubo un colapso a fines del siglo XXI, ahora bien la ciudad luce moderna pero fue porque la financiación que hizo U.E. que posibilitó la creación de una Universidad, un polo deportivo, un plan de nuevas carreteras y una nueva línea del tren.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify"  >
      Dicho lo anterior, Carole comenzó a preguntar a las personas del lugar y todos le respondían lo mismo; que la UE no hizo nada por ellos, que querían recuperar el control, que estaban hartos de los inmigrantes y de los refugiados. Aunque la periodista comenta que caminando por la ciudad no se encontró con ningún inmigrante o refugiado, además que Ebbw Vale tiene una de las tasa más bajas de inmigración en el Reino Unido. Por esto Carole estaba confundida dado que no entendía de donde la gente sacaba esa información.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify"  >
      Luego una mujer que había sido entrevistada por la periodista le contó que había visto una noticia sobre unos inmigrantes de Turquía en Facebook. Entonces Carole fue a buscar en la red social esa información pero no encontró nada ahí, ella comenta que no hay archivo de los anuncios que ve la gente, no hay rastros. Así mismo, comentó que las noticias que ven la gente aparecen y luego desaparecen, no se sabe quien vio esos anuncios, quien los publicó, cuánto dinero se gastó, etc., por lo que es difícil investigar en la red social aunque Facebook sí tiene las respuestas pero se niega a darlas. En concreto, el parlamento de Gran Bretaña le pidió a Mark Zuckerberg que fuera a dar las respuestas pero él se negó a darlas.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify"  >
      En efecto Carole y otros periodistas descubrieron que se cometieron varios delitos durante el referéndum y se llevaron a cabo en Facebook. No sirvieron las leyes estrictas para evitar que sucedieran esos cometidos, de hecho ya no sirven para poder controlar lo que pasa en la red social dado que es una caja negra. Estos periodistas descubrieron que en los días antes de la votación del referéndum, la campaña “Vote Leave” lavó más de 80 millones de euros. 
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify"  >
      A causa del dinero ilegal, la campaña por el si al Brexit generó muchas fakes news, como las de las siguiente imágenes:
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify"  >
      Más aún, Carol descubrió que el Brexit y el ex presidente de EE UU, Donald Trump, estaban ligados. Esto la llevó a investigar a una consultora llamada Cambridge Analytica, para esto siguió el rastro por meses de uno de sus ex empleados llamado Christopher Wiley. Este hombre le contó que la consultora trabajó para Trump y para el Brexit y le contó cuál era la manera de trabajar de la misma. En particular, Cambridge Analytica perfilaba a las personas para comprender sus temores para así poder relacionarse con ellos a través de anuncios en Facebook. Para esto tuvo que recolectar ilegalmente perfiles de la red social, aproximadamente 87 millones usuarios.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify"  >
    Para finalizar, Carole Cadwalladr dice que el voto del Brexit muestra que la democracia liberal de su país está rota debido a la difusión de fake news que se paga con dinero ilegal y que los mismos usuarios de facebook son usados para hacer viral estas desinformaciones. Por lo que se pregunta si en un futuro va a ser posible tener elecciones libres y justas. “¿Esto es lo que queremos?”

    </Typography>


    <Box m={1}/>
    <Typography variant="h5" component="h2" gutterBottom style={{fontStyle: "italic", color:"#808080"}}>
      Referencias
    </Typography>

    <Typography variant="subtitle1" gutterBottom style={{fontStyle: "italic"}} align="justify">
      TED-Carole Cadwalladr (2016). Facebook's role in Brexit — and the threat to democracy.
      <Link href="#">
        https://www.ted.com/talks/carole_cadwalladr_facebook_s_role_in_brexit_and_the_threat_to_democracy/up-next#t-47985
      </Link>
    </Typography>

    </Grid>
    </>
  )
}