import Container from 'react-bootstrap/Container';

import './Header.scss';
import Navbar from './helpers/Navbar';
import { LogoType } from '../../App';

const Header = (props: LogoType) => {
  return (
    <header>
      <Container fluid>
        <Navbar {...props} />
      </Container>
    </header>
  );
};

export default Header;
