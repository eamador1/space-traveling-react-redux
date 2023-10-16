import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

function NavBar() {
  return (
    <nav>
      <div className="parentcontainer300">
        <div className="container300">
          <img className="logo300" src={logo} alt="Space Traveler" />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
