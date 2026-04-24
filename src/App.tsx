import TextInput from "./components/TextInput";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.appContainer}>
      <TextInput placeholder={"O que está ocorrendo?"} maxLength={125} />
    </div>
  );
}

export default App;
