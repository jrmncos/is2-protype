import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {  Box, Divider } from "@material-ui/core";
import { Link } from "wouter";

export default function IoT() {

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
			Internet of things and Artificial Intelligence.
    </Typography>

    <Divider/>
    <Box m={1}/>

    <Typography variant="subtitle1" component="h2" gutterBottom>
			Se detalla a continuación los contenidos del artículo “How Artificial Intelligence is changing the CIO’s role”. Según su autor, Michael Zammuto, “la clave del liderazgo efectivo en la era digital es aceptar y abrazar los cambios generados por las nuevas tecnologías”. 
    </Typography>

    <Typography variant="subtitle1" component="h2" gutterBottom>
      El artículo empieza con una comparación entre los estilos antiguos y modernos de liderazgo. Compara las formas de liderazgo de la década de los ‘40 y ‘50 con rígidas estructuras militares y jerarquías verticales, con jefes como fuentes de la verdad, empleados obedientes y con poca o ninguna autonomía ni capacidad de decisión. En cambio, afirma el autor, los estilos modernos de liderazgo deberían confiar en la capacidad de los empleados de brindar soluciones a partir de su conocimiento
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify" >
			Según los métodos antiguos, un proyecto podía llegar a seguir un plan aunque sea evidente que este no era ideal, ya que el mantener la idea inicial a pesar de los resultados negativos era visto como una muestra de fuerza y liderazgo, pero este modelo de pensamiento demostró que puede generar resultados catastróficos.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
			Según los autores, el objeto de incorporar inteligencia artificial en las organizaciones no es el de dar nuevas herramientas a los trabajadores, sino el de generar cambios en la estructura de la organización. Cita como ejemplo exitoso de esta metodología a Amazon, la que considera como un modelo a seguir por haber logrado aplicar su modelo de automatización, innovación, y metodologìas orientadas a datos a diversos problemas de negocios.
    </Typography>
    
    <Typography variant="subtitle1" gutterBottom align="justify">
			A pesar de lo antes dicho, el autor afirma que una planeación a largo plazo y la capacidad de incorporar nuevas tecnologías que cambien los planes no son mutuamente exclusivas. Cita como ejemplos exitosos a Bill Gates y a Steve Jobs, quienes tenían un objetivo al cual deseaban llegar, pero el camino al mismo no estaba perfectamente especificado desde el inicio sino que estuvieron dispuestos a aceptar los cambios que podrían llegar a ocurrir.
		</Typography>

		<Typography variant="subtitle1" gutterBottom align="justify">
			El autor concluye afirmando que no es sencillo prepararse para cambios, considerando que en el futuro pueden ocurrir cambios que modifiquen totalmente los planes anteriores, y que pueden usarse técnicas de machine learning para analizar métricas que permitan una mejor toma de decisiones para realizar ajustes sobre la marcha y adaptarse a los cambios en el negocio
		</Typography>

		
    <Box m={1}/>
    <Typography variant="h5" component="h2" gutterBottom style={{fontStyle: "italic", color:"#808080"}}>
      Relación con PMBOK
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
			El contenido del artículo puede relacionarse con el proceso de planificación en todas sus áreas de conocimiento, ya que las técnicas de machine learning pueden aplicarse en un amplio rango de situaciones en las que se deba tomar decisiones en base a información dada. 
    </Typography>

    <Box m={1}/>
    <Typography variant="h5" component="h2" gutterBottom style={{fontStyle: "italic", color:"#808080"}}>
      Referencias
    </Typography>

    <Typography variant="subtitle1" gutterBottom style={{fontStyle: "italic"}} align="justify">
			Michael Zammuto (2017) “How Artificial Intelligence is changing the CIO’s role”
      <Link href="#">
				https://www.cio.com/article/3261545/how-artificial-intelligence-is-changing-the-cios-role.html
      </Link>
    </Typography>
    </Grid>
    </>
  )
}