import styles from "./MusicList.module.css";

export default function MusicList() {
  return (
    <>
      <ul className={styles.listMusic}>
        <li className={styles.musicListItem}>
          <div className={styles.information}>
            <span className={styles.title}>Titulo Música1</span>
            <span className={styles.artista}>Artista1</span>
            <span className={styles.time}>02:40</span>
          </div>
        </li>
        <li className={styles.musicListItem}>
          <div className={styles.information}>
            <span className={styles.title}>Titulo Música2</span>
            <span className={styles.artista}>Artista2</span>
            <span className={styles.time}>02:40</span>
          </div>
        </li>
        <li className={styles.musicListItem}>
          <div className={styles.information}>
            <span className={styles.title}>Titulo Música3</span>
            <span className={styles.artista}>Artista3</span>
            <span className={styles.time}>02:40</span>
          </div>
        </li>
      </ul>
    </>
  );
}
