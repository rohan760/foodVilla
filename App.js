import React from "react";
import ReactDOM from "react-dom/client";
/**
      Header
      -logo
      -nav items
      -cart
      Body
      -searchbar
      -restrauntList
        -RestruntCard
          -image
          -name
          -rating
          -cusines
      Footer
      -links
      copyright
  
  */
const Title = () => (
  <a href="/">
  <img
    className="logo"
    alt="logo"
    src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj"
  ></img>
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestrauntCard =()=>{
  return(
    <div className="card">
      <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/jmfk6nhytgaifkox7rcf"/>
      <h2>Domino's</h2>
      <h3>Pizzas, Italian</h3>
      <h4>4.3 stars</h4>
    </div>
  )
}

const Body=()=>{
  return(
    <div className="restaurent-list">
      <RestrauntCard/>
    </div>
  )
}

const Footer=()=>{
  return(
    <h4>footer</h4>
  )
}

const AppLayout = () => {
  return (
    <>
    <Header/>
    <Body/>
    <Footer/>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
