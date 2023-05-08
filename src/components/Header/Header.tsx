import Container from 'react-bootstrap/Container';

import './Header.scss';
import Navbar from './helpers/Navbar';

export type LogoType = {
  logo: string;
};

export const data: LogoType = {
  logo: '/Aram-Tech-PNG.png',
};

const Header = () => {
  return (
    <header>
      <Container fluid>
        <Navbar {...data} />
      </Container>
    </header>
  );
};

export default Header;
