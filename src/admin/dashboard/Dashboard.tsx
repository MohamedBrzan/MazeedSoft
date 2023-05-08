import { Col, Row } from 'react-bootstrap';
import { useEffect } from 'react';
import HeaderBoard from './HeaderBoard/HeaderBoard';
import './Dashboard.scss';
import HomeBoard from './HomeBoard/HomeBoard';
import AboutUsBoard from './AboutUsBoard/AboutUsBoard';
import CallUsBoard from './CallUsBoard/CallUsBoard';
import FeaturesBoard from './FeaturesBoard/FeaturesBoard';
import FooterBoard from './FooterBoard/FooterBoard';
import TestimonialsBoard from './TestimonialsBoard/TestimonialsBoard';
import DashboardLinks from './DashboardLinks';
import DashboardOffcanvas from './DashboardOffcanvas';
const Dashboard = () => {
  useEffect(() => {
    const allSections = Array.from(
      document.querySelectorAll('.dashboard .dashboard_section')
    );

    allSections.forEach((ele) => ele.classList.remove('active'));

    allSections[0].classList.add('active');
  }, []);
  return (
    <section className='dashboard'>
      <Row>
        <Col md={2} className='links_col'>
          <div className='big_size'>
            <h3>
              Admin <br /> Dashboard
            </h3>
            <DashboardLinks />
          </div>
          <div className='small_size'>
            <DashboardOffcanvas />
          </div>
        </Col>{' '}
        <Col md={10} className='content_col'>
          <HeaderBoard />
          <HomeBoard />
          <AboutUsBoard />
          <CallUsBoard />
          <FeaturesBoard />
          <FooterBoard />
          <TestimonialsBoard />
        </Col>
      </Row>
    </section>
  );
};

export default Dashboard;
