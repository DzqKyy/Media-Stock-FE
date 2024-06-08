import { Router, Route } from "@solidjs/router";

import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Services from './pages/Services';
import ForgotPassword from './pages/ForgotPassword';
import Login from './pages/Login';
import Register from './pages/Register';
import Shop from './pages/Shop';
import DetailAsset from './components/shop/DetailAsset';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <div>
      <Router>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
        <Route path="/shop" component={Shop} />
        <Route path="/detailasset/:imgSrc" component={DetailAsset} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgotpassword" component={ForgotPassword} />
      </Router>
    </div>
  );
}

export default App;
