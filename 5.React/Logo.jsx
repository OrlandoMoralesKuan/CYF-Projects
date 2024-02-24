import React from "react";

function Logo(props) {
  // const appName = "Orlando's Pokedex";
  return (
    <header>
      <h1>Welcome to {props.appName}</h1>
      <img
        src="https://pm1.aminoapps.com/6267/89193c56fc57a3647097fbf5b42023ff94e93b6b_hq.jpg"
        alt="Charizard"
      />
    </header>
  );
}

export default Logo;
