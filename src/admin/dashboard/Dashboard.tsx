import { Col, Row } from 'react-bootstrap';
import { useEffect } from 'react';
import HeaderBoard from './HeaderBoard/HeaderBoard';
import './Dashboard.scss';
import HomeBoard from './HomeBoard/HomeBoard';
import AboutUsBoard from './AboutUsBoard/AboutUsBoard';

const Dashboard = () => {
  useEffect(() => {
    localStorage.setItem('card', JSON.stringify({}));
    localStorage.setItem('header_link', JSON.stringify({}));
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    document
      .querySelectorAll('.dashboard .links li.link_item')
      .forEach((ele) => ele.classList.remove('active'));

    const li = e.target as HTMLLIElement;

    li.classList.add('active');

    document
      .querySelectorAll('.dashboard .dashboard_section')
      .forEach((ele) => {
        ele.classList.remove('active');

        if (ele.getAttribute('id') === li.getAttribute('data-board')) {
          ele.classList.add('active');
          li.classList.add('active');
        }
      });
  };
  return (
    <section className='dashboard'>
      <Row>
        <Col md={2} className='links_col'>
          <h3>
            Admin <br /> Dashboard
          </h3>
          <ul className='list-unstyled links'>
            <li
              className='link_item active'
              data-board='header'
              onClick={handleClick}
            >
              Header
            </li>
            <li className='link_item' data-board='home' onClick={handleClick}>
              Home
            </li>
            <li
              className='link_item'
              data-board='features'
              onClick={handleClick}
            >
              Features
            </li>
            <li
              className='link_item'
              data-board='about_us'
              onClick={handleClick}
            >
              About Us
            </li>
            <li
              className='link_item'
              data-board='beta_version'
              onClick={handleClick}
            >
              Beta version
            </li>
            <li
              className='link_item'
              data-board='call_us'
              onClick={handleClick}
            >
              Call Us
            </li>
            <li className='link_item' data-board='links' onClick={handleClick}>
              Links
            </li>
            <li className='link_item' data-board='footer' onClick={handleClick}>
              Footer
            </li>
          </ul>
        </Col>{' '}
        <Col md={10} className='content_col'>
          <HeaderBoard />
          <HomeBoard />
          <AboutUsBoard />
        </Col>
      </Row>
    </section>
  );
};

export default Dashboard;
