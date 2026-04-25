import { useEffect } from "react";

type ContadorProps = {
  numero: number;
  onClick: () => void;
};

export default function Contador({ numero, ...props }: ContadorProps) {
  // Para entender um pouco sobre ciclo de vida de um componente
  useEffect(() => {
    console.log("Componente Contador criado!");
    return () => {
      console.log("Componente foi removido");
    };
  });

  return (
    <>
      <span>{numero}</span>
      <button style={{ marginLeft: "10px" }} {...props}>
        Somar
      </button>
    </>
  );
}
