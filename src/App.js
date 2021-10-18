import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// all the main components
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import SingleService from './components/Services/SingleService';
import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUs';
import './App.css';
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/services/:serviceId' component={SingleService} />
        <Route path='/services' component={Services} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/about' component={About} />
      </Switch>
    </Router>
  );
}

export default App;
