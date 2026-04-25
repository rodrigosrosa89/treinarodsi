import { useState } from "react";
import TextInput from "../components/TextInput";
import styles from "./Index.module.css";

export default function Index() {
  const [text, setText] = useState("");
  const [tweetList, setTweetList] = useState([]);
  const maxLength = 125;

  function onTextChange(event) {
    const text = event.target.value;
    console.log("VALOR TEXT: ", text);
    if (text.length <= maxLength) {
      setText(text);
    }
  }

  function isTextNaoNuloEVazio(text: string) {
    return text != null && text != "";
  }

  function sendTweet(event) {
    console.log("VALOR TEXTsendTweet: ", isTextNaoNuloEVazio(text));
    if (isTextNaoNuloEVazio(text)) {
      setTweetList([...tweetList, text]);
    }
  }

  return (
    <div>
      <h1 className={styles.pageTitle}>TreinaRodSi Tweet</h1>
      <div className={styles.tweetContainer}>
        <img
          className={styles.avatar}
          src="https://github.com/rodrigosrosa89.png"
          alt=""
        />
        <TextInput
          placeholder={"O que está ocorrendo?"}
          rows={3}
          maxLength={maxLength}
          value={text}
          onChange={onTextChange}
        />
      </div>
      <div className={styles.buttonContainer}>
        <div>
          {text.length} / {maxLength}
        </div>
        <button onClick={sendTweet} className={styles.postButton}>
          Tweetar
        </button>
      </div>

      <ul>
        {tweetList.map((tweet) => {
          return <li>{tweet}</li>;
        })}
      </ul>
    </div>
  );
}
