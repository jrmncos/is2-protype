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
      Business Intelligence and Business Analytics
    </Typography>    
    <Divider/>
    <Box m={1}/>
    <Typography variant="h5" component="h2" gutterBottom style={{fontStyle: "italic", color:"#808080"}}>
      Resumen “What is business intelligence? Transforming data into business insights”
    </Typography>

    <Typography variant="subtitle1" component="h2" gutterBottom>
      En el artículo, “What is business intelligence? Transforming data into business insights” de los autores Mary K. Pratt y Josh Fruhlinger, se explica que es business intelligence, como es utilizado por las empresas y en qué se diferencia de business analytics.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify"  >
      En primer lugar definen business intelligence(BI) como un modelo que aprovecha el software y los servicios para transformar los datos en conocimientos prácticos que informan las decisiones empresariales estratégicas y tácticas de una organización,. para lo cual las herramientas de BI acceden y analizan un conjunto de datos y presentan hallazgos analiticos en informes, resúmenes, dashboards, gráficos,  cuadros y mapas para proporcionar información detallada sobre el estado del negocio.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Por otro lado, los autores realizan una comparación frente a business analytics(BA) para lo cual relatan que BI es descriptiva, dice lo que está sucediendo ahora y lo que sucedió en el pasado para llevarnos a ese estado, En cambio BA, es un término genérico para las técnicas de análisis de datos que son predictivos -es decir, le puede decir al lo que va a ocurrir en el futuro - y prescriptivo, es decir,  le puede decir lo que debe estar haciendo para crear mejores resultados.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Además el artículo menciona algunas herramientas de BI, entre las cuales están: Tableau, Splunk, Alteryx, Qlik, Domo, Dundas BI, Google Data Studio, Einstein Analytics y Birst. Y también señalan la importancia de contar con una analista de BI, el cual se encarga de administrar, mantener las herramientas y sus proveedores. Además tienen la tarea de configurar y estandarizar los informes para asegurarse que los resultados sean consistentes y significativos en la organización.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Y por último, argumentan que BI en un futuro será más inteligente, lo cual se podrán realizar análisis más avanzados para las empresas 
    </Typography>

    <Box m={1}/>
    <Typography variant="h5" component="h2" gutterBottom style={{fontStyle: "italic", color:"#808080"}}>
      Relación con PMBOK
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Podemos encontrar una relación del artículo “What is business intelligence? Transforming data into business insights” con algunos de los tópicos de gestión de proyectos del PMBOK, en este caso podemos asociarlo a la gestión de comunicación y gestión de riesgos. 
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Se puede relacionar a la gestión de comunicación, ya que business intelligence mejora gestión y análisis de la información para  asegurar que las necesidades de información del proyecto y de sus interesados se satisfagan.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Por otro lado, se puede asociar a gestión de riesgos porque al realizar análisis de la información, se puede reducir el impacto de eventos adversos al proyecto.
    </Typography>

    <Box m={1}/>
    <Typography variant="h5" component="h2" gutterBottom style={{fontStyle: "italic", color:"#808080"}}>
      Referencias
    </Typography>

    <Typography variant="subtitle1" gutterBottom style={{fontStyle: "italic"}} align="justify">
      Mary K. Pratt. Josh Fruhlinger (2019) What is business intelligence? Transforming data into business insights. CIO.
      <Link href="#">
        https://www.cio.com/article/2439504/business-intelligence-definition-and-solutions.html
      </Link>
    </Typography>
    </Grid>
    </>
  )
}