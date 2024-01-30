import './Header.css';

import { Link } from 'react-router-dom';
import { CurrentDate } from '../date/CurrentDate';

export const Header = () => {
  return (
    <div>
      <Link to="/">
        <img src="" alt="" />
      </Link>
      <CurrentDate />
    </div>
  )
}