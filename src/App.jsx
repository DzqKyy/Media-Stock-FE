import Header from './components/Header';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Shop from './pages/Shop';
import { Router, Route } from "@solidjs/router";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <div>
      <Router>
        <Route path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgotpassword" component={ForgotPassword} />
      </Router>
    </div>
  );
}

export default App;
