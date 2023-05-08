import ModalProps from '../../../types/ModalProps';
import { useState } from 'react';
import HomeInterface from '../../../interfaces/Home';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import HomeModalForm from './HomeModalForm';
import { useGetHomeDataQuery } from '../../../store/apis/HomeApi';

const HomeBoard = () => {
  const { data, isLoading, isFetching, isError, refetch } =
    useGetHomeDataQuery();

  const [modalShow, setModalShow] = useState<boolean>(false);
  const onShow = () => setModalShow(true);
  const onHide = () => {
    setModalShow(false);
    refetch();
  };

  const props: ModalProps = {
    onHide,
    modalShow,
  };

  const handleClick = ({ ...data }: HomeInterface) => {
    window.localStorage.setItem('home_data', JSON.stringify(data));
    onShow();
  };

  return (
    <section className='dashboard_section home' id='home'>
      <Form dir='rtl'>
        {isLoading || isFetching ? (
          'Loading...'
        ) : isError ? (
          'Error :('
        ) : (
          <Row className='py-2'>
            <Col xs={12} md={6} className='mb-3'>
              <Card>
                <Card.Body>
                  <FormGroup>
                    <FormLabel>زر الواجهة : </FormLabel>
                    <FormControl
                      value={data.btn}
                      placeholder='Enter Link title'
                      className='mb-1'
                      disabled
                    />
                  </FormGroup>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} className='mb-3'>
              <Card>
                <Card.Body>
                  <FormGroup>
                    <FormLabel>الختم : </FormLabel>
                    <FormControl
                      value={data.signature}
                      placeholder='Enter Link title'
                      className='mb-1'
                      disabled
                    />
                  </FormGroup>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} className='mb-3'>
              <Card>
                <Card.Body>
                  <FormGroup>
                    <FormLabel>المقدمة : </FormLabel>
                    <FormControl
                      value={data.introText.first}
                      placeholder='Enter Link title'
                      className='mb-1'
                      disabled
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      value={data.introText.second}
                      placeholder='Enter Link title'
                      className='mb-1'
                      disabled
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      value={data.introText.third}
                      placeholder='Enter Link title'
                      className='mb-1'
                      disabled
                    />
                  </FormGroup>
                </Card.Body>
              </Card>
            </Col>{' '}
            <Col xs={12} md={6} className='mb-3'>
              <Card>
                <Card.Body>
                  <FormGroup>
                    <FormLabel> تسويق : </FormLabel>
                    <FormControl
                      as={'textarea'}
                      value={data.advice.title}
                      placeholder='Enter Link title'
                      className='mb-1'
                      disabled
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      as={'textarea'}
                      value={data.advice.desc_one}
                      placeholder='Enter Link title'
                      className='mb-1'
                      disabled
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      as={'textarea'}
                      value={data.advice.desc_two}
                      placeholder='Enter Link title'
                      className='mb-1'
                      disabled
                    />
                  </FormGroup>
                </Card.Body>
              </Card>
            </Col>{' '}
            <Col xs={12} md={6} className='mb-3'>
              <Card>
                <Card.Body>
                  <FormGroup>
                    <FormLabel> طلب البرنامج : </FormLabel>
                    <FormControl
                      as={'textarea'}
                      value={data.askForm.title_one}
                      placeholder='Enter Link title'
                      className='mb-1'
                      disabled
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      as={'textarea'}
                      value={data.askForm.title_two}
                      placeholder='Enter Link title'
                      className='mb-1'
                      disabled
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      as={'textarea'}
                      value={data.askForm.offer}
                      placeholder='Enter Link title'
                      className='mb-1'
                      disabled
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormLabel> الزر : </FormLabel>
                    <FormControl
                      as={'textarea'}
                      value={data.askForm.btn}
                      placeholder='Enter Link title'
                      className='mb-1'
                      disabled
                    />
                  </FormGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
        <HomeModalForm {...props} />

        <div
          className='btn form_btn'
          onClick={() =>
            handleClick({
              ...data,
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
