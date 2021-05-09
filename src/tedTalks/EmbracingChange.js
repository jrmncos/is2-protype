import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {  Box, Divider } from "@material-ui/core";
import { YouTube } from "@material-ui/icons";

const opts = {
  height: '500',
  width: '100%'
};

export default function EmbracingChange() {

  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  return (
    <>
    <Typography variant="h3" component="h2" gutterBottom>
      Embracing Change, de Jason Clarke
		</Typography>

    <Divider/>
    <Box m={1}/>
    <YouTube videoId="vPhM8lxibSU" opts={opts} onReady={onReady} />
    <Box m={1}/>

    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="stretch"
      spacing={2}
    >
    <Typography variant="subtitle1" component="h2" gutterBottom>
		  En la TED talk “Embracing Change”, de Jason Clarke, publicada en diciembre de 2010, se plantea como siempre se ponen excusas para decir que algo no va a pasar y cómo cambiar esa perspectiva y apostar por el cambio.
    </Typography>

    <Typography variant="subtitle1" component="h2" gutterBottom>
      Clarke nos comenta que trabaja en el área de innovación y que le interesa superar la barrera del cambio. Él dice que lo primero que se necesita saber es que las excusas no son razones reales. Por ejemplo, si uno dice frases como: “Siempre ha sido así” o “pasa lo mismo en todos lados”, significa que el problema es más viejo de lo que se cree, pero que no es un argumento para no cambiar ahora. Sino que es una razón por la que deberíamos haber cambiado hace 20 años.
		</Typography>

    <Typography variant="subtitle1" gutterBottom align="justify"  >
      Luego, nos comenta que cada vez que algo pasa o hay un cambio, hay tres modos básicos de afrontarlos:
    </Typography>

    <List>
      <ListItem>
        <ArrowRightIcon />
        <ListItemText
          disableTypography
          primary={
          <Typography variant="subtitle1" gutterBottom align="justify">
            1. 	“Quiero ver lo positivo”
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
            2. 	“Quiero ver lo interesante” o
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
            3. 	“Sólo quiero enfocarme en lo negativo”
          </Typography>
          }
          />
      </ListItem>
    
    </List>


    <Typography variant="subtitle1" gutterBottom align="justify">
      Y que las personas transitan este proceso cada vez que afrontan un cambio, empezando por lo negativo, luego por lo interesante y por último, lo positivo. Y con respecto a las inseguridades que pueden tener las personas, comenta que en éstas pueden ser la respuesta al cambio. Pero, para solucionar esta cuestión, plantea que debemos pensar en dónde estamos y a dónde queremos estamos yendo.
    </Typography>

		<Typography variant="subtitle1" gutterBottom align="justify">
      Para llevar a cabo ello, Clarke nos indica que pensemos en 4 puertas:
    </Typography>

    <List>
      <ListItem>
        <ArrowRightIcon />
        <ListItemText
          disableTypography
          primary={
          <Typography variant="subtitle1" gutterBottom align="justify">
            1-	La primera puerta son las cosas que solemos hacer y aún podemos hacer.
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
            2-	La segunda puerta son las cosas que no podíamos hacer y ahora tampoco.
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
            3-	La tercera puerta son las cosas que podíamos hacer y ahora no.
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
            4-	La cuarta puerta, son las cosas que no podías hacer antes pero ahora sí.
          </Typography>
          }
          />
      </ListItem>
    </List>

		<Typography variant="subtitle1" gutterBottom align="justify">
      El número de personas que quiere cambiar es más grande de lo que imaginamos. Pero lo que ocurre es que quieren un cambio real, están cansados de creer en un cambio que no es real.  Ese es el problema. El cambio real suena igual al falso. Es difícil ver la diferencia. ¿El cambio es cultural o estructural?, es una gran pregunta.
    </Typography>
    
    <Typography variant="subtitle1" gutterBottom align="justify">
      Por lo que Clarke comenta que: el cambio real, que es cultural y ofrecido, funciona. El cambio falso, que es estructural y fingido, no funciona. Entonces, hay dos opciones: su mente va a estar abierta o cerrada, eso depende de cada elección.
    </Typography>
    
    <Typography variant="subtitle1" gutterBottom align="justify">
      Al final de la charla, se cuestiona lo siguiente: ¿Cuáles son los resultados de las elecciones que puedas hacer y las elecciones que yo pueda tomar? Y luego, plantea: Imaginemos que tienen la mente abierta y lo que yo tengo es nada. Esto es un cambio falso. ¿Qué significa para ustedes? Una gran decepción.
    </Typography>
    
    <Typography variant="subtitle1" gutterBottom align="justify">
      ¿Qué pasa si su mente está cerrada, y tenemos una real oportunidad aquí, si estuviéramos hablando sobre algo genuino? ¿Adivinen qué? Pierden la oportunidad. Pierden la posibilidad. ¿Qué pasa si su mente está abierta, y lo que te digo es real? Entonces, aquí es donde estamos.
    </Typography>
    
    <Typography variant="subtitle1" gutterBottom align="justify">
      Y concluye con la frase: Tenemos una oportunidad para hacer una diferencia real.
    </Typography>
    

		<Box m={1}/>
    <Typography variant="h5" component="h2" gutterBottom style={{fontStyle: "italic", color:"#808080"}}>
      Referencias
    </Typography>

    <Typography variant="subtitle1" gutterBottom style={{fontStyle: "italic"}} align="justify">
			Autor: Tim Urban Charla: https://www.ted.com/talks/tim_urban_inside_the_mind_of_a_master_procrastinator/transcript#t-830538
    </Typography>
    </Grid>
    </>
  )
}