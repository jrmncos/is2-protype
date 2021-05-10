import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {  Box, Divider } from "@material-ui/core";
import ImageZoom from "react-medium-image-zoom";
import relations from '../images/relations.png';


export default function TalksRelation() {

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
      Relaciones entre las charlas TED
    </Typography>    
    <Divider/>

    <Typography variant="h5" component="h2" gutterBottom style={{fontStyle: "italic", color:"#808080"}}>
      El siguiente diagrama muestra las relaciones que supimos identificar entre las charlas TED.
    </Typography>
    <ImageZoom
      image={{
        src: relations,
        alt: 'Golden Gate Bridge',
        className: 'img',
        style: { width: '50%' }
      }}
      zoomImage={{
        src: 'bridge-big.jpg',
        alt: 'Golden Gate Bridge'
      }}
    />
    
    <Box m={1}/>
    <Typography variant="h5" component="h2" gutterBottom >
      1. Relación entre Embracing Change (Jason Clarke), 10 ways to have a better conversation (Celeste Headlee) y How great leaders inspire action (Simon Sinek)
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify"  >
      Por un lado, lo podemos relacionar con la charla ted: “10 formas para tener una mejor conversación”, de Celeste Headlee con “Embracing Change”, de Jason Clarke ya que en la charla ofrecida J. Clarke se  plantea cómo nos enfrentamos al cambio, las reacciones que tenemos sobre él, y cómo lo llevamos a cabo, y en la charla abordada por C. Headlee si bien se plantean una serie de reglas o consejos para tener una conversación, éstos resultan puntos de cambios para una o más personas. Es decir, si revisamos nuevamente esas reglas, notaremos que para poder tener una conversación real con otra persona, seguramente tengamos que realizar una serie de cambios en uno o más hábitos propios; por lo que está bueno tener presente la charla de J. Clarke, para saber cómo abordar esos cambios de hábitos.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify"  >
      Por el otro, también podemos relacionar la charla de C. Headlee con la charla: “How great leaders inspire action”, de Simon Sinek. En su charla, S. Sinek, plantea que algunas organizaciones o líderes pueden inspirar mientras que otros no. Esto se debe a que una parte de ellos ha podido cambiar y evolucionar a la hora de comunicar: saben lo que hacen, cómo lo hacen y por qué lo hacen. Mientras que otros no. Y probablemente uno de los motivos por lo cual no han podido, es porque no saben cómo realizar ese cambio, ni que tan necesario puede ser para el otro poder entender su comportamiento.
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify"  >
      Por último, podemos relacionar “Embracing Change”, de Jason Clarke con la charla “How great leaders inspire action”, de Simon Sinek. En su charla, S. Sinek, plantea que algunas organizaciones o líderes pueden inspirar mientras que otros no. Esto se debe a que una parte de ellos ha podido cambiar y evolucionar a la hora de comunicar: saben lo que hacen, cómo lo hacen y por qué lo hacen. Y probablemente uno de los motivos por lo cual no han podido, es porque no saben cómo realizar ese cambio, ni que tan necesario puede ser para el otro poder entender su comportamiento.
    </Typography>  

    <Box m={1}/>
    <Typography variant="h5" component="h2" gutterBottom >
      2. Relación entre Inside the mind of master procrastinator (Tim Urban), Embracing Change (Jason Clarke) y Discurso de Graduación (Steve Jobs)
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify"  >
      Podemos relacionar las charlas “Inside the mind of a master procrastinator” de Tim Urban con la charla “Embracing Change” de Jason Clarke y el discurso “Discurso de Graduación. Stanford University.” de Steve Jobs debido a que los autores mencionan que se debe hacer un cambio en los hábitos o sobre estos hábitos persee. Tim Urban habla sobre los hábitos de la gente, como estos pueden llevar a postergar tareas a causa de la procrastinación y cómo hay gente que se lleva bien con los deadlines de los proyectos, Jason Clarke menciona que por más que haya miedo e incertidumbre hacia los cambios a veces son necesarios para lograr grandes cosas, estos cambios podrían estar asociados a los hábitos en sí y de esta manera evitar la procrastinación. Steve Jobs de la misma manera menciona que hay que seguir los instintos, confiar en nosotros y en lo que queremos hacer, no gastar tiempo viviendo la vida de otro. Tener la valentía para abandonar la comodidad y afrontar lo desconocido.
    </Typography>

    <Box m={1}/>
    <Typography variant="h5" component="h2" gutterBottom >
      3. Relación entre Do schools kill creativity? (Ken Robinson), Facebook’s role in Brexit and the threat to democracy (Carole Cadwalladr) y This is water (David Foster Wallace)
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify"  >
      Por un lado podemos relacionar la charla “Do schools kill creativity?” de Ken Robinson, con el discurso “This is Water” de David Foster Wallace, ya que ambos hablan de como tener una visión sobre el exterior. Ken menciona que se deben educar las capacidades creativas de los niños para que estos puedan enfrentar el futuro en materia ecológica y puedan ayudar al medio ambiente con sus ideas. De forma similar, David menciona en su discurso como las personas deben tener una mejor percepción sobre las pequeñas cosas y todo lo que se encuentra alrededor. 
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify"  >
      Por otro lado, podemos relacionar la charla “Facebook 's role in Brexit and the threat to democracy” de Carole Cadwalladr, con el discurso “This is Water” de David Forest Wallace. ya que ambos explican cómo las personas se quedan con un solo punto de vista. Carole explica cómo los habitantes de Ebbw Vale, en Gales, estaban hartos de no tener ayuda por parte de la Unión Europea y la problemática con los inmigrantes y refugiados, pero luego explica que esa ciudad tenía una de las tasas más bajas de inmigracion del país, por lo que menciona que el odio irracional de las personas era causado por lo que veían en Facebook. De igual forma, David en su discurso menciona cómo las personas tienen ese pensamiento por defecto que no las dejan pensar o ver más allá de lo que creen que es verdadero, en este caso la información que las personas obtenían de Facebook no era real y las mismas no trataban de investigar otra visión del problema..
    </Typography>

    <Typography variant="subtitle1" gutterBottom align="justify"  >
      Por último, podemos relacionar la charla “Do schools kill creativity?” de Ken Robinson, con la charla “Facebook 's role in Brexit and the threat to democracy” de Carole Cadwalladr. Ya que lo relatado por Ken sobre la creatividad nos lleva a pensar que esta es una de las causas las cuales se crearon herramientas tan poderosas como Facebook, que utilizada de buena manera puede ser muy beneficiosa para la sociedad, pero cómo desarrolla Carole en su charla esta también puede ser utilizada de forma maligna, la cual mediante manipulaciones a las personas más persuasivas puede cambiar hasta el destino de una votación muy importante.
    </Typography>

    </Grid>
    </>
  )
}