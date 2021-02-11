import React from "react";
import "./style.css";
import { useHistory } from "react-router-dom";

function Home() {
  React.useEffect(() => {
    console.log("Home running");
  });
  const history = useHistory();
  const Logout = () => {
    localStorage.clear();
    history.push("/login");
    const local = localStorage.getItem("isLogged");
    console.log(local);
  };
  return (
    <div className="home">
      <div className="imagesSlider">
        this is home page private page accesible only after login
      </div>

      <button onClick={Logout}>logout</button>
    </div>
  );
}

export default Home;
