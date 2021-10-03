
import{
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from "./pages/home/Home";
import Mywork from './pages/mywork/Mywork';
import AboutMe from './pages/aboutme/AboutMe';
import smoothscrollPolyfill from 'smoothscroll-polyfill';
import smoothscrollAnchorPolyfill from 'smoothscroll-anchor-polyfill';
smoothscrollPolyfill.polyfill();

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/mywork/:title">
          <Mywork/>
        </Route>
        <Route path="/aboutme">
          <AboutMe/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
