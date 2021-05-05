import React from "react"
import Grid from '@material-ui/core/Grid';
import { Box, Typography } from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Pregunta from "../components/Pregunta";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

const preguntas = [
  {
    titulo: "Existe un cambio de paradigma en la economía actual que deviene del asentamiento de la tecnología informática, más específicamente en el crecimiento de las redes orientado a lo inmaterial, más cercano a lo cognitivo y al uso del conocimiento según algunos teóricos. El capitalismo actual se centra en la extracción y uso de datos, pero..",
    respuestas: ["Los datos pueden implicar conocimiento, aunque no es una condición necesaria.", "Los datos son adquiridos mediante el conocimiento.", "Los datos son la materia prima cognitiva que reemplaza a la mano de obra."],
    correcta: 0
  },
  {
    titulo: "¿Por qué se compara a los datos con el petróleo?",
    respuestas: ["Porque son extradós, refinados para el aprovechamiento correcto con fines lucrativos.", "Porque los datos están sobrevaluados como el petróleo en la economía contemporánea.", "Porque los datos se obtienen de manera sucia como se obtiene el petróleo de los pozos petroleros antes de ser refinado."],
    correcta: 0
  },
  {
    titulo: "¿Las plataformas son?",
    respuestas: ["Proporcionan una infraestructura que permite mediar entre grupos en vez de tener que construir un mercado desde cero.", "Son nexos entre redes sociales y administradores de datos con el fin de conseguir rédito económico mediante la publicidad o marketing.", "Son facilitadores de empleo que tienen como fin contribuir al mercado en países con altos niveles de desempleo."],
    correcta: 0
  },
  {
    titulo: "¿Por qué las plataformas suelen utilizar subvenciones cruzadas?",
    respuestas: ["Porque son subvencionadas por el Estado y tienen una inversión prácticamente nula que les permite obtener una ganancia casi limpia en la venta de sus servicios.", "Porque disponibilizan servicios gratuitos sin rédito económico que permitan obtener más clientes en otros productos que si dan ganancias.", "Porque son capaces de cruzar las inversiones de tal manera que no sean perceptibles por los usuarios finales, generando una sensación de producto económico que termina teniendo un costo elevado."],
    correcta: 1
  },
  {
    titulo: "La llamada categoría de plataformas, plataformas publicitarias refiere a:",
    respuestas: ["Aplicaciones de comercialización como Mercado Libre, OLX, etc", "Aplicaciones que utilizan datos recolectados con anterioridad para direccionar la publicidad a los usuarios que tienen más aspiraciones a un producto u otro.", "Páginas web de las empresas dedicadas al marketing."],
    correcta: 1
  },
  {
    titulo: "¿Cuáles son las plataformas de nube?",
    respuestas: ["Plataformas de empresas que obtienen grandes ganancias a través de publicidad a cambio de un servicio económico de espacio para almacenar información.", "Plataformas austeras utilizadas como subvención cruzada que permite obtener datos valiosos para otros fines que dan rédito económico a las compañías.", "Sistemas informáticos que ofrecen espacio en un servidor desconocido con el fin de vender imágenes o contenido multimedia de un usuario a otros."],
    correcta: 1
  },
  {
    titulo: "¿Cuáles son las plataformas industriales?",
    respuestas: ["Son las plataformas que permiten al sector industrial llevar la gestión contable y distribución de sus productos.", "Son las plataformas que permiten a la industria promocionar y publicitar sus productos a través de páginas o redes compartidas.", "Son las plataformas que permiten a las compañías industriales suplantar mano de obra por automatizaciones y obtener información de producción y necesidades de una empresa a fin de ofrecerle mejores productos o soluciones a futuro."],
    correcta: 2
  },
  {
    titulo: "¿Cuál es la diferencia entre una plataforma de productos y una plataforma austera?",
    respuestas: ["Las plataformas de productos ofrecen al consumidor un bien por el cual la compañía vendedora realiza una inversión de capital y las plataformas austeras utilizan bienes que no son adquiridos por ellos bajo inversión inicial, estas últimas utilizan bienes no propios para obtener ganancias.", "Las plataformas de productos venden productos tangibles, mientras que las plataformas austeras solo venden servicios como cursos, soporte técnico, asesoramiento, atención de reclamos.", "Las plataformas austeras proponen un crecimiento del mercado laboral que las plataformas de productos no podrían alcanzar, dado que las plataformas de productos son totalmente automatizadas y las plataformas austeras requieren de mano de obra."],
    correcta: 0
  },
  {
    titulo: "¿Las plataformas como PedidosYa, Rappi y Glovo, son plataformas de qué tipo?",
    respuestas: ["Plataformas industriales.", "Plataformas de producto.", "Plataformas austeras."],
    correcta: 2
  },
  {
    titulo: "¿Por qué se dice que AIRBNB y UBER transforman ciudades?",
    respuestas: ["Porque su eslogan lo dice.", "Porque transforma los alquileres de largo plazo a corto y porque intenta reducir la congestión de tránsito, respectivamente.", "Porque hay ciudades que subsisten gracias a estas aplicaciones, es decir su principal economía es a través de plataformas."],
    correcta: 1
  },
  {
    titulo: "¿Por qué la tecnología no pudo igualar la situación laboral entre hombres y mujeres?",
    respuestas: ["Porque la tecnología está más al alcance del hombre que de la mujer.", "Porque la tecnología reproduce lo que la sociedad ya es.", "Porque están hechas pensadas solo para un sexo en particular."],
    correcta: 0
  },
  {
    titulo: "¿Por qué se dice que al aumentar los freelancers bajan los salarios?",
    respuestas: ["Porque las plataformas aumentarian de popularidad y por ende las comisiones.", "Por la oferta y demanda.", "Porque al aumentar los freelancers, aumenta la cantidad de personas en relación de dependencia."],
    correcta: 1
  },
]

export default function Capitalism() {
  const classes = useStyles();
  const [correctas, setCorrectas] = React.useState(0);
  const [mostrarSolucion, setMostrarSolucion] = React.useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Handle Submit")
    setMostrarSolucion(!mostrarSolucion)
  };
  
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
        Capitalismo en las plataformas
      </Typography>


      <form onSubmit={handleSubmit}>
      <Box m={2}/>
        {
          preguntas.map((pregunta) =>{
            return(
              <>
                <Pregunta 
                  pregunta={pregunta} 
                  setCorrectas={setCorrectas}
                  mostrarSolucion={mostrarSolucion}
                />
                <Box m={2}/>
              </>
            )
          })
        }

        <Box m={2}/>
        <Button type="submit" variant="outlined" color="primary" className={classes.button}>
          Completar!
        </Button>
      </form>
      {
        mostrarSolucion && <h1>La cantidad de respuestas correctas es {correctas} / {preguntas.length}</h1>
      }
    </Grid>
    </>
  )
}