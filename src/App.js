import React, { useState } from "react";
import "./App.css";
import { emojisObject } from "./emoji";

const emojiArray = Object.keys(emojisObject);

function App() {
  const [emojiMeaning, setemojiMeaning] = useState("Type or Click an Emoji");

  function inputHandler(event) {
    let userInput = event.target.value;

    let meaning = emojisObject[userInput];

    function wrongInput() {
      meaning = "This emoji isn't present in the top 25 used emojis!";
      setemojiMeaning(meaning);
    }

    meaning === undefined ? wrongInput() : setemojiMeaning(meaning);
  }

  function emojiCLickHandler(emoji) {
    let meaning = emojisObject[emoji];
    setemojiMeaning(meaning);
  }

  return (
    <div className="App">
      <div>
        <h1>🔍 Emoji Hunt</h1>
        <h5>
          Let's Admit it, we've all been there. There are situations where we
          don't understand the context of the emoji our friend has sent. <br />
          Type any emoji to know what they stand for, or select any of the
          emojis present below to knpw their meaning!
        </h5>
      </div>
      <input
        type="text"
        onChange={inputHandler}
        placeholder="Type an emoji to know it's meaning 😁"
      />
      <div className="emoji-meaning">
        <h2>{emojiMeaning}</h2>
      </div>
      <div>
        <h3>Here are the top 25 emojis used across the world</h3>
        {emojiArray.map((item) => (
          <span
            onClick={() => emojiCLickHandler(item)}
            style={{ fontSize: "2rem", padding: "0.2rem" }}
            key={item}
          >
            {item}
          </span>
        ))}
        <h6>
          {" "}
          Check out the source code for the project here!
          <a href="https://github.com/sushilburagute/emoji">Github</a>
        </h6>
      </div>
    </div>
  );
}

export default App;
