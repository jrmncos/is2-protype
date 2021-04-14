import React from "react"
import Grid from '@material-ui/core/Grid';
import { Box, Card, Typography } from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

export default function Capitalism() {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Choose wisely');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === 'best') {
      setHelperText('You got it!');
      setError(false);
    } else if (value === 'worst') {
      setHelperText('Sorry, wrong answer!');
      setError(true);
    } else {
      setHelperText('Respuesta correcta 1)');
      setError(true);
    }
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
        <Card>
          <FormControl component="fieldset" error={error} className={classes.formControl}>
            <Typography variant="h6" gutterBottom >
              ¿Por qué se compara a los datos con el petróleo?
            </Typography>

            <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
              <FormControlLabel value="1" control={<Radio />} label=" 1) Porque son extraidos, refinados para el aprovechamiento correcto con fines lucrativos." />
              <FormControlLabel value="2" control={<Radio />} label="2) Porque los datos están sobrevaluados como el petróleo en la economía contemporánea." />
              <FormControlLabel value="3" control={<Radio />} label="3) Porque los datos se obtienen de manera sucia como se obtiene el petróleo de los pozos petroleros antes de ser refinado." />
              
            </RadioGroup>
            <FormHelperText>{helperText}</FormHelperText>
          </FormControl>
        </Card>
        <Box m={2}/>

        <Card>
        <FormControl component="fieldset" error={error} className={classes.formControl}>
          <Typography variant="h6" gutterBottom >
            Existe un cambio de paradigma en la economía actual que deviene del asentamiento de la tecnología informática, más específicamente en el crecimiento de las redes orientado a lo inmaterial, más cercano a lo cognitivo y al uso del conocimiento según algunos teóricos. El capitalismo actual se centra en la extracción y uso de datos, pero..

          </Typography>

          <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
            <FormControlLabel value="1" control={<Radio />} label=" 1) Los datos pueden implicar conocimiento, aunque no es una condición necesaria." />
            <FormControlLabel value="2" control={<Radio />} label="2) Los datos son adquiridos mediante el conocimiento." />
            <FormControlLabel value="3" control={<Radio />} label="3) Los datos son la materia prima cognitiva que reemplaza a la mano de obra." />
            
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
        </Card>
        <Box m={2}/>

        <Card>
        <FormControl component="fieldset" error={error} className={classes.formControl}>
          <Typography variant="h6" gutterBottom >
            ¿Las plataformas son?

          </Typography>

          <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
            <FormControlLabel value="1" control={<Radio />} label=" 1) Proporcionan una infraestructura que permite mediar entre grupos en vez de tener que construir un mercado desde cero." />
            <FormControlLabel value="2" control={<Radio />} label="2) Son nexos entre redes sociales y administradores de datos con el fin de conseguir rédito económico mediante la publicidad o marketing." />
            <FormControlLabel value="3" control={<Radio />} label="3) Son facilitadores de empleo que tienen como fin contribuir al mercado en países con altos niveles de desempleo." />
            
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
        </Card>
        <Box m={2}/>

        <Card>
        <FormControl component="fieldset" error={error} className={classes.formControl}>
          <Typography variant="h6" gutterBottom >
            ¿Por qué las plataformas suelen utilizar subvenciones cruzadas?
          </Typography>

          <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
            <FormControlLabel value="1" control={<Radio />} label=" 1) Porque son subvencionadas por el Estado y tienen una inversión prácticamente nula que les permite obtener una ganancia casi limpia en la venta de sus servicios." />
            <FormControlLabel value="2" control={<Radio />} label="2) Porque disponibilizan servicios gratuitos sin rédito económico que permitan obtener más clientes en otros productos que si dan ganancias." />
            <FormControlLabel value="3" control={<Radio />} label="3) Porque son capaces de cruzar las inversiones de tal manera que no sean perceptibles por los usuarios finales, generando una sensación de producto económico que termina teniendo un costo elevado." />
            
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
        </Card>
        <Box m={2}/>

        <Card>
        <FormControl component="fieldset" error={error} className={classes.formControl}>
          <Typography variant="h6" gutterBottom >
            La llamada categoría de plataformas, plataformas publicitarias refiere a:
          </Typography>

          <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
            <FormControlLabel value="1" control={<Radio />} label=" 1) Aplicaciones de comercialización como Merca Libre, OLX, etc" />
            <FormControlLabel value="2" control={<Radio />} label="2) Aplicaciones que utilizan datos recolectados con anterioridad para direccionar la publicidad a los usuarios que tienen más aspiraciones a un producto u otro. " />
            <FormControlLabel value="3" control={<Radio />} label="3) Páginas web de las empresas dedicadas al marketing." />
            
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
        </Card>
        <Box m={2}/>

        <Card>
        <FormControl component="fieldset" error={error} className={classes.formControl}>
          <Typography variant="h6" gutterBottom >
            ¿Cuales son las plataformas de nube?
          </Typography>

          <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
            <FormControlLabel value="1" control={<Radio />} label=" 1) Plataformas de empresas que obtienen grandes ganancias a través de publicidad a cambio de un servicio económico de espacio para almacenar información." />
            <FormControlLabel value="2" control={<Radio />} label="2) Plataformas austeras utilizadas como subvención cruzada que permite obtener datos valiosos para otros fines que dan rédito económico a las compañías. " />
            <FormControlLabel value="3" control={<Radio />} label="3) Sistemas informáticos que ofrecen espacio en un servidor desconocido con el fin de vender imágenes o contenido multimedia de un usuario a otros." />
            
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
        </Card>
        <Box m={2}/>

        <Card>
        <FormControl component="fieldset" error={error} className={classes.formControl}>
          <Typography variant="h6" gutterBottom >
            ¿Cuales son las plataformas industriales?
          </Typography>

          <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
            <FormControlLabel value="1" control={<Radio />} label=" 1) Son las plataformas que permiten al sector industrial llevar la gestión contable y distribución de sus productos." />
            <FormControlLabel value="2" control={<Radio />} label="2) Son las plataformas que permiten a la industria promocionar y publicitar sus productos a través de páginas o redes compartidas. " />
            <FormControlLabel value="3" control={<Radio />} label="3) Son las plataformas que permiten a las compañías industriales suplantar mano de obra por automatizaciones y obtener información de producción y necesidades de una empresa a fin de ofrecerle mejores productos o soluciones a futuro." />
            
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
        </Card>
        <Box m={2}/>

        <Card>
        <FormControl component="fieldset" error={error} className={classes.formControl}>
          <Typography variant="h6" gutterBottom >
            ¿Cual es la diferencia entre una plataforma de productos y una plataforma austera?
          </Typography>

          <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
            <FormControlLabel value="1" control={<Radio />} label=" 1) Las plataformas de productos ofrecen al consumidor un bien por el cual la compañía vendedora realiza una inversión de capital y las plataformas austeras utilizan bienes que no son adquiridos por ellos bajo inversión inicial, estas últimas utilizan bienes no propios para obtener ganancias." />
            <FormControlLabel value="2" control={<Radio />} label="2) Las plataformas de productos venden productos tangibles, mientras que las plataformas austeras solo venden servicios como cursos, soporte técnico, asesoramiento, atención de reclamos. " />
            <FormControlLabel value="3" control={<Radio />} label="Las plataformas austeras proponen un crecimiento del mercado laboral que las plataformas de productos no podrían alcanzar, dado que las plataformas de productos son totalmente automatizadas y las plataformas austeras requieren de mano de obra." />
            
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
        </Card>

      </form>
      <Box m={2}/>
      <Button type="submit" variant="outlined" color="primary" className={classes.button}>
            Completar!
      </Button>

    </Grid>
    </>
  )
}