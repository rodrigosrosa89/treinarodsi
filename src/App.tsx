import { useRoutes } from "react-router-dom";
import styles from "./App.module.css";
import Index from "./pages";
import PaginaInicial from "./components/PaginaInicial";
import About from "./components/About";
import Produtos, { Produto } from "./components/Produto";

function App() {
  const rotasDoProjeto = useRoutes([
    {
      path: "",
      element: <Index />,
    },
    {
      path: "/inicio",
      element: <PaginaInicial />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/produtos",
      element: <Produtos />,
      children: [
        {
          path: ":id",
          element: <Produto />,
        },
      ],
    },
  ]);

  return (
    <div className={styles.appContainer}>
      <Index />
    </div>
  );
}

export default App;
