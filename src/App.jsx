import './App.css'
import Dark from './components/Dark';
import Navbar from './components/navbar';
import Addinput from './components/Addinput';
import {useState, useEffect} from 'react';

function App() {
  
  const [data, setData] = useState('');
  const childToParent = (childdata) => {
    setData(childdata);
  }
  
  useEffect (()=> {document.body.className = data}, [data]); 
  
  return (
    <div>
    <Navbar title="Prat ToDo" />
    <Dark childToParent={childToParent} />
    <Addinput />
    </div>
  );
}

export default App;
