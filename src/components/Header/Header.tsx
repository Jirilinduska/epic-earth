import './Header.scss'

import { GiEarthAfricaEurope } from "react-icons/gi"

import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      
        <div className="logo">
          <NavLink to="/">Epic Earth <GiEarthAfricaEurope /> </NavLink>
        </div>

    </header>
  )
}

export default Header