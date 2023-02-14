
import React, { useState } from "react";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

function App ()  {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  const choices = ["pierre", "papier", "ciseaux"];
  
  serviceWorkerRegistration.register();

  const handleClick = (choice: string) => {
    const randomNum = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomNum];

    setUserChoice(choice);
    setComputerChoice(computerChoice);

    if (choice === computerChoice) {
      setResult("Egalité !");
    } else if (
      (choice === "pierre" && computerChoice === "ciseaux") ||
      (choice === "papier" && computerChoice === "pierre") ||
      (choice === "ciseaux" && computerChoice === "papier") 
    ) {
      setResult("Vous avez gagné !");
    } else {
      setResult("Vous avez perdu !");
    }
  };

  return (
    <div>
      <h1>Pierre-Papier-Ciseaux</h1>
      <div>
        <button onClick={() => handleClick("pierre")}>Pierre</button>
        <button onClick={() => handleClick("papier")}>Papier</button>
        <button onClick={() => handleClick("ciseaux")}>Ciseaux</button>
      </div>
      <h2>Votre choix: {userChoice}</h2>
      <h2>Choix de l'ordinateur: {computerChoice}</h2>
      <h1>{result}</h1>
    </div>
  );
};

export default App;