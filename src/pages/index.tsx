import { useEffect, useState } from "react";
import Contador from "../components/Contador";
import TextInput from "../components/TextInput";
import Tweet from "../components/Tweet";
import { useIndex } from "../hooks/useIndex.page";
import styles from "./Index.module.css";
import About from "../components/About";
import Paginanicial from "../components/PaginaInicial";
import { Link, Route, Routes } from "react-router-dom";
import Produtos, { Produto } from "../components/Produto";

export default function Index() {
  const { text, onTextChange, maxLength, sendTweet, tweetList } = useIndex();
  const [contador, setContador] = useState(0);
  const [contador2, setContador2] = useState(0);

  useEffect(() => {
    console.log(
      "Componente criado, vai chamar apenas na criação do componente!",
    );
  }, []);

  useEffect(() => {
    console.log("contador 2 atualizado!");
  }, [contador2]);

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
            <li className={styles.tweetListItem} key={1}>
              <Tweet tweet={tweet} />
            </li>
          );
        })}
      </ul>
      <Contador numero={contador} onClick={() => setContador(contador + 1)} />
      <br></br>
      <br></br>
      <Contador
        numero={contador2}
        onClick={() => setContador2(contador2 + 2)}
      />

      <div className={styles.routerContainer}>
        <Routes>
          <Route path="/inicio" element={<Paginanicial />} />
          <Route path="/about/:id" element={<About />} />
          <Route path="/produtos/*" element={<Produtos />}>
            <Route path=":id" element={<Produto />} />
          </Route>
        </Routes>
        <Link to="/inicio">Home</Link>
        <br />
        <Link to="/produtos">Produuutos!</Link>
        <br />
        <Link to="/about/1?parametroA=Rodrigo">About 1</Link>
        <br />
        <Link to="/about/2?parametroA=Achooou!">About 2</Link>
      </div>
    </div>
  );
}
