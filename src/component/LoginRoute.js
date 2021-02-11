import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

const LoginRoute = ({ component: Component, ...rest }) => {
  const cat = localStorage.getItem("isLogged");
  console.log(cat);
  return (
    <Route
      {...rest}
      render={(props) =>
        cat !== null ? <Redirect to="/home" /> : <Component {...props} />
      }
    />
  );
};

export default LoginRoute;
