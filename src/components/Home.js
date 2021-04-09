import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
//import FeaturedPost from './FeaturedPost';
import HomeBody from './HomeBody';
import Sidebar from './Sidebar';
import Footer from './Footer';
//import post1 from './blog-post.1.md';
//import post2 from './blog-post.2.md';
//import post3 from './blog-post.3.md';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Casos de estudio', url: '#' },
  { title: 'Juegos', url: '#' },
  { title: 'Metricas', url: '#' },
  { title: 'Punto 3', url: '#' },
  { title: 'Punto 4', url: '#' },
  { title: 'Punto 5', url: '#' },
];

const mainFeaturedPost = {
  title: 'IS2 Prototipo',
  description:
    "En este Blog podrás aprender sobre distintas metodologías de Software, estrategias....",
  image: 'https://images.unsplash.com/photo-1562619425-c307bb83bc42?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
  imgText: 'main image description',
  linkText: 'Seguir leyendo…',
};

const featuredPosts = [
  {
    title: 'Implementación de SAP en FLV',
    date: 'Nov 12',
    description:
      'En el año 2011, la Fundación Valle de Lili comenzó un proceso que revoluciono sus procesos de trabajo',
    image: 'https://www.eltiempo.com/files/article_main/uploads/2018/03/14/5aa9c1fbef385.jpeg',
    imageText: 'Image Text',
  },
  {
    title: 'El Dilema de las Redes sociales',
    date: 'Nov 11',
    description:
      '¿Queres saber cuánto nos controlan? Entra acá!',
    image: 'https://media.gq.com.mx/photos/5f5b9e8aef6115112e88c743/16:9/w_1920%2cc_limit/dilema-de-las-redes-sociales.jpg',
    imageText: 'Image Text',
  },
  {
    title: 'Indie Games. ¿Se puede ser Freelancer?',
    date: 'Mar 23',
    description:
      'Un grupo de jovenes..',
    image: 'https://i1.wp.com/elpoderdelasideas.com/wp-content/uploads/indie-game-the-movie2.jpg?w=550&ssl=1',
    imageText: 'Image Text',
  },


];

//const posts = [post1, post2, post3];

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

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4} className={classes.mainGrid}>
            <Grid item xs={8}>
              <HomeBody title="Novedades" posts={featuredPosts} />
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
      <Footer title="IS2 - Primer Semestre 2021" description="" />
    </React.Fragment>
  );
}
