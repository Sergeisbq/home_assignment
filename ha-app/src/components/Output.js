import { useContext } from 'react';
import { AppContext } from '../App';
import { Link } from 'react-router-dom';

const OutputRes = () => {

  const { text } = useContext(AppContext);

  return (
    <div>
      <button><Link to="/read-file">Back</Link></button>
      <p>{text}</p>
    </div>
  );
};

export default OutputRes;
