import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const cat = localStorage.getItem("isLogged");
  console.log(cat);
  return (
    <Route
      {...rest}
      render={(props) =>
        cat === "true" ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
