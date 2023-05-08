import PagesLinks from './PagesLinks';
import OffCanvas from '../../OffCanvas';
import { Link } from 'react-router-dom';
import { LogoType } from '../../../App';

const Navbar = (props: LogoType) => {
  const { logo } = props;
  return (
    <nav className='navbar'>
      <h1 className='logo'>
        <Link to='/'>
          <figure>
            <img src={logo} alt='Website Logo.' loading='lazy' />
          </figure>
        </Link>
      </h1>
      <PagesLinks />

      <OffCanvas />
    </nav>
  );
};

export default Navbar;
