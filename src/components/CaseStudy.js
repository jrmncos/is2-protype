import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import FVL from "../synthesis/FVL"
import Cisco from "../synthesis/Cisco"
import Home from "./Home"
import Grid from '@material-ui/core/Grid';
import Sidebar from './Sidebar';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import Diamond from "../synthesis/Diamond";
import GreatHack from "../synthesis/GreatHack";
import IndieGames from "../synthesis/IndieGames";
import SocialDilemma from "../synthesis/SocialDilemma"
import NavArticles from "./NavArticles";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));


export default function CaseStudy({params}) {
  const classes = useStyles();
  const caseStudy = {id: params.id}

  const renderSwitch = (params) => {
    switch(params.id){
      case "fvl":
        return <FVL/>
      case "cisco":
        return <Cisco/>
      case "diamond":
        return <Diamond/>
      case "greathack":
        return <GreatHack/>
      case "indiegames":
        return <IndieGames/>
      case "socialdilemma":
        return <SocialDilemma/>
      default:
        return <Home/>
    }
  }

  const renderNavArticles = (params) => {
    switch(params.id){
      case "fvl":
        return <NavArticles next={articlesUrls.diamond} />
      case "diamond":
        return <NavArticles prev={articlesUrls.flv} next={articlesUrls.cisco} />
      case "cisco":
        return <NavArticles prev={articlesUrls.diamond} next={articlesUrls.greathack} />
      case "greathack":
        return <NavArticles prev={articlesUrls.cisco} next={articlesUrls.indiegames} />
      case "indiegames":
        return <NavArticles prev={articlesUrls.greathack} next={articlesUrls.socialdilemma}/>
      case "socialdilemma":
        return <NavArticles prev={articlesUrls.indiegames}/>
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
        <Grid item xs={8}>
          {
            renderNavArticles(caseStudy)
          }
        </Grid>
      </Grid>
      
      
    </main>
    </Container>
  )
}

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

const articlesUrls = {
  flv: {title: "Fundación Valle Lili", url: "/casestudy/fvl"},
  diamond: {title: "Hay diamantes en la mina de datos", url: "/casestudy/diamond"},
  cisco: {title: "Cisco System: Implementación ERP", url: "/casestudy/cisco"},
  greathack: {title: "The Great Hack", url:"/casestudy/greathack"},
  indiegames: {title: "Indie Games", url:"/casestudy/indiegames"},
  socialdilemma: {title: "El dilema de las redes sociales", url: "/casestudy/socialdilemma"}
}
