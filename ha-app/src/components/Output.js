import { useContext } from "react";
import { AppContext } from "../App";
import { Link } from "react-router-dom";

const OutputRes = () => {
  const { text } = useContext(AppContext);
  const lines = text.split("\n");

  return (
    <div>
      <button>
        <Link to="/read-file">Back</Link>
      </button>
      {lines.map((line, i) => (
        <p key={i}>{line}</p>
      ))}
    </div>
  );
};

export default OutputRes;
