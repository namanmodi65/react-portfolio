import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa";
import './NavbarStyle.css'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [color, setColor] = useState(false)

  const changeColor = ()=>{
    if(window.scrollY >= 100){
      setColor(true)
    }
    else{
      setColor(false)
    }
  }

  const handleClick=()=>{
    setClick(!click)
  }

  window.addEventListener("scroll",changeColor)

  return (
    <div className={color?"header header-bg":"header"}>
        <Link to='/'><h1>Naman</h1></Link>
        <ul className={!click?'nav-menu':'nav-menu active'}>
            <li><Link to='/'>Home </Link></li>
            <li><Link to='/about'>About </Link></li>
            <li><Link to='/project'>Projects </Link></li>
            <li><Link to='/contact'>Contact </Link></li>
        </ul>
        <div className='hemburger' onClick={handleClick}>
          {!click?<FaBars size={20}/>:<FaTimes size={20}/>}
        </div>
    </div>
  )
}

export default Navbar