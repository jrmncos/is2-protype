import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Home from "./Home"
import Grid from '@material-ui/core/Grid';
import Sidebar from './Sidebar';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import Capitalism from "../tutorials/Capitalism";
import Genero from "../tutorials/Genero";
import Atrapados from "../tutorials/Atrapados";
import Certificaciones from "../tutorials/Certifications";
import Future from "../tutorials/Future";
import Decolonial from "../tutorials/Decolonial";
import ArquitecturaPolitica from "../tutorials/ArquitecturaPolitica";
import ExtendedMind from "../tutorials/ExtendedMind";

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
    { title: 'Extreme Programming', url: '#' },
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

export default function Tutorial({params}) {
  const classes = useStyles();
  const caseStudy = {id: params.id}

  const renderSwitch = (params) => {
    console.log(params)
    console.log(params.id)
    switch(params.id){
      case "capitalism":
        return <Capitalism/>
      case "genero":
        return <Genero/>
      case "atrapados":
        return <Atrapados/>
      case "certifications":
        return <Certificaciones/>
      case "future":
        return <Future/>
      case "decolonial":
        return <Decolonial/>
      case "arquitecturapolitica":
        return <ArquitecturaPolitica/>
      case "extendedmind":
        return <ExtendedMind/>
      default:
        return <Home/>
    }
  }

  return(
    <Container maxWidth="lg">
    <main>
      <Grid container spacing={4} className={classes.mainGrid} m={4}>
        <Grid item xs={8}>
          {
            renderSwitch(caseStudy)
          }
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