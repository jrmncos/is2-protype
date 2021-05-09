import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Home from "./Home"
import Grid from '@material-ui/core/Grid';
import Sidebar from './Sidebar';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmotionalIntelligence from "../pappers/EmotionalIntelligence";
import MilennialsProjectManagers from "../pappers/MilennialsProjectManagers";
import BusinessIntelligence from "../pappers/BusinessIntelligence";
import CollectiveLearning from "../pappers/CollectiveLearning";
import MultigenerationalProject from "../pappers/MultigenerationalProject"
import Sustainable from "../pappers/Sustainable";
import NavArticles from "./NavArticles";
import NeuroLinguistic from "../pappers/NeuroLinguistic";
import BusinessAgile from "../pappers/BusinessAgile"
import IoT from "../pappers/IoT";

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

export default function Papper({params}) {
  const classes = useStyles();
  const caseStudy = {id: params.id}

  const renderSwitch = (params) => {
    console.log(params)
    console.log(params.id)
    switch(params.id){
      case "emotionalintelligence":
        return <EmotionalIntelligence/>
      case "milennials":
        return <MilennialsProjectManagers/>
      case "businessintelligence":
        return <BusinessIntelligence/>
      case "collectivelearning":
        return <CollectiveLearning/>
      case "multigenerational":
        return <MultigenerationalProject/>
      case "sustainable":
        return <Sustainable/>
      case "neurolinguistic":
        return <NeuroLinguistic/>
      case "businessagile":
        return <BusinessAgile/>
      case "iot":
        return <IoT/>        
      default:
        return <Home/>
    }
  }

  const renderNavArticles = (params) => {
    switch(params.id){
      case "emotionalintelligence":
        return <NavArticles next={articlesUrls.milennials} />
      case "milennials":
        return <NavArticles prev={articlesUrls.emotionalintelligence} next={articlesUrls.businessintelligence} />
      case "businessintelligence":
        return <NavArticles prev={articlesUrls.milennials} next={articlesUrls.collectivelearning} />
      case "collectivelearning":
        return <NavArticles prev={articlesUrls.businessintelligence} next={articlesUrls.multigenerational} />
      case "multigenerational":
        return <NavArticles prev={articlesUrls.collectivelearning} next={articlesUrls.sustainable}/>
      case "sustainable":
        return <NavArticles prev={articlesUrls.multigenerational} next={articlesUrls.neurolinguistic}/>
      case "neurolinguistic":
        return <NavArticles prev={articlesUrls.sustainable} next={articlesUrls.iot}/>
      case "businessagile":
        return <NavArticles prev={articlesUrls.neurolinguistic} next={articlesUrls.iot}/>
      case "iot":
        return <NavArticles prev={articlesUrls.businessagile}/>
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

const articlesUrls = {
  emotionalintelligence: {title: "Emotional Intelligence", url: "/papper/emotionalintelligence"},
  milennials: {title: "Milennial Project Managers", url: "/papper/milennials"},
  businessintelligence: {title: "Business Intelligence", url: "/papper/businessintelligence"},
  collectivelearning: {title: "Collective Learning in Project Teams", url:"/papper/collectivelearning"},
  multigenerational: {title: "Leading a Multigenerational Project Team ", url:"/papper/multigenerational"},
  sustainable: {title: "Sustainable Wearables", url: "/papper/sustainable"},
  neurolinguistic: {title: "Neurolinguistic Programming", url: "/papper/neurolinguistic"},
  businessagile: {title: "Trends in Agile: Business Agility", url:"/papper/businessagile"},
  iot: {title: "Internet of Things and Artificial Intelligence", url: "/papper/iot"}
}