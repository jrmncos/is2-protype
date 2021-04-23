import Home from './components/Home'
import CaseStudy from './components/CaseStudy'
import Simulation from './components/Simulation'
import Tutorial from './components/Tutorial'
import DevelopmentPlan from './components/DevelopmentPlan'
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header'
import Footer from './components/Footer';
import { Route, Switch } from "wouter";
import Container from '@material-ui/core/Container';
function App() {

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
      </Container>
      <Switch>
        <Route component={Home} path="/" />
        <Route component={Simulation} path="/simulation" />
        <Route component={CaseStudy} path="/casestudy/:id" />
        <Route component={Tutorial} path="/tutorial/:id" />
        <Route component={DevelopmentPlan} path="/developmentplan" />
        
      </Switch>
      <Footer title="IS2 - Primer Semestre 2021" description="" />
    </>

  );
}

export default App;
