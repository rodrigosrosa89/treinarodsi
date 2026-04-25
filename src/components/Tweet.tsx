import styles from "./Tweet.module.css";

export default function Tweet({ tweet }) {
  return (
    <div className={styles.tweetContainer}>
      <img
        className={styles.avatar}
        src={tweet.user.picture}
        alt="foto do perfil"
      />

      <div className={styles.user}>
        <span className={styles.userName}>{tweet.user.name}</span>
        <span className={styles.userUserName}>{tweet.user.username}</span>
        <span className={styles.date}>{tweet.date}</span>
      </div>

      <div className={styles.tweetText}>{tweet.text}</div>
    </div>
  );
}
