import "./App.css";
import Home from "./component/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Login from "./component/Login";
import PrivateRoute from "./component/PrivateRoute";
import LoginRoute from "./component/LoginRoute";

function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <PrivateRoute exact path="/home" component={Home} />
      <LoginRoute exact path="/login" component={Login} />
    </Switch>
  );
}

export default App;
