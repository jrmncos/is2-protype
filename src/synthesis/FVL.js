import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Box, Divider } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 400,

  },
});

export default function FLV() {
  const classes = useStyles();


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
      Fundación Valle del Lili: Implementación de SAP
    </Typography>
    
    <Divider/>
    <Box m={1}/>

    <Typography variant="subtitle1" gutterBottom align="justify">
      El Hospital Fundación del Valle de Colombia en el año 2011 decidió sistematizar todos los procesos que involucran la atención a pacientes, entre ellas se incluyen principalmente historias clínicas, órdenes médicas, gestión de medicamentos e insumos, gestión de ingresos y costos en general, seguimiento de pago de médicos.
    </Typography>
    <Typography variant="subtitle1" gutterBottom align="justify">
      Donde los principales problemas estaban relacionados a la gestión de la información en papel, sin profundizar, ciertos aspectos del manejo de esta información se veían comprometidos: disponibilidad, seguridad, consistencia y redundancia entre otras cuestiones.
    </Typography>  
    <Typography variant="subtitle1" gutterBottom align="justify">
      Para llevar a cabo esta sistematización total de los procesos se optó por contratar a una consultora llamada Compunet que conocía de una manera profunda la solución de Planificación de Recursos Empresariales (ERP) que brindaba SAP, que busca automatizar procesos de la empresa, disponibilidad de la información, centralizar áreas de trabajo en un único sistema, entre otras cosas.
    </Typography>
    <Box m={1}/>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://valledellili.org/wp-content/uploads/2018/04/historia.jpg"
          title="Edificación FVL"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
          Edificación FVL
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Las instalaciones se encuentran en el centro de la ciudad de Cali
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
    <Box m={1}/>

    <Typography variant="subtitle1" gutterBottom align="justify">

      La adquisición del sistema no fue sencilla, puesto a que SAP traía un conjunto de soluciones predefinidas y estas no se adecuaban al 100% a las necesidades del hospital, esto produjo una puja entre jefes de áreas del hospital y los desarrolladores de la consultora. En esta puja se llegaba a una conciliación entre ambas partes donde los médicos argumentaban que lo que SAP les brindaba no les iba a resultar útil, necesitaban soluciones más específicas. Y por otro lado, los desarrolladores remarcaban que no eran necesarias todas esas implementaciones puntuales, que era el hospital el que debía adaptarse a SAP y no viceversa debido a que consideraban que SAP seguía buenas prácticas.
    </Typography>
    <Typography variant="subtitle1" gutterBottom align="justify">
      El desarrollo del sistema completo entre negociaciones de funcionalidad duró 1 año, que fue lanzado de una manera no escalonada, mencionada en el texto como “Bigbang”. Esto fue un golpe duro para los empleados del hospital, que acostumbrados a trabajar con papeles tuvieron que adaptarse a la fuerza a la nueva forma de trabajar que no solo cambia el hecho de digitalizar la información, sino que la implementación de este sistema cambia totalmente la forma de trabajar en el hospital.
    </Typography>
    <Typography variant="subtitle1" gutterBottom align="justify">
      Tras 6 meses de una complicada adaptación, con capacitaciones y soporte 24/7 al fin se veía la esperada mejora en como se pensaba que debía funcionar el sistema hablando de eficiencia y agilidad en los procesos. Sin embargo previo a estos meses se llegó incluso a cuestionar si el sistema realmente servía para agilizar y optimizar los procesos del hospital, debido a que en un principio todo era más lento que con papel. Algunos empleados llegaron a pensar que el sistema a mediano o largo plazo iba a terminar ocupando sus puestos de trabajo.
    </Typography>
    </Grid>
    </>
  )
}