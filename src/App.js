import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/Login.jsx";
import Signup from "./components/Signup/Signup";
import Transactions from "./components/Transactions/Transactions";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home} />
          <Route
            exact
            path="/transactions/:customerName"
            component={Transactions}
          />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
