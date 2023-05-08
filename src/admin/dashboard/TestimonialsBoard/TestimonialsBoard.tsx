import Form from 'react-bootstrap/Form';
import { Card, Col, Row } from 'react-bootstrap';
import ModalProps from '../../../types/ModalProps';
import { useState } from 'react';
import TestimonialsModalForm from './TestimonialsModalForm';
import Testimonials from '../../../interfaces/Testimonials';
import Rating, { RatingType } from '../../../components/Rating/Rating';
import { useGetTestimonialsDataQuery } from '../../../store/apis/TestimonialsApi';

const TestimonialsBoard = () => {
  const { data, isLoading, isFetching, isError } =
    useGetTestimonialsDataQuery();

  const handleClick = (data: Testimonials) => {
    window.localStorage.setItem('testimonials', JSON.stringify(data));
    onShow();
  };

  const [modalShow, setModalShow] = useState<boolean>(false);
  const onShow = () => setModalShow(true);
  const onHide = () => setModalShow(false);

  const props: ModalProps = {
    onHide,
    modalShow,
  };

  const RateData: RatingType = {
    rate: Number(data?.rate),
  };

  return (
    <section
      className='dashboard_section active testimonials'
      id='testimonials'
    >
      <Form dir='rtl'>
        {isLoading || isFetching ? (
          'Loading...'
        ) : isError ? (
          'Error :('
        ) : (
          <Row className='py-2'>
            {data.map(
              ({ id, name, desc, rate }: Testimonials, index: number) => (
                <Col xs={12} md={6} key={index}>
                  <Card className='mb-3'>
                    <Card.Header>
                      <Card.Title>{name}</Card.Title>
                    </Card.Header>
                    <Card.Body>
                      <h5>{name}</h5>
                      <Rating {...RateData} />

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
        )}
      </Form>
      <TestimonialsModalForm {...props} />
    </section>
  );
};

export default TestimonialsBoard;
