import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Box, Divider } from "@material-ui/core";
import { Link } from "wouter";

export default function EmotionalIntelligence() {

  return (
    <>
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="stretch"
      spacing={2}
    >
    <Typography variant="h3" component="h2" gutterBottom >
      Millennials como Líderes de Proyectos
    </Typography>    
    <Divider/>
    <Box m={1}/>
    <Typography variant="h5" component="h2" gutterBottom style={{fontStyle: "italic", color:"#808080"}}>
      Resumen “The Millenial Project Manager - New leaders for a new time”
    </Typography>
    <Typography variant="subtitle1" gutterBottom align="justify"  >
      El artículo THE MILLENNIAL PROJECT MANAGER - NEW LEADERS FOR A NEW TIME, publicado por Australian institute of Project Management trata sobre el surgimiento de gestores de proyectos millennials como líderes en la industria.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Se menciona que la gestión de proyectos pertenece a las Neoprofesiones, y que compite por ser la más exitosa. La profesión de la gerencia de proyectos ha tenido tanto éxito como neoprofesión que se ha vuelto omnipresente.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Entonces, se plantea que la pregunta que los gerentes de proyectos deben hacerse es quién liderará esta disrupción y cómo responderá la profesión. La respuesta a estas dos preguntas es: Millennials Project Managers.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Los millennials se encuentran en la cúspide del mayor cambio de la gestión de proyecto desde principios de los 60 y tienen dos atributos claves que impulsarán su liderazgo en la disrupción habilitada por la tecnología. 
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      En primer lugar, han nacido y se han criado en un periodo de rápidos cambios tecnológicos y sociales. En segundo lugar, los gerentes de proyectos millennials todavía tienen la mayoría de sus carreras por delante,  por lo que no pueden considerar a la jubilación como una solución a esas interrupciones. 
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Como conclusión a este cuestionamiento, se puede decir que algunos líderes millennials serán más innovadores, más perceptivos y más ambiciosos para el cambio que otros. Pero para aquellos millennials que buscan estar a la vanguardia de un cambio inevitable y quizás fundamental en la práctica de la gestión de proyectos, este es el momento adecuado.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      No obstante, el riesgo para las empresas es que casi todas las decisiones estratégicas que se toman en los niveles superiores, las toman generaciones cuyos líderes han prosperado a partir de un paradigma cada vez más sometido. La buena noticia es que estas mismas empresas tienen una generación emergente de líderes millennials que, dada la oportunidad, pueden descubrir valiosas estrategias de adaptación.
    </Typography>

    <Box m={1}/>
    <Typography variant="h5" component="h2" gutterBottom style={{fontStyle: "italic", color:"#808080"}}>
      Relación con PMBOK
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Teniendo en cuenta lo visto los capítulos 1 a 3 del PMBOK, podemos relacionar este artículo con algunos de los elementos fundamentales del proyecto. Por un lado, con el concepto del fundamento: los proyectos impulsan el cambio. Se puede observar que la gestión de proyectos liderada por millennials están impulsando un cambio en la forma en que se llevan a cabo los proyectos y cómo esto impacta a nivel negocio, ya que estos nuevos líderes resultan más audaces en cuanto a la toma de decisiones, que otros más tradicionales y que llevan más tiempo gestionando.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Por otro lado, también se lo puede relacionar con el fundamento contexto de iniciación de proyecto, ya que como se menciona en el libro, este fundamento se divide en cuatro categorías, de las cuales haremos hincapié en la categoría: implementar o cambiar las estrategias de negocio o tecnología. En este caso, se puede observar una clara vinculación con la gestión de proyectos llevada a cabo por millennials, pues, como se menciona en el artículo, son ellos los que están implementando este nuevo cambio en la profesión y en cómo se lleva a cabo su desarrollo. También se puede mencionar la categoría:  satisfacer las solicitudes o necesidades de los interesados, ya que el logro obtenido por los cambios desde su gestión, es no solo desarrollarse como profesionales sino además, satisfacer las solicitudes de quienes estén interesados en apoyar este cambio.
    </Typography>

    <Box m={1}/>
    <Typography variant="h5" component="h2" gutterBottom style={{fontStyle: "italic", color:"#808080"}}>
      Referencias
    </Typography>

    <Typography variant="subtitle1" gutterBottom style={{fontStyle: "italic"}} align="justify">
      Australian Institute of Project Management. “THE MILLENNIAL PROJECT MANAGER - NEW LEADERS FOR A NEW TIME”
      <Link href="#">
        https://www.aipm.com.au/AIPM/media/Resources-Articles/Templates/Opinion-Piece-The-Millennial-Project-Manager-Article.pdf
      </Link>
    </Typography>
    </Grid>
    </>
  )
}