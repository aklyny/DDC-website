import React from 'react';
import './App.css';
import {Switch,BrowserRouter as Router,Route} from 'react-router-dom';
import Navbar from './Components/Navbar'
import Photo from './Components/Photo';
import Video from './Components/Video';
import Audio from './Components/Audio';
import Footer from './Components/Footer';
import Home from './Home';
function App() {
  return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/photography" exact>
              <h1 className="title">DAY DREAMERS CREATIONS</h1>
              <Photo />
            </Route>
            <Route path="/audioProduction" exact>
              <h1 className="title">DAY DREAMERS CREATIONS</h1>
              <Audio />
            </Route>
            <Route path="/videoProduction" exact>
              <h1 className="title">DAY DREAMERS CREATIONS</h1>
              <Video />
            </Route>
            <Route path="/" exact component={Home} />
          </Switch>
          <Footer />
        </Router>
      </>
  );
}

export default App;
