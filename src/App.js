import Home from './components/Home'
import CaseStudy from './components/CaseStudy'
import Simulation from './components/Simulation'

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

      </Switch>
      <Footer title="IS2 - Primer Semestre 2021" description="" />
    </>

  );
}

export default App;
