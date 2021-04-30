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
    <Typography variant="h3" component="h2" gutterBottom>
      Collective Learning in Project Teams
    </Typography>    
    <Divider/>
    <Box m={1}/>

    <Typography variant="subtitle1" component="h2" gutterBottom>
      El artículo se centra que aprender es clave dentro de un proyecto, para esto hay que cambiar el enfoque, además, enumera ejemplos de estudios de casos que sustentan este tema.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify"  >
      Indica que en general, muchos miembros de un equipo de proyecto piensan eso, en el desafío del aprendizaje. También explaya la diversa serie de proyectos que siguen las organizaciones, puede ser un conjunto de proyectos que se agrupan para facilitar la dirección eficaz de un trabajo, este término es portfolio; proyectos donde se emplean diferentes estructuras organizativas y también filosofías de gestión, por ejemplo, gestión del tiempo, esta área de conocimiento es una de las de dirección de Proyectos, en la cual existe procesos para administrar la finalización del proyecto a tiempo.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Recordemos que un proyecto es considerado exitoso cuando cumple con la Triple Restricción, es decir, es entregado a tiempo, dentro de un presupuesto, completo con respecto al alcance y la calidad esperada y este artículo menciona que la identificación y construcción de procesos de aprendizaje dentro de un equipo ayuda al desarrollo de la flexibilidad y adaptabilidad de los miembros del equipo para enfrentar los desafíos para cumplir con un proyecto exitoso. Estos tipos de procesos construidos para el aprendizaje pueden encuadrar en las tres categorías: utilizados una única vez, que se utilizan según sean necesarios y que se utilizan de manera continua.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Considero una cita muy particular y buena con respecto al aprendizaje en los proyectos: "... los proyectos son como vehículos para el aprendizaje y percibirse a sí mismos como aprendices y como cumplidores de tareas del proyecto" (Smith y Dodds 1997, 8).
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Esto no es algo que se adopte fácilmente desde las perspectivas culturales tradicionales de la gestión de proyectos por dos características, que es temporal y su resultado es único, es decir, un proyecto al tener inicio y fin y al crear un producto único tal vez el aprendizaje obtenido no aplica a otros proyectos. 
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Para finalizar, dado que los equipos de proyecto son construcciones sociales, así lo describe el autor, que involucran a las personas en intercambios, el aprendizaje proporciona un terreno ideal sobre el cual perseguir ese objetivo. 
    </Typography>

    <Box m={1}/>
    <Typography variant="h5" component="h2" gutterBottom style={{fontStyle: "italic", color:"#808080"}}>
      Referencias
    </Typography>

    <Typography variant="subtitle1" gutterBottom style={{fontStyle: "italic"}} align="justify">
      Sense, Andrew J. (2002) Project teams as learning entities
      <Link href="#">
        https://www.pmi.org/learning/library/project-teams-learning-entities-9015
      </Link>
    </Typography>
    </Grid>
    </>
  )
}