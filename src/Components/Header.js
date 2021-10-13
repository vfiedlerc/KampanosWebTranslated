import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { ReactComponent as KampanosBrand} from '../Assets/KampanosBrand.svg';
import { ReactComponent as WorkWithUs} from '../Assets/WorkWithUs.svg';
import { ReactComponent as OurServices} from '../Assets/OurServices.svg';
import { ReactComponent as MenuBurguer} from '../Assets/MenuBurguer.svg';









const Header = () => {
  return (

 
    <header >


      <nav className="NavBar">


        <Link to="/" aria-label="Kampanos - Home">
          <KampanosBrand className="brand"/>
        </Link>


        <Link to="/ourServices">
          <OurServices />
        </Link>

        <Link to="/Work">
          <WorkWithUs />
        </Link>

        <Link to="/Menu">
          <MenuBurguer />
        </Link>

      </nav>


    </header>
  )
}

export default Header
