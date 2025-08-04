import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import VolunteerForm from './components/VolunteerForm';
import './styles/global.css';
import './styles/components.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/volunteer" component={VolunteerForm} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;