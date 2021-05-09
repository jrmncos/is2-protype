import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {  Box, Divider } from "@material-ui/core";
import { YouTube } from "@material-ui/icons";

const opts = {
  height: '500',
  width: '100%'
};

export default function GreatLeader() {

  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  return (
    <>
    <Typography variant="h3" component="h2" gutterBottom>
			Simon Sinek: How great leaders inspire action
    </Typography>    
    <Divider/>
    <Box m={1}/>
    <YouTube videoId="Gdb9YSyelj0" opts={opts} onReady={onReady} />
    <Box m={1}/>

    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="stretch"
      spacing={2}
    >
    <Typography variant="subtitle1" component="h2" gutterBottom>
			En la charla TED “How great leaders inspire action”, de Simon Sinek, él mismo expone 3 casos de grandes líderes: En primer lugar, el caso de Apple, ¿cómo logran ser una una empresa tan innovadora?. En segundo lugar, el caso de Martin Luther King, ¿por qué él dirigió el movimiento de derechos civiles? siendo que no era el único gran orador del momento. Por último, el caso de los hermanos Wright, ¿por qué fueron capaces de idear los vuelos tripulados autopropulsados? siendo que habían personas mejor calificadas y mejor financiadas.
			
		</Typography>
    <Typography variant="subtitle1" component="h2" gutterBottom>
		Simon nos cuenta que descubrió un patrón en todos los grandes líderes, tanto individuos como organizaciones. Él comenta que todos ellos piensan, actúan y se comunican de la misma manera, es decir, de manera opuesta a todos los demás. Y para demostrar esto, él creó algo llamado el “Círculo de Oro”, el cual está compuesto de 3 círculos llamados: “¿Por qué?”, “¿Cómo?” y “¿Qué?”.
		A partir de este círculo, Simon menciona que la mayoría de las empresas se enfocan desde afuera hacia adentro, mientras que empresas como Apple lo hacen desde adentro hacia afuera. Según él: "El objetivo no es venderle lo que uno tiene, el objetivo es venderle a la gente que comparte nuestras creencias" y que "Si contratas a alguien porque sabe hacer un trabajo, trabajará por el dinero, pero si se contrata a alguien que comparta nuestras creencias, entonces trabajarán poniendo sangre, sudor y lágrimas". Un ejemplo de esto último es lo sucedido con los hermanos Wright, ellos financiaban su sueño de crear una “máquina voladora” con las ganancias de su tienda de bicicletas, a pesar de que ni ellos ni las personas que trabajaban con ellos tenían educación universitaria. Mientras que por otro lado, Samuel Pierpont Langley era una persona que también quería construir una “máquina voladora”, y que contaba con una mejor financiación y con las mentes más brillantes de la época. Y sin embargo, según Simon: “la diferencia fue que a Orville y Wilbur los guiaba una causa, un propósito, una creencia. Creyeron que si inventaban una máquina voladora, eso cambiaría el curso del mundo. Mientras que Langley quería ser famoso y rico, él solo estaba en búsqueda del resultado”.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify"  >
			Por otro lado, Simon menciona algo llamado la ley de difusión de la innovación. La cual puede representarse en un gráfico en el que se visualizan 5 actores: Los innovadores, los adaptadores tempranos, la mayoría temprana, la mayoría tardía y los rezagados. Él explica que la ley dice que si una persona quiere tener éxito en el mercado de forma masiva, no podrá lograrlo hasta alcanzar un punto de inflexión que están entre el 15% y 18% de penetración de mercado, y luego el sistema cambia. A continuación da 2 ejemplos de la ley de difusión de la innovación, uno exitoso y otro fallido. En primer lugar, el caso fallido trata sobre la empresa TiVo, la cual fracasó comercialmente debido a que al momento de promocionar su producto, un grabador de vídeo digital, dijeron todo lo que el producto tenía pero no dijeron el por qué. En segundo lugar, el caso exitoso trata sobre Martin Luther King, el cual no iba por ahí diciéndole a la gente lo que tenía que cambiar en EE.UU, sino que él le decía a la gente lo que él creía, y fue así como la gente que creía en lo que él creía, tomó su causa y la hizo propia, y la transmitieron a otras personas. Y así fue como en el verano de 1963 logró convocar a 250000 personas en el paseo de Washington
    </Typography>

    
    <Typography variant="subtitle1" gutterBottom align="justify">
    	Para finalizar, Simon explica que “existen los líderes y las personas que lideran. Y que los líderes tienen una posición de poder o de autoridad, pero los que lideran, nos inspiran. Seguimos a los que lideran, no porque tenemos que hacerlo, sino porque queremos hacerlo. Seguimos a quienes lideran, no por ellos, sino por nosotros mismos”
    </Typography>


    <Box m={1}/>
    <Typography variant="h5" component="h2" gutterBottom style={{fontStyle: "italic", color:"#808080"}}>
      Referencias
    </Typography>

    <Typography variant="subtitle1" gutterBottom style={{fontStyle: "italic"}} align="justify">
			Simon Sinek (2009). How great leaders inspire action.
    </Typography>
    </Grid>
    </>
  )
}