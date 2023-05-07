import ModalProps from '../../../types/ModalProps';
import { useState } from 'react';
import HomeInterface from '../../../interfaces/Home';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { home } from '../../../../db/db.json';
import { Card, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import HomeModalForm from './HomeModalForm';

const HomeBoard = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const onShow = () => setModalShow(true);
  const onHide = () => setModalShow(false);

  const props: ModalProps = {
    onHide,
    modalShow,
  };

  const { introText, btn, askForm, advice, signature } = home;

  const handleClick = ({
    introText,
    btn,
    askForm,
    advice,
    signature,
  }: HomeInterface) => {
    window.localStorage.setItem(
      'home_data',
      JSON.stringify({
        introText,
        btn,
        askForm,
        advice,
        signature,
      })
    );
    onShow();
  };

  return (
    <section className='dashboard_section home' id='home'>
      <Form dir='rtl'>
        <Row className='py-2'>
          <Col md={6} className='mb-3'>
            <Card>
              <Card.Body>
                <FormGroup>
                  <FormLabel>زر الواجهة : </FormLabel>
                  <FormControl
                    value={btn}
                    placeholder='Enter Link title'
                    className='mb-1'
                    disabled
                  />
                </FormGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className='mb-3'>
            <Card>
              <Card.Body>
                <FormGroup>
                  <FormLabel>الختم : </FormLabel>
                  <FormControl
                    value={signature}
                    placeholder='Enter Link title'
                    className='mb-1'
                    disabled
                  />
                </FormGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className='mb-3'>
            <Card>
              <Card.Body>
                <FormGroup>
                  <FormLabel>المقدمة : </FormLabel>
                  <FormControl
                    value={introText?.first}
                    placeholder='Enter Link title'
                    className='mb-1'
                    disabled
                  />
                </FormGroup>
                <FormGroup>
                  <FormControl
                    value={introText?.second}
                    placeholder='Enter Link title'
                    className='mb-1'
                    disabled
                  />
                </FormGroup>
                <FormGroup>
                  <FormControl
                    value={introText?.third}
                    placeholder='Enter Link title'
                    className='mb-1'
                    disabled
                  />
                </FormGroup>
              </Card.Body>
            </Card>
          </Col>{' '}
          <Col md={6} className='mb-3'>
            <Card>
              <Card.Body>
                <FormGroup>
                  <FormLabel> تسويق : </FormLabel>
                  <FormControl
                    as={'textarea'}
                    value={advice?.title}
                    placeholder='Enter Link title'
                    className='mb-1'
                    disabled
                  />
                </FormGroup>
                <FormGroup>
                  <FormControl
                    as={'textarea'}
                    value={advice?.desc_one}
                    placeholder='Enter Link title'
                    className='mb-1'
                    disabled
                  />
                </FormGroup>
                <FormGroup>
                  <FormControl
                    as={'textarea'}
                    value={advice?.desc_two}
                    placeholder='Enter Link title'
                    className='mb-1'
                    disabled
                  />
                </FormGroup>
              </Card.Body>
            </Card>
          </Col>{' '}
          <Col md={6} className='mb-3'>
            <Card>
              <Card.Body>
                <FormGroup>
                  <FormLabel> طلب البرنامج : </FormLabel>
                  <FormControl
                    as={'textarea'}
                    value={askForm?.title_one}
                    placeholder='Enter Link title'
                    className='mb-1'
                    disabled
                  />
                </FormGroup>
                <FormGroup>
                  <FormControl
                    as={'textarea'}
                    value={askForm?.title_two}
                    placeholder='Enter Link title'
                    className='mb-1'
                    disabled
                  />
                </FormGroup>
                <FormGroup>
                  <FormControl
                    as={'textarea'}
                    value={askForm?.offer}
                    placeholder='Enter Link title'
                    className='mb-1'
                    disabled
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel> الزر : </FormLabel>
                  <FormControl
                    as={'textarea'}
                    value={askForm?.btn}
                    placeholder='Enter Link title'
                    className='mb-1'
                    disabled
                  />
                </FormGroup>
              </Card.Body>
            </Card>

            <HomeModalForm {...props} />
          </Col>
        </Row>

        <div
          className='btn form_btn'
          onClick={() =>
            handleClick({
              introText,
              btn,
              askForm,
              advice,
              signature,
            })
          }
        >
          تحديث
        </div>
      </Form>
    </section>
  );
};

export default HomeBoard;
