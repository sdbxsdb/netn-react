
import Navbar from './Navbar';
import Home from './Home';
// import Create from './Create';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import BlogDetails from './BlogDetails';
import PageNotFound from './PageNotFound';
import Contact from './Contact';
import Portfolio from './Portfolio';
import About from './About';

function App() {

  return (

    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            {/* <Route path="/blogs/:id">
              <BlogDetails />
            </Route> */}
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
