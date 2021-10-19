import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// content provider
import { ProductContextProvider } from './Contexts/ProductContext';
// all the main components
import Home from './components/Home/Home';
import Services from './components/Products/Products';
import SingleService from './components/Products/SingleProduct';
import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUs';
import NotFound from './components/NotFound/NotFound';

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
          <Route path='/products/:serviceId' component={SingleService} />
          <Route path='/products' component={Services} />
          <Route path='/contact-us' component={ContactUs} />
          <Route path='/about' component={About} />
          <Route path='*' component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </ProductContextProvider>
  );
}

export default App;
