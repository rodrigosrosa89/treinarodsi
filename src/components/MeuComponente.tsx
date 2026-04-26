export default function MeuComponente(props) {
  return <h1>{props.children}</h1>;
}

export function Aplicativo() {
  return <MeuComponente>Site 2</MeuComponente>;
}
