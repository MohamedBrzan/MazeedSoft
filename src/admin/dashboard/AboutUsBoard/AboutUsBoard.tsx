import { useState } from 'react';
import {
  Card,
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  ModalProps,
  Row,
} from 'react-bootstrap';
import AboutUsModalForm from './AboutUsModalForm';
import AboutUs from '../../../interfaces/AboutUs';
import { useGetAboutUsDataQuery } from '../../../store/apis/AboutUsApi';

const AboutUsBoard = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const onShow = () => setModalShow(true);
  const onHide = () => setModalShow(false);

  const { data, isLoading, isFetching, isError } = useGetAboutUsDataQuery();

  const props: ModalProps = {
    onHide,
    modalShow,
  };

  const handleClick = (data: AboutUs) => {
    window.localStorage.setItem('about_us', JSON.stringify(data));
    onShow();
  };

  return (
    <section className='dashboard_section about_us' id='about_us'>
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
                  </FormGroup>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className='mb-3'>
              <Card>
                <Card.Body>
                  <FormGroup>
                    <FormLabel>الوصف : </FormLabel>
                    <FormControl
                      as={'textarea'}
                      value={data.desc}
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
                    <FormLabel>{data.mission.title} : </FormLabel>
                    <FormControl
                      value={data.mission.title}
                      placeholder='Enter Link title'
                      className='mb-1'
                      disabled
                    />
                    <FormControl
                      as={'textarea'}
                      value={data.mission.desc}
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
                    <FormLabel>{data.vision.title} : </FormLabel>
                    <FormControl
                      value={data.vision.title}
                      placeholder='Enter Link title'
                      className='mb-1'
                      disabled
                    />
                    <FormControl
                      as={'textarea'}
                      value={data.vision.desc}
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

        <div className='btn form_btn' onClick={() => handleClick(data)}>
          تحديث
        </div>
      </Form>
      <AboutUsModalForm {...props} />
    </section>
  );
};

export default AboutUsBoard;
