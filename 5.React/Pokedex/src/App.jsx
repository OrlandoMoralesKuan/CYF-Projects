import React from "react";
import Logo from "../../Logo";
import BestPokemon from "../../BestPokemon";
import CaughtPokemon from "../../CaughtPokemon";

function App() {
  return (
    <div>
      <Logo appName="Orlando's Pokedex" />
      <BestPokemon abilities={["Anticipation", "Adaptability", "Power"]} />
      <CaughtPokemon date={new Date().toLocaleDateString()} />
    </div>
  );
}

// function Logo() {
//   const appName = "Orlando's Pokedex";
//   return (
//     <header>
//       <h1>Welcome to {appName}</h1>
//       <img
//         src="https://pm1.aminoapps.com/6267/89193c56fc57a3647097fbf5b42023ff94e93b6b_hq.jpg"
//         alt="Charizard"
//       />
//     </header>
//   );
// }

// function BestPokemon() {
//   const abilities = ["Anticipation", "Adaptability", "Run-Away"];
//   // const mappedAbilities = abilities.map((item) => item);
//   return (
//     <div>
//       <p>My favourite Pokemon is Charizard</p>
//       <ul>
//         {abilities.map((list, index) => (
//           <li key={index}>{list}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function CaughtPokemon() {
//   const date = new Date().toLocaleDateString();
//   return <p>Caught 0 pokemon on {date}</p>;
// }

export default App;
