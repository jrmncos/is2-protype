import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {  Box, Divider, List, ListItem, ListItemText } from "@material-ui/core";
import { Link } from "wouter";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

export default function Sustainable() {

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
      Sustainable Wearables
    </Typography>    
    <Divider/>
    <Box m={1}/>
    <Typography variant="h5" component="h2" gutterBottom style={{fontStyle: "italic", color:"#808080"}}>
      Sustainable Wearables: Wearable Technology for Enhancing the Quality of Human Life
    </Typography>

    <Typography variant="subtitle1" component="h2" gutterBottom>
      El artículo Sustainable Wearables: Wearable Technology for Enhancing the Quality of Human Life de MDPI, habla de las tecnologías wearable en un futuro tienen que ser sostenibles para mejorar la calidad de vida y el valor de la vida.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify"  >
      Para empezar, estas tecnologías se usan para monitorear y recolectar datos, tienen sensores que recolectan la actividad física y el estado psicológico, de esta manera se puede monitorear las condiciones de cada usuario. Así por ejemplo, las siguientes tecnologías incluyen sensores wearables: en giroscopios para determinar la detección y el seguimiento del movimiento del usuario , magnetómetros para mejorar el seguimiento del movimiento, sensores de bio-dependencia para medir la resistencia al flujo sanguíneo y el tejido de la piel, etc.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      A pesar de que décadas anteriores, solo era posible usar estos artefactos solo en la superficie del cuerpo. Hoy en día se puede encontrar tecnologías wearables miniaturizadas lo que posibilita que se las emplee dentro del cuerpo y además algunas pueden transmitir datos remotamente.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Aunque existe un problema con estas tecnologías dado que recolectan mucha información y la mayoría innecesaria, por lo que no puede ser manejada por las tecnologías actuales. Por ejemplo, un monitor de frecuencia cardíaca puede recolectar 250 muestras por segundo y producir una cantidad de gigabytes por persona por mes.  De manera que los artefactos wearable no deberían tener solo como objetivo la recolección de datos sino un medio para facilitar con cambios positivos en la vida de cada individuo.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Se habla de tres aplicaciones de sostenibles wearables: 
    </Typography>
    <List>
      <ListItem>
        <ArrowRightIcon />
        <ListItemText
          disableTypography
          primary={
          <Typography variant="subtitle1" gutterBottom align="justify">
            Bienestar y salud: Aplicaciones de rehabilitación remota que ayudaría a que los pacientes puedan hacer el tratamiento desde su propia casa, además reduciría su costo.
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
            Ayuda para discapacitados: Usando la tecnología 3G o LTE que cubren grandes áreas se pueden crear aplicaciones con sensores que ayuden a las personas no videntes. Estas aplicaciones tienen que actualizar constantemente su ubicación para dar información al usuario sobre caminos, obstáculos, hasta llegar al destino.
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
            Socorro en casos de desastre y protección publica: Aplicaciones para monitorear el estado de salud de personas que trabajan en peligrosos y hostiles ambientes.
          </Typography>
          }
          />
      </ListItem>
    
    </List>

    <Box m={1}/>
    <Typography variant="h5" component="h2" gutterBottom style={{fontStyle: "italic", color:"#808080"}}>
      Relación con PMBOK
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify">
      Este artículo relacionado con los capítulos del PMBOK, se puede relacionar con el punto Contexto de iniciación del Proyecto. Dado que en este artículo se pretende cambiar las estrategias de negocio de las tecnologías wearables. Se quiere mejorar la manera en que se crean estos artefactos haciendo foco no solo en recolectar datos sino en mejorar la calidad de vida de los usuarios. 
    </Typography>

    <Box m={1}/>
    <Typography variant="h5" component="h2" gutterBottom style={{fontStyle: "italic", color:"#808080"}}>
      Referencias
    </Typography>

    <Typography variant="subtitle1" gutterBottom style={{fontStyle: "italic"}} align="justify">
      Multidisciplinary Digital Publishing Institute (MDPI). “Sustainable Wearables: Wearable Technology for Enhancing the Quality of Human Life”
      <Link href="#">
        https://www.mdpi.com/2071-1050/8/5/466/htm
      </Link>
    </Typography>
    </Grid>
    </>
  )
}