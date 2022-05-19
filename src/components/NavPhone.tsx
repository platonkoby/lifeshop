import '../styles/nav.css'
import { BsFillCartCheckFill, BsFillCartDashFill } from 'react-icons/bs'
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md'
import { MdOutlineMenu, MdClose } from 'react-icons/md'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { NavProps } from '../models/nav.models';

const BUTTON_SIZE = 30;

function Nav({ page } : NavProps) {

  const [toggleMenu, setToggleMenu] = useState(false)

  const toggleMenuAction = () => 
    setToggleMenu(toggleMenu => !toggleMenu)

  return (
    <div className='nav-phone'>
      <div className="nav-left">
            <MdOutlineMenu onClick={toggleMenuAction} size={BUTTON_SIZE} />
            <div className='current-page-name'>{page}</div>
      </div>
            <div className="icons">
              <Link to={'/cart'}>
                <BsFillCartCheckFill size={BUTTON_SIZE} />
              </Link>
              <MdOutlineLightMode size={BUTTON_SIZE} />
            </div>
        {toggleMenu && 
        <nav>
            <MdClose onClick={toggleMenuAction} size={BUTTON_SIZE} className="close-menu-button" />
            <ul>
                <li>
                  <Link className='link' to='/'>home</Link>
                </li>
                <li>
                  <Link className='link' to='/shop'>shop</Link>
                </li>
                <li>
                  <Link className='link' to='/goals'>goals</Link>
                </li>
                <li>
                  <Link className='link' to='/profile'>profile</Link>
                </li>
            </ul>
        </nav>}
    </div>
  )
}

export default Nav