import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import {Home, Product, Navbar, Footer, NotFound} from "./pages"

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/product/:id" exact component={Product} />

            <Redirect exact from="/" to="/home" />
            <Route component={NotFound} />
          </Switch>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
