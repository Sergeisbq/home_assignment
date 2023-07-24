import './App.css';
import ReadFile from './components/Read_file';
import OutputRes from './components/Output';
import { Routes, Route, Navigate } from 'react-router-dom';
import { createContext, useState } from 'react';

export const AppContext = createContext(null);

function App() {

  const [text, setText] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <AppContext.Provider value={{text, setText}}>
          <Routes>
            <Route path="/" element={<Navigate to="/read-file" />}/>
            <Route path='/read-file' element={<ReadFile />}/>
            <Route path='/output' element={<OutputRes />}/>
          </Routes>
        </AppContext.Provider>
      </header>
    </div>
  );
}

export default App;

