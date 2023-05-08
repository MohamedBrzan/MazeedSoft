import Form from 'react-bootstrap/Form';
import { Card, Col, FormControl, Row } from 'react-bootstrap';
import Features from '../../../interfaces/Features';
import ModalProps from '../../../types/ModalProps';
import { useState } from 'react';
import FeaturesModalForm from './FeaturesModalForm';
import { useGetFeaturesDataQuery } from '../../../store/apis/FeaturesApi';

const FeaturesBoard = () => {
  const handleClick = (data: Features) => {
    window.localStorage.setItem('features', JSON.stringify(data));
    onShow();
  };

  const { data, isLoading, isFetching, isError } = useGetFeaturesDataQuery();

  const [modalShow, setModalShow] = useState<boolean>(false);
  const onShow = () => setModalShow(true);
  const onHide = () => setModalShow(false);

  const props: ModalProps = {
    onHide,
    modalShow,
  };

  return (
    <section className='dashboard_section active features' id='features'>
      <Form dir='rtl'>
        <Row className='py-2'>
          {isLoading || isFetching
            ? 'Loading...'
            : isError
            ? 'Error :('
            : data.map(
                ({ id, image, title, desc }: Features, index: number) => (
                  <Col
                    xs={12}
                    md={6}
                    lg={4}
                    xl={3}
                    className='mb-3'
                    key={index}
                  >
                    <Card>
                      <Card.Body>
                        <figure>
                          <img
                            src={image}
                            alt={title}
                            loading='lazy'
                            width='100%'
                          />
                        </figure>
                        <div className='my_card_body'>
                          <FormControl
                            className='mb-3'
                            as={'textarea'}
                            title={title}
                            value={title}
                            disabled
                          />
                          <FormControl
                            className='mb-3'
                            as={'textarea'}
                            title={desc}
                            value={desc}
                            disabled
                          />
                        </div>
                      </Card.Body>
                      <Card.Footer>
                        <div
                          className='btn form_btn'
                          onClick={() =>
                            handleClick({ id, image, title, desc })
                          }
                        >
                          تحديث
                        </div>
                      </Card.Footer>
                    </Card>
                  </Col>
                )
              )}
        </Row>
        <FeaturesModalForm {...props} />
      </Form>
    </section>
  );
};

export default FeaturesBoard;
