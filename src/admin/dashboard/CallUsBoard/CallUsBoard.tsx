import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import { Card, Col, FormControl, Row } from 'react-bootstrap';
import CallUs from '../../../interfaces/CallUs';
import ModalProps from '../../../types/ModalProps';
import { useState } from 'react';
import CallUsModalForm from './CallUsModalForm';
import { useGetCallUsDataQuery } from '../../../store/apis/CallUsApi';

const CallUsBoard = () => {
  const { data, isLoading, isFetching, isError } = useGetCallUsDataQuery();

  const handleClick = (data: CallUs) => {
    window.localStorage.setItem('call_us', JSON.stringify(data));
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
    <section className='dashboard_section active call_us' id='call_us'>
      <Form dir='rtl'>
        {isLoading || isFetching ? (
          'Loading...'
        ) : isError ? (
          'Error :('
        ) : (
          <Row className='py-2'>
            <Col md={6} className='mb-3'>
              <Card>
                <Card.Body>
                  <FormGroup>
                    <FormLabel>العنوان : </FormLabel>
                    <FormControl
                      value={data.title}
                      placeholder='Enter Link title'
                      className='mb-1'
                      disabled
                    />
                    <FormLabel>الوصف : </FormLabel>

                    <FormControl
                      value={data.desc}
                      placeholder='Enter Link link'
                      className='mb-1'
                      disabled
                    />
                  </FormGroup>
                </Card.Body>
                <Card.Footer>
                  <div
                    className='btn form_btn'
                    onClick={() => handleClick(data)}
                  >
                    تحديث
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        )}
      </Form>
      <CallUsModalForm {...props} />
    </section>
  );
};

export default CallUsBoard;
