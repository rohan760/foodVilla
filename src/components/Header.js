import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Title = () => (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src={LOGO_URL}
      ></img>
    </a>
  );

  const Header = () => {

    const[btnNameReact,setBtnNameReact] = useState("Login")
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
            <li>Cart</li>
            <button className="login" onClick={()=>{
              btnNameReact==="login"?
              setBtnNameReact("Logout"):
              setBtnNameReact("Login")
              }
              }>{btnNameReact}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;