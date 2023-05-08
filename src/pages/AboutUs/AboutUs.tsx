import { Col, Container, Row } from 'react-bootstrap';
import { about_us } from '../../../db/db.json';
import './AboutUs.scss';

const AboutUs = () => {
  const { title, desc, image, mission, vision } = about_us;
  return (
    <section className='about_us'>
      <Container className='py-5'>
        <Row className='justify-content-center align-items-center'>
          <Col xs={12} md={6}>
            <figure>
              <img
                src={image}
                alt=''
                width='100%'
                height={600}
                loading='lazy'
              />
            </figure>
          </Col>
          <Col xs={12} md={6}>
            <h2 className='mb-3'>
              <strong> {title}</strong>{' '}
            </h2>
            <p>{desc}</p>
            <p>
              <span>
                <strong>{mission.title} : </strong>
                {mission.desc}
              </span>
            </p>
            <p>
              <span>
                <strong>{vision.title} : </strong>
                {vision.desc}
              </span>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
