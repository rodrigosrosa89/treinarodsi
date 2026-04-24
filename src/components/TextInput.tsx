import { useState } from "react";
import styles from "./TextInput.module.css";

export default function TextInput({
  placeholder = "O que é isso?",
  maxLength = 0,
  ...props
}) {
  const [text, setText] = useState("");
  const [tweetList, setTweetList] = useState([]);

  function onTextChange(event) {
    const text = event.target.value;
    if (text.length <= maxLength) {
      setText(text);
    }
  }

  function sendTweet(event) {
    setTweetList([...tweetList, text]);
    event.preventDefault();
    console.log("valor texto: ", text);
  }

  return (
    <form onSubmit={sendTweet}>
      <div>
        <textarea
          className={styles.input}
          placeholder={placeholder}
          maxLength={maxLength}
          value={text}
          onChange={onTextChange}
          {...props}
        />
        <p>
          {text.length} / {maxLength}
        </p>
        <button onClick={sendTweet}> Enviar </button>
        {tweetList.map((tweet) => {
          return <p>{tweet}</p>;
        })}
      </div>
    </form>
  );
}
