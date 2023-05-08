import { useState } from 'react';
import HamburgerMenu from '/menu.svg';
import Offcanvas from 'react-bootstrap/Offcanvas';
import PagesLinks from './Header/helpers/PagesLinks';

function OffCanvas() {
  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='hamburger_menu_icon' onClick={handleShow}>
        <img src={HamburgerMenu} alt='Hamburger Menu.' width={50} />
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body onClick={handleClose}>
          <PagesLinks />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvas;
