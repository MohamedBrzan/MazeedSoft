import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

import './Testimonials.scss';
import Rating from '../Rating/Rating';
import { Row } from 'react-bootstrap';
import TestimonialsType from '../../types/TestimonialsType';

const Testimonials = (props: TestimonialsType[]) => {
  return (
    <div className='testimonials'>
      <Container>
        <div className='title'>
          <h3>Testimonials</h3>
          <div className='line'></div>
        </div>

        <Stack direction='horizontal' gap={1}>
          {Object.values(props).map(({ image, name, rate, desc }, index) => (
            <Row key={index} className='content_col'>
              <Col>
                <figure>
                  <img src={image} alt={name} title={name} />
                </figure>
              </Col>
              <Col>
                <h5>{name}</h5>
                <Rating rate={rate} />
              </Col>
              <p className='desc'>{desc}</p>
            </Row>
          ))}
        </Stack>
      </Container>
    </div>
  );
};

export default Testimonials;
