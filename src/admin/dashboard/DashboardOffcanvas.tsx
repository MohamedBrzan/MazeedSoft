import { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import HamburgerMenu from '/menu.svg';
import DashboardLinks from './DashboardLinks';

const DashboardOffcanvas = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      {' '}
      <div className='hamburger_menu_icon' onClick={handleShow}>
        <img src={HamburgerMenu} alt='Hamburger Menu.' width={50} />
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body onClick={handleClose}>
          <DashboardLinks />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default DashboardOffcanvas;
