import './Header.css';

import { Link } from 'react-router-dom';
import { CurrentDate } from '../date/CurrentDate';
import Logo from '../../assets/LOGO.svg';

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <CurrentDate />
    </header>
  )
}