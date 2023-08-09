// export default App;
import React from "react";
import Joke from "./joke";
import JokesData from "./jokesData";

export default function App(){

    const jokeElements = JokesData.map(joke => {
      return <Joke setup={joke.setup} punchline ={joke.punchline}></Joke>
    })
    return(
      <div>
    {jokeElements}
    </div>
  )
}