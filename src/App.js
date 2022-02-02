import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./pages/navbar/Navbar";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
