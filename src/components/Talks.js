import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Home from "./Home"
import Grid from '@material-ui/core/Grid';
import Sidebar from './Sidebar';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import NavArticles from "./NavArticles";
import GreatLeader from "../tedTalks/GreatLeader";
import SteveJobs from "../tedTalks/SteveJobs";
import School from "../tedTalks/School";
import FacebookDemocracy from "../tedTalks/FacebookDemocracy";
import Conversation from "../tedTalks/Conversation";
import EmbracingChange from "../tedTalks/EmbracingChange";
import Procrastinator from "../tedTalks/Procrastinator";
import TalksRelation from "../tedTalks/TalksRelation";
import Water from "../tedTalks/Water";
import LearnedLessons from "../tedTalks/LearnedLessons";

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

export default function Talks({params}) {
  const classes = useStyles();
  const caseStudy = {id: params.id}

  const renderSwitch = (params) => {
    console.log(params)
    console.log(params.id)
    switch(params.id){
      case "relation":
        return <TalksRelation/>   
      case "learnedlesson":
          return <LearnedLessons/>   
      case "conversation":
        return <Conversation/>   
      case "embracingchange":
        return <EmbracingChange/>
      case "facebookdemocracy":
        return <FacebookDemocracy/>      
      case "greatleader":
        return <GreatLeader/>   
      case "procrastinator":
        return <Procrastinator/>   
      case "school":
        return <School/>   
      case "stevejobs":
        return <SteveJobs/>   
      case "water":
        return <Water/>   
      default:
        return <Home/>
    }
  }

  const renderNavArticles = (params) => {
    switch(params.id){
      case "conversation":
        return <NavArticles next={articlesUrls.embracingchange} />
      case "embracingchange":
        return <NavArticles prev={articlesUrls.conversation} next={articlesUrls.facebookdemocracy} />
      case "facebookdemocracy":
        return <NavArticles prev={articlesUrls.embracingchange} next={articlesUrls.greatleader} />
      case "greatleader":
        return <NavArticles prev={articlesUrls.facebookdemocracy} next={articlesUrls.procrastinator} />
      case "procrastinator":
        return <NavArticles prev={articlesUrls.greatleader} next={articlesUrls.school}/>
      case "school":
        return <NavArticles prev={articlesUrls.procrastinator} next={articlesUrls.stevejobs}/>
      case "stevejobs":
        return <NavArticles prev={articlesUrls.school} next={articlesUrls.water}/>
      case "water":
        return <NavArticles prev={articlesUrls.stevejobs}/>
      default:
        return <></>
    }
  }

  /*
  const renderNavArticles = (params) => {
    switch(params.id){
      case "emotionalintelligence":
        return <NavArticles next={articlesUrls.milennials} />
      default:
        return <Home/>
    }
  }
  */
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

const articlesUrls = {
  conversation: {title: "10 ways to have a better conversation", url: "/talks/conversation"},
  embracingchange: {title: "Embracing Change", url: "/talks/embracingchange"},
  facebookdemocracy: {title: "Facebook’s role in Brexit and the threat to democracy", url: "/talks/facebookdemocracy"},
  greatleader: {title: "How great leaders inspire action", url: "/talks/greatleader"},
  procrastinator: {title: "Inside the mind of a master procrastinator", url: "/talks/procrastinator"},
  school: {title: "¿Do schools kill creativity?", url: "/talks/school"},
  stevejobs: {title: "Steve Jobs Discurso en Stanford", url: "/talks/stevejobs"},
  water: {title: "This is water Discurso de Graduación.", url: "/talks/water"},
}

