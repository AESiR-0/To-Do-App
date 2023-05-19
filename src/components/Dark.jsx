import {useState} from 'react'

function Dark({childToParent}) {
const [theme, setTheme] = useState('light');
const ehTheme = ()=> {theme==="light" ? setTheme('dark'): setTheme('light')};
const data = ()=> childToParent(theme);
  return (
    <div className='theme-swtich'>
      <button className='theme-switch' onClick={()=>{ehTheme();data();}}>
        <img src="darkmode.png" alt="" />
      </button>
    </div>
  )
}

export default Dark
