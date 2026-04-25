import TextInput from "../components/TextInput";
import Tweet from "../components/Tweet";
import { useIndex } from "../hooks/useIndex.page";
import styles from "./Index.module.css";

export default function Index() {
  const { text, onTextChange, maxLength, sendTweet, tweetList } = useIndex();

  return (
    <div>
      <h1 className={styles.pageTitle}>TreinaRodSi Tweet</h1>
      <div className={styles.tweetContainer}>
        <img
          className={styles.avatar}
          src="https://github.com/rodrigosrosa89.png"
          alt="foto do perfil"
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
        <button
          onClick={sendTweet}
          className={styles.postButton}
          disabled={text.length === 0}
        >
          Tweetar
        </button>
      </div>

      <ul className={styles.tweetList}>
        {tweetList.map((tweet) => {
          return (
            <li className={styles.tweetListItem}>
              <Tweet tweet={tweet} children={tweet} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
