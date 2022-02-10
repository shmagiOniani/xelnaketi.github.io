import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./pages/navbar/Navbar";
import Footer from "./pages/footer/Footer";
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
          </Switch>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
