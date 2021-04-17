import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 650,

  },
});

export default function GreatHack(){
  const classes = useStyles();

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
        Cisco Systems: Implementación del Sistema ERP
      </Typography>

      <Typography variant="subtitle1" gutterBottom align="justify">
        Este caso de estudio, cuenta como CISCO systems llevó a cabo la implementación de un Enterprise Resource Planning (ERP). Para que surja esta implementación primero ocurrió se planteó que Cisco necesitaba un cambio por el crecimiento que obtuvieron.
      </Typography>

      <Typography variant="subtitle1" gutterBottom align="justify">
        Fue allí, que surgieron problemas en las áreas funcionales, como no poder expandirse por aplicar parches al sistema perdiendo cada vez más en grado de redundancia, confiabilidad y mantenibilidad.
      </Typography>

      <Typography variant="subtitle1" gutterBottom align="justify">
        El punto de quiebre fue cuando ocurrió el apagón de sus sistemas, lo que llevó a que toda la compañía estuviera parada por dos días, esto llevó a que los gerentes tomaran una decisión de cambio.
      </Typography>

      <Typography variant="subtitle1" gutterBottom align="justify">
        Fue así que eligieron a KPMG como socio de integración, quienes ayudarían a CISCO a seleccionar e implementar una solución acorde a la compañía. Luego de un relevamiento en el mercado, Oracle fue elegida como el ERP que cubría las necesidades de Cisco. Los factores de decisión fueron que el fuerte de este ERP era el área manufactura, prometía nueva funcionalidad al paquete y que ofrecía flexibilidad.
      </Typography>
      
      <Box m={1}/>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://www.e-global.es/images/stories/ERP-CRM-diferencias.jpg"
            title="ERP"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              Sistema de planificación de recursos empresariales
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Son sistemas de información gerenciales que integran y manejan muchos de los negocios asociados con las operaciones de producción y de los aspectos de distribución de una compañía en la producción de bienes o servicios.
            </Typography>
          </CardContent>
        </CardActionArea>

      </Card>
      <Box m={1}/>

      <Typography variant="subtitle1" gutterBottom align="justify">
        Luego de la elección, el equipo se centró en los tiempos y costos del proyecto. Se presentó el proyecto ante la alta gerencia y se aprobó.
      </Typography>

      <Typography variant="subtitle1" gutterBottom align="justify">
        Luego de la aprobación, el equipo descompuso la implementación en fases, de manera tal de que en cada fase basarse en el trabajo anterior, así poder conocer más el software.
      </Typography>

      <Typography variant="subtitle1" gutterBottom align="justify">
        En la primera fase, se armaron dos equipos, uno para capacitarse en en las aplicaciones de Oracle, mientras que el otro equipo ponía en funcionamiento las aplicaciones. Posteriormente a esto, hicieron una reunión entre todos los equipos y delinearon como iban a proseguir.
      </Typography>

      <Typography variant="subtitle1" gutterBottom align="justify">
        Ya en la siguiente fase, las lecciones aprendidas de la fase anterior salieron a la luz, era inevitable realizar modificaciones y pensando en futuro, sería difícil de mantener. El foco en esta fase fue poner en marcha cada módulo en el ERP. Por esta tarea, se descubre las falencias que Oracle contenía para soportar todos los requisitos de los procesos de Cisco, entonces, en esta fase comienza lo que era inevitable, la modificación del ERP que ofrecía Oracle.
      </Typography>

      <Typography variant="subtitle1" gutterBottom align="justify">
        En la fase 2, el alcance del proyecto había incrementado no solo para cumplir con las modificaciones sino para agregar un nuevo paquete de soporte, porque el primero no cumplía al 100% con lo necesitado. Esta fase finalizó con la puesta en marcha de las primeras grandes modificaciones.
      </Typography>

      <Typography variant="subtitle1" gutterBottom align="justify">
        El proyecto fue un éxito luego de su estabilización pero como lecciones aprendidas luego de la implementación, fueron los problemas con la arquitectura y las dimensiones del hardware. En contrapartida, otra lección aprendida fue la de no probar con un banco de datos grandes de manera tal de sobrecargar el sistema y validar si la cantidad de transacciones diarias iban a ser soportadas.
      </Typography>
      
      </Grid>
    </>
  )
}