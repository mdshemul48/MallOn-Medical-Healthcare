import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// content provider
import { ProductContextProvider } from './Contexts/ProductContext';
// all the main components
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import SingleService from './components/Services/SingleService';
import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUs';

import NavBar from './components/Shared/NavBar/NavBar';
import Footer from './components/Shared/Footer/Footer';
// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {
  return (
    <ProductContextProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/services/:serviceId' component={SingleService} />
          <Route path='/services' component={Services} />
          <Route path='/contact-us' component={ContactUs} />
          <Route path='/about' component={About} />
        </Switch>
        <Footer />
      </Router>
    </ProductContextProvider>
  );
}

export default App;
