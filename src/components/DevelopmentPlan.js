import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from './Sidebar';
import SinglePagePDFViewer from './SinglePagePDFViewer'
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Grid, Typography } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import planCisco from "../resources/plan-cisco.pdf"

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sidebar = {
  title: 'Video destacado',
  description:
    'El primer paso para cambiar nuestro Hardware Neuronal, es darse cuenta que somos dueños de nuestros pensamientos.',
  archives: [
    { title: 'Indie Games', url: '#' },
    { title: 'Scrum', url: '#' },
    { title: 'Extreme Programmin', url: '#' },
    { title: 'Cisco', url: '#' },
    { title: 'Extended Mind', url: '#' },
    { title: 'Computación Decolonial', url: '#' },
    { title: 'Kanban', url: '#' },
    { title: 'Simulacion', url: '#' },
  ],
  social: [
    { name: 'GitHub (Repo del Proyecto)', icon: GitHubIcon },
    { name: 'UNGS', icon: FacebookIcon },
  ],
};

export default function DevelopmentPlan() {
  const classes = useStyles();

  return(
    <Container maxWidth="lg">
      <main>
        <Grid container spacing={4} className={classes.mainGrid} m={4}>
          <Grid item xs={8}>

            <Typography variant="h3" component="h2" gutterBottom>
              Plan de Desarrollo
            </Typography>

            <Divider/>

            <Box m={1}/>

            <Typography variant="subtitle1" gutterBottom align="justify">
              A continuación podrás ver dos modelos de planes de desarrollo orientados a Procesos unificados. Ambos ejemplos simulan ser los proyectos de Cisco System y fundacion Valle de Lili (respectivamente), segun la informacion que se haya podido obtener de estos proyectos de los textos de estudio (aqui poner los nombres de los articulos), la informacion con la que no se cuenta en estos textos se ha completado en los planes de desarrollo a modo orientativo con datos que posiblemente sean irreales.
            </Typography>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography >Caso Cisco</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container>
                  <SinglePagePDFViewer pdf={planCisco} />
                </Grid>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography >Caso Fundación Valle del Lili </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container>
                  <SinglePagePDFViewer pdf={planCisco} height={700} scale={1.5} />
                </Grid>
              </AccordionDetails>
            </Accordion>

            
          </Grid>
          <Grid item xs={4}>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </Grid>
      </main>
    </Container>
  )
}
