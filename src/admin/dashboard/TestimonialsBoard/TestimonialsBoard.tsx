import Form from 'react-bootstrap/Form';
import { testimonials } from '../../../../db/db.json';
import { Card, Col, Row } from 'react-bootstrap';
import ModalProps from '../../../types/ModalProps';
import { useState } from 'react';
import TestimonialsModalForm from './TestimonialsModalForm';
import Testimonials from '../../../interfaces/Testimonials';
import Rating from '../../../components/Rating/Rating';

const TestimonialsBoard = () => {
  const handleClick = ({ id, name, desc, rate }: Testimonials) => {
    window.localStorage.setItem(
      'testimonials',
      JSON.stringify({ id, name, desc, rate })
    );
    onShow();
  };

  const [modalShow, setModalShow] = useState<boolean>(false);
  const onShow = () => setModalShow(true);
  const onHide = () => setModalShow(false);

  const props: ModalProps = {
    onHide,
    modalShow,
  };

  return (
    <section
      className='dashboard_section active testimonials'
      id='testimonials'
    >
      <Form dir='rtl'>
        <Row className='py-2'>
          {testimonials.map(
            ({ id, name, desc, rate }: Testimonials, index: number) => (
              <Col xs={12} md={6} key={index}>
                <Card className='mb-3'>
                  <Card.Header>
                    <Card.Title>{name}</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <h5>{name}</h5>
                    <Rating rate={rate} />

                    <p className='desc'>{desc}</p>
                  </Card.Body>
                  <Card.Footer>
                    <div
                      className='btn form_btn'
                      onClick={() => handleClick({ id, name, desc, rate })}
                    >
                      تحديث
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            )
          )}
        </Row>
      </Form>
      <TestimonialsModalForm {...props} />
    </section>
  );
};

export default TestimonialsBoard;
