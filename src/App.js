import Blog from './components/Blog'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Blog/>
        </Route>
      </Switch>
    </Router>  
  );
}

export default App;
