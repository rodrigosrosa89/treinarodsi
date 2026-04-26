import { useParams, useSearchParams } from "react-router-dom";

export default function About() {
  const params = useParams();
  const [searchParams, setParams] = useSearchParams();
  return (
    <>
      <h3>
        About! - {params.id} - {searchParams.get("parametroA")}
      </h3>
    </>
  );
}
