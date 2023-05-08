import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import { call_us } from '../../../../db/db.json';
import { Card, Col, FormControl, Row } from 'react-bootstrap';
import CallUs from '../../../interfaces/CallUs';
import ModalProps from '../../../types/ModalProps';
import { useState } from 'react';
import CallUsModalForm from './CallUsModalForm';

const CallUsBoard = () => {
  const { title, desc } = call_us;

  const handleClick = ({ title, desc }: CallUs) => {
    window.localStorage.setItem('call_us', JSON.stringify({ title, desc }));
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
        <Row className='py-2'>
          <Col md={6} className='mb-3'>
            <Card>
              <Card.Body>
                <FormGroup>
                  <FormLabel>العنوان : </FormLabel>
                  <FormControl
                    value={title}
                    placeholder='Enter Link title'
                    className='mb-1'
                    disabled
                  />
                  <FormLabel>الوصف : </FormLabel>

                  <FormControl
                    value={desc}
                    placeholder='Enter Link link'
                    className='mb-1'
                    disabled
                  />
                </FormGroup>
              </Card.Body>
              <Card.Footer>
                <div
                  className='btn form_btn'
                  onClick={() => handleClick({ title, desc })}
                >
                  تحديث
                </div>
              </Card.Footer>
            </Card>
            <CallUsModalForm {...props} />
          </Col>
        </Row>
      </Form>
    </section>
  );
};

export default CallUsBoard;
