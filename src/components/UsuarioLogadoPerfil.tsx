import { createContext, useContext } from "react";

type UserContextType = {
  nome: string;
  detalhes: string;
};

const UserContext = createContext<UserContextType>({
  nome: "",
  detalhes: "",
});

export default function UsuarioLogadoPerfil(props) {
  const { nome } = useContext(UserContext);
  return (
    <>
      <h1>{nome}</h1>
      <UsuarioLogadoDetalhes detalhes={props.detalhes} />
    </>
  );
}

function UsuarioLogadoDetalhes(props) {
  const { detalhes } = useContext(UserContext);

  return <p>{detalhes}</p>;
}

export function AppUsuarioLogado() {
  const user = {
    nome: "Paulo",
    detalhes: "Programador FullStack",
  };

  return (
    <UserContext.Provider value={{ nome: user.nome, detalhes: user.detalhes }}>
      <UsuarioLogadoPerfil />
    </UserContext.Provider>
  );
}
