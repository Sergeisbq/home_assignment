import { useContext } from 'react';
import { AppContext } from '../App';
import { Link } from 'react-router-dom';

const ReadFile = () => {

  const { setText } = useContext(AppContext);

  const getFile = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const fileName = file.name;
    const reader = new FileReader();
    const fileExtension = fileName.substring(fileName.lastIndexOf('.') + 1);

    const transformText = (text) => {
        let modText = '';
        let isSLComment = false;
        let isMLComment = false;
      
        for (let i = 0; i < text.length; i++) {
          const currChar = text.charAt(i);
      
          if (!isSLComment && !isMLComment && currChar === '/' && text.charAt(i + 1) === '/') {
            isSLComment = true;
          } 
          else if (!isSLComment && !isMLComment && currChar === '/' && text.charAt(i + 1) === '*') {
            isMLComment = true;
          } 
          else if (isSLComment && currChar === '\n') {
            isSLComment = false;
          } 
          else if (isMLComment && currChar === '*' && text.charAt(i + 1) === '/') {
            i++;
            isMLComment = false;
          }
          
          if (!isSLComment && !isMLComment) {
            if (currChar !== '*') {
                modText += currChar;
            }
          }
        }
      
        return modText;
      }

    if (fileExtension === 'txt') {
        reader.onload = async (e) => {
          const text = e.target.result;
          const outputText = transformText(text);
          setText(outputText);
        };
        reader.readAsText(file);
    } 
    else {
        alert('Error. Please, choose .txt file.');
    }
  };

  return (
    <div>
      <input type="file" onChange={(e) => getFile(e)} />
      <button><Link to="/output">Show result</Link></button>
    </div>
  );
};

export default ReadFile;
