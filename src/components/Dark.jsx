import {useState} from 'react'
import { FaMoon } from 'react-icons/fa';

function Dark({childToParent}) {
const [theme, setTheme] = useState('light');
const ehTheme = ()=> {theme==="light" ? setTheme('dark'): setTheme('light')};
const data = ()=> childToParent(theme);
  return (
    <div className='theme-swtich'>
      <button className='theme-switch mix-blend-color-burn' onClick={()=>{ehTheme();data();}}>
        <img className="mix-blend-color-burn" src="darkmode.png" alt="" />
      </button>
    </div>
  )
}

export default Dark
