import { useEffect } from "react";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

export default function Produtos() {
  return (
    <div>
      <h1>Produtos!! </h1>
      <ul>
        <li>
          <Link to="1">Produto número 1</Link>
        </li>
        <li>
          <Link to="2">Produto número 2</Link>
        </li>
        <Outlet />
      </ul>
    </div>
  );
}

export function Produto() {
  const params = useParams();
  return (
    <div>
      <h3>Produto - {params.id}</h3>
      <Carregamento />
    </div>
  );
}

export function Carregamento() {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname.includes("valorX")) {
      navigate("/produtos");
    }
  });
  return (
    <div>
      <h3>Produto - {params.id}</h3>
    </div>
  );
}
