import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Box, Divider } from "@material-ui/core";
import { Link } from "wouter";

export default function MultigenerationalProject() {

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
      Leading a Multigenerational Project Team
    </Typography>    
    <Divider/>
    <Box m={1}/>

    <Typography variant="subtitle1" component="h2" gutterBottom>
      El artículo “Leading a Multigenerational Project Team”, publicado por Giselle Kovary, trata sobre los Project Managers (PM) y el desafío de liderar los equipos compuestos por personas de diferentes generaciones: Traditionalists, Baby Boomers, Gen Xers y Gen Ys. Esto debido a que cada persona de diferente generación tiene diferentes comportamientos y formas de trabajar.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify"  >
      En primer lugar se menciona lo que cada generación suele valorar en el trabajo. Por un lado tenemos a los Traditionalists, los cuales suelen ser muy trabajadores y tener respeto por la autoridad, y tienen como objetivo dejar un legado en el trabajo y para sus familias. Por otro lado, tenemos a los Baby Boomers, los cuales suelen ser competitivos y participativos al momento de tomar decisiones, y tienen como objetivo poner su sello en las cosas. Por otra parte tenemos a los Gen Xers, los cuales suelen ser flexibles, creativos y valoran el equilibrio entre el trabajo y la vida personal, y tienen como objetivo mantener independencia en todas las áreas de sus vidas. Por último, tenemos a los Gen Ys, los cuales suelen ser innovadores, creativos y les gusta desarrollar nuevas habilidades, y tienen como objetivo encontrar trabajo y crear una vida que tenga sentido.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      En segundo lugar, se mencionan los posibles conflictos que podrían darse en el equipo y las posibles soluciones. Por ejemplo, un posible conflicto podría darse entre los Traditionalists y Gen Xers, debido a que los Traditionalists suelen tener respeto por la autoridad y los Gen Xers suelen tener actitudes más relajadas hacia la autoridad y su forma de trabajar, por lo cual, este tipo de conflictos podrían causar malos resultados a nivel de proyecto
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Es importante que el PM primero entienda su propia identidad generacional y como su estilo de trabajo puede diferir del de aquellos que lidera. Por ejemplo, el PM debe tener en cuenta que muchos empleados jóvenes consideran que se puede realizar la misma cantidad de trabajo estando tanto en la oficina como estando en una cafetería con una Laptop. Con lo cual, el hecho de que el PM entienda cómo cada generación trabaja, puede hacer que liderar un equipo multigeneracional sea más fácil
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      En tercer lugar se menciona que para liderar un equipo de proyecto que sea exitoso, se requiere que el PM desarrolle estrategias que maximicen las fortalezas de cada generación, mientras gestiona las diferencias, para alcanzar mejores resultados de proyecto. Un ejemplo de esto es el caso en donde una PM puso en práctica el hecho de animar a los miembros del equipo a elegir las tareas que quisieran completar en un proyecto. Esto dió como resultado que las elecciones de las tareas estuvieran alineadas a preferencias generacionales. Por ejemplo, los empleados más grandes y experimentados, eligieron tareas largas, mientras que los más jóvenes eligieron trabajar en tareas en las que se alcanzaran resultados inmediatos 
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Por último, se menciona que muchos PMs trabajan con el mismo estilo de gestión que ellos experimentaron en su momento con sus líderes, esto generalmente no genera el nivel de colaboración que es necesario para alcanzar el éxito hoy en día. Comprometer a todos los integrantes del equipo a través de un diálogo abierto, incluirlos en la toma de decisiones y reconocer las diferencias generacionales, son todos pasos para la creación de un equipo productivo de alto rendimiento. 
    </Typography>

    <Box m={1}/>
    <Typography variant="h5" component="h2" gutterBottom style={{fontStyle: "italic", color:"#808080"}}>
      Relación con PMBOK
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Podemos encontrar una relación entre el artículo “Leading a Multigenerational Project Team” con los tópicos de gestión de proyectos mencionados en el PMBOK. 
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      En primer lugar, podemos encontrar una relación en cuanto al rol del director del proyecto, debido a que el director juega un rol crítico en el liderazgo de un equipo a fin de alcanzar los objetivos del proyecto. Este asume roles de comunicación con los miembros del equipo y se encarga de que las comunicaciones sean concisas, claras, completas, relevantes y adaptadas. Además, el director de proyecto debe tener habilidades de liderazgo (capacidad de guiar, motivar y dirigir un equipo) y debe estudiar los comportamientos y las motivaciones de las personas.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Uno de los estilos de liderazgo que se menciona en el PMBOK es Laissez-faire, el cual se ve bastante similar al mencionado en el artículo. En este estilo, el director permite que el equipo tome sus propias decisiones y establezca sus propias metas.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      En segundo lugar, podemos encontrar una relación en cuanto al código de ética y conducta profesional que deben llevar los integrantes de un proyecto.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Por último, también podemos encontrar una relación en cuanto a lo que significa un proyecto, el cual es un esfuerzo temporal que se lleva a cabo para crear un producto, servicio o resultado único. En el artículo lo que se intenta es dar consejos a los PM para poder liderar un equipo multigeneracional de manera exitosa y así lograr que el proyecto llegue a su final también de manera exitosa.
    </Typography>

    <Box m={1}/>
    <Typography variant="h5" component="h2" gutterBottom style={{fontStyle: "italic", color:"#808080"}}>
      Referencias
    </Typography>

    <Typography variant="subtitle1" gutterBottom style={{fontStyle: "italic"}} align="justify">
      Giselle Kovary (2012) Leading a Multigenerational Project Team
      <Link href="#">
        https://www.ngenperformance.com/blog/hr-training/leading-a-multigenerational-project-team
      </Link>
    </Typography>
    </Grid>
    </>
  )
}