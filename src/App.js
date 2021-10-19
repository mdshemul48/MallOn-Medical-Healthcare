import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// content provider
import { ProductContextProvider } from './Contexts/ProductContext';
import { AuthProvider } from './Contexts/AuthContext';

// all the main components
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import SingleService from './components/Products/SingleProduct';
import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUs';
import NotFound from './components/NotFound/NotFound';

// login page
import Auth from './components/Auth/Auth';

// header and footer
import NavBar from './components/Shared/NavBar/NavBar';
import Footer from './components/Shared/Footer/Footer';

// protected route
import PrivateRoute from './Routes/PrivateRoute';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
function App() {
  return (
    <AuthProvider>
      <ProductContextProvider>
        <Router>
          <NavBar />
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>

            <PrivateRoute path='/products/:productId'>
              <SingleService />
            </PrivateRoute>

            <PrivateRoute path='/products'>
              <Products />
            </PrivateRoute>

            <PrivateRoute path='/contact-us'>
              <ContactUs />
            </PrivateRoute>

            <Route path='/about'>
              <About />
            </Route>

            <Route path='/auth'>
              <Auth />
            </Route>

            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </ProductContextProvider>
    </AuthProvider>
  );
}

export default App;
