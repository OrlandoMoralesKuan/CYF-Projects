import React from "react";

function BestPokemon(props) {
  //const abilities = ["Anticipation", "Adaptability", "Power"];
  return (
    <div>
      <p>My favourite Pokemon is Charizard</p>
      <ul>
        {props.abilities.map((list, index) => (
          <li key={index}>{list}</li>
        ))}
      </ul>
    </div>
  );
}

export default BestPokemon;
