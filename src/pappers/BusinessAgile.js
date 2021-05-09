import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {  Box, Divider, List, ListItem, ListItemText } from "@material-ui/core";
import { Link } from "wouter";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

export default function BusinessAgile() {

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
			Síntesis - Trends in Agile: Business Agility
    </Typography>    
    <Divider/>
    <Box m={1}/>

    <Typography variant="subtitle1" component="h2" gutterBottom>
			En el artículo “Trends in Agile: Business Agility” de Rafael Prikladnicki, Casper Lassenius, and Jeffrey C. Carver, publicado en 2020, los autores comentan sobre las diferentes exposiciones realizadas en la Conferencia Ágil de 2019, Ágil 2019.
		</Typography>
    <Typography variant="subtitle1" component="h2" gutterBottom>
			En una primera instancia, se menciona a Chris Bailey y su discurso de apertura: “Cómo gestionar su atención en un mundo de distracciones”. Bailey hace referencia a su libro Hyperfocus, en donde reflexiona sobre cómo la conectividad constante es una de las peores interrupciones de nuestro enfoque y productividad. Y que su solución es pasar dos semanas haciendo que nuestras mentes sean simuladas; dice que al principio nos sentiremos inquietos, pero luego encontraremos el enfoque.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify"  >
			Otra de las exposiciones que tuvo lugar fue la de Lynne Cazaly: "Ish: El problema con nuestra búsqueda de la perfección y la práctica que cambia la vida de lo suficientemente bueno", en donde señala que el perfeccionismo está en aumento. Pero que no existe una relación entre el perfeccionismo y el alto rendimiento. En su libro Ish, muestra que “a nivel tarea, dedicar más tiempo a algo no significa que sea mejor”, sino que ese trabajo conduce a “mayor estrés, menor satisfacción, menos reconocimientos, menos oportunidades y menos seguridad”.
    </Typography>

		<Typography variant="subtitle1" gutterBottom align="justify"  >
			También se menciona la charla de Portia Tung "Liderazgo lúdico: cómo permitir el cambio transformacional y divertirse haciéndolo", en donde se exploró por qué el juego es la forma más eficaz de permitir que las personas aprendan, lideren y trabajen juntas.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
			Por otro lado, en la Conferencia Ágil, IEEE Software celebró su cuarta iniciativa de divulgación de conferencias para profesionales, entre las que se pueden mencionar: 
    </Typography>
    <List>
      <ListItem>
        <ArrowRightIcon />
        <ListItemText
          disableTypography
          primary={
          <Typography variant="subtitle1" gutterBottom align="justify">
            "Más allá de lo ágil: prosperar en la digitalización con más allá del presupuesto, el espacio abierto y la sociocracia", Jutta Eckstein y John Buck. En ella se argumentó que la digitalización requiere una rápida flexibilidad y adaptabilidad organizacional. Según dicen, esta mentalidad afecta a todas las dimensiones de una empresa: su estrategia, estructura y procesos. Por lo tanto, se espera que las empresas sean flexibles, respondan rápidamente y sean resistentes al cambio. En otras palabras, deben ser ágiles.
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
            "Ágil en su tercera década", de Al Shalloway. Aquí se menciona que la agilidad empresarial y la diversidad como impulsores clave del futuro de la agilidad y que discutió cinco cambios que él cree que deben ocurrir para que la industria alcance el siguiente nivel de agilidad empresarial.
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
            "Propietario de negocio: el papel más crítico para el futuro de Agile", de Luiz Claudio Parzianello. En su charla, Parzianello identificó la agilidad empresarial como la nueva palabra de moda cuando se habla de transformación ágil en términos de organizaciones completas. También definió un nuevo rol: los propietarios de empresas, los cuales son líderes ágiles responsables de la evolución de un contexto empresarial mediante el desarrollo de nuevas capacidades aprovechadas por personas y tecnologías increíbles.
          </Typography>
          }
          />
      </ListItem>
    
    </List>

    <Typography variant="subtitle1" gutterBottom align="justify">
			Como conclusión, se menciona que en la Conferencia Ágil de 2019, como en años anteriores, los autores observaron una tendencia clara: agilidad empresarial. Comentan que la necesidad de esta tendencia surge porque el mundo nunca ha sido tan volátil, incierto, complejo y ambiguo. Por lo tanto, las organizaciones deben adaptarse rápidamente a los cambios del mercado, interna y externamente; responder con rapidez y flexibilidad a las demandas de los clientes; adaptarse y liderar el cambio de una manera productiva y rentable sin comprometer la calidad; y mantener continuamente una ventaja competitiva.
    </Typography>

    <Box m={1}/>
    <Typography variant="h5" component="h2" gutterBottom style={{fontStyle: "italic", color:"#808080"}}>
      Relación con PMBOK
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
			Se puede relacionar con el concepto de Los proyectos impulsan el cambio. Como se mencionan en el libro, desde el punto de vista de negocio, los proyectos impulsan el cambio en las organizaciones con el fin de lograr un objetivo específico. Y, cómo pudimos observar en el artículo trabajado, las empresas están adoptando la agilidad empresarial, ya que al haber tanta inestabilidad en el mundo que vivimos, éstas se tienen que adaptar a los cambios vayan surgiendo en el mercado. 
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
			También se puede relacionar con el concepto de contexto de Iniciación del Proyecto, pues los líderes de las organizaciones inician proyectos en respuesta a factores que intervienen sobre sus organizaciones. Y, como vimos antes, la agilidad empresarial es uno de los factores que está en auge y que es un impulsor clave del futuro de la agilidad.
    </Typography>

    <Box m={1}/>
    <Typography variant="h5" component="h2" gutterBottom style={{fontStyle: "italic", color:"#808080"}}>
      Referencias
    </Typography>

    <Typography variant="subtitle1" gutterBottom style={{fontStyle: "italic"}} align="justify">
			R. Prikladnicki, C. Lassenius, and J. C. Carver, “Trends in agile updated: Perspectives from the practitioners,” IEEE Softw., vol. 35, no. 1, pp. 109–111, Jan.–Feb. 2018. doi: 10.1109/MS.2017.4541042.
      <Link href="#">
				https://www.semanticscholar.org/paper/Trends-in-Agile%3A-Business-Agility-Prikladnicki-Lassenius/e73d4a81f525103915b4be1cff1228efc47b2923 
      </Link>
    </Typography>
    </Grid>
    </>
  )
}