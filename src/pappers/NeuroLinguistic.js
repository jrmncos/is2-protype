import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {  Box, Divider, List, ListItem, ListItemText } from "@material-ui/core";
import { Link } from "wouter";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

export default function NeuroLinguistic() {

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
      Síntesis de "NLP for project managers"
    </Typography>    
    <Divider/>
    <Box m={1}/>

    <Typography variant="subtitle1" component="h2" gutterBottom>
      El artículo menciona sobre la programación neurolingüística y Project Managers. Empieza diciendo que las habilidades blandas son necesarias para que una gestión de proyectos sea eficaz. La inteligencia emocional ayuda a definir las habilidades blandas.
    </Typography>
    <Typography variant="subtitle1" component="h2" gutterBottom>
      La Programación Neurolingüística (PNL) estudia cómo el cerebro codifica el aprendizaje y la experiencia. Los recuerdos de nuestra experiencia subjetiva tienen estructura. La PNL se puede utilizar para obtener y replicar esa estructura por el modelado, por ende transferir habilidades. Cuando los comportamientos aprendidos no son efectivos en algún contexto, se puede utilizar la PNL para alterar la estructura de la experiencia subjetiva, cambiar el significado y generar otros comportamientos. Por lo tanto, proporciona herramientas para la autoconciencia y la mejora personal.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify"  >
      El Dr. Peter Parkes impartió un seminario web en febrero de 2013 sobre el tema de PNL para Project Managers. Lo siguiente es lo mencionado en un powerpoint en ese seminario.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Las competencias de un Project Manager son con respecto a: 
    </Typography>
    <List>
      <ListItem>
        <ArrowRightIcon />
        <ListItemText
          disableTypography
          primary={
          <Typography variant="subtitle1" gutterBottom align="justify">
            Rasgos: ser responsable, seguro de sí mismo, capacidad de autocontrol, autónomo, integridad, empatía, energético, de confianza.
          </Typography>
          }
          />
      </ListItem>

      <ListItem>
        <ArrowRightIcon />
        <ListItemText
          disableTypography
          primary={
          <Typography variant="subtitle1" gutterBottom align="justify">
            Comportamientos: piensa en ganar, respeta a los demás, es creativo, cooperativo, construye proactivamente relaciones
          </Typography>
          }
          />
      </ListItem>

      <ListItem>
        <ArrowRightIcon />
        <ListItemText
          disableTypography
          primary={
          <Typography variant="subtitle1" gutterBottom align="justify">
            Habilidades: gestión de conflicto,  negociar, escuchar, resolución de problemas.
          </Typography>
          }
          />
      </ListItem>
    
    </List>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Neuro se refiere a conexión entre procesos neurológicos; Lingüístico al lenguaje y Programación se refiere a patrones de comportamiento que se han aprendido a través de la experiencia que se pueden organizar para lograr objetivos específicos.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Como se puede aplicar NLP en Project Managers para mejorar las habilidades blandas: 
    </Typography>
    <List>
      <ListItem>
        <ArrowRightIcon />
        <ListItemText
          disableTypography
          primary={
          <Typography variant="subtitle1" gutterBottom align="justify">
            Competencias personales: las que deberían reconocerse son: conciencia de sí mismo, realimentación, autoentrenamiento, presentación a sí mismo, autoconfianza. Las que deberían regularse: establecimiento de objetivos, desarrollo continuo, resiliencia y gestión del estrés, flexibilidad, visión de conjunto / detalle, gestión del tiempo.
          </Typography>
          }
          />
      </ListItem>

      <ListItem>
        <ArrowRightIcon />
        <ListItemText
          disableTypography
          primary={
          <Typography variant="subtitle1" gutterBottom align="justify">
            Competencia social: las que deberían reconocerse: escuchar, lenguaje corporal. Las que deberían regularse: reenmarcar, asertividad, gestión de conflictos, negociación, motivación, feedback, coaching, delegación.
          </Typography>
          }
          />
      </ListItem>
    </List>

    <Typography variant="subtitle1" gutterBottom align="justify">
    La PNL puede ayudar a comprender nuestros propios comportamientos y aprender a explorar a otras personas. 
    Para liderar un proyecto se debe tener las 4 dimensiones de la inteligencia emocional: conciencia de sí mismo, autogestión, conciencia social, influencia social.
    Los 4 pilares de PNL son: pensamiento de resultados, conciencia sensorial, compenetración, flexibilidad de comportamiento. Por otro lado los 4 pilares de un PM son: pensamiento de resultados, información, relaciones, flexibilidad de comportamiento.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Los principales sistemas de representación son los sentidos que permite que captemos, seleccionemos, almacenemos, donde codificamos y recreamos la información en nuestra mente.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Se da por sentado el qué hacer. El "cómo", las competencias conductuales, diferencia a los que hacen las cosas de los frustrados por inercia y resistencia. Para cambiar comportamientos solo se requiere intención, estrategia y práctica. Las herramientas dentro del enfoque de PNL, permite lograr los resultados deseados, mejorar la autoconciencia, la información y las comunicaciones, las competencias conductuales y la influencia social.
    </Typography>

    <Box m={1}/>
    <Typography variant="h5" component="h2" gutterBottom style={{fontStyle: "italic", color:"#808080"}}>
      Relación con PMBOK
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Los gerentes de proyecto deben prestar atención al lenguaje corporal, personalidad, creencias, valores, fortalezas y debilidades de sus empleados. Tienen necesidad de comunicarse con proveedores y sus usuarios finales para entregar proyectos a tiempo, según las especificaciones y el presupuesto del proyecto. 
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      La PNL ayudaría a los integrantes del proyecto a mejorar en el área, evitar o detectar malentendidos y enfrentar problemas difíciles. Todos los participantes del proyecto aprendan sobre el tema, mejorando así su propia capacidad y rendimiento. Poder comprender la PNL en general y aplicar la misma, permitirá cambios en la comunicación.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      La falta de habilidades sociales del gerente del proyecto para administrar al personal, puede perjudicar al cumplimiento del proyecto. PNL puede ayudar a desarrollar al gerente del proyecto con las habilidades para tratar con los miembros del equipo y partes interesadas, permitiendo así un proyecto exitoso.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Los proyectos operan en entornos que terminan influyendo de manera favorable o desfavorable. Las influencias que existen son tanto internas como externas a la organización. Dentro de las influencias internas están las capacidades de los empleados, por lo que es bueno que se trabaje en esas capacidades.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Se relaciona con gestión de recursos humanos, comunicaciones, riesgos, tiempo.
      La PNL en la gestión de recursos humanos también favorece un buen entendimiento durante la entrevista. Asegurando un ambiente que permita una conversación con confianza y empatía, que pueda entenderse la posición y situación del aspirante.

    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Con respecto a la gestión del tiempo, permiten aumentar el rendimiento en el trabajo, capacitando al personal. Permite valorar el potencial del individuo favoreciendo la responsabilidad sobre el objetivo o fin a alcanzar, mientras se posiciona al individuo en un aprendizaje de mejora continua.

    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Se puede relacionar a la gestión de comunicación, debido a que PNL permite mejorar la comunicación con respecto a sus integrantes del proyecto, mejorar en el área, evitar o detectar malentendidos y enfrentar problemas difíciles.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Por último se lo relaciona con la gestión de riesgos, los gerentes de proyectos al estar preparados puedan tener mejores reacciones al momento de detectar un riesgo en el proyecto y así lograr que todo el equipo avance correctamente.
    </Typography>

    <Box m={1}/>
    <Typography variant="h5" component="h2" gutterBottom style={{fontStyle: "italic", color:"#808080"}}>
      Referencias
    </Typography>

    <Typography variant="subtitle1" gutterBottom style={{fontStyle: "italic"}} align="justify">
      Association for Project Management. (2013) NLP for project managers. 
      <Link href="#">
        https://www.apm.org.uk/news/nlp-for-project-managers/
      </Link>
    </Typography>
    </Grid>
    </>
  )
}