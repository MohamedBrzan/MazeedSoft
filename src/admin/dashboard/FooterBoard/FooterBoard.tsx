import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import { Card, Col, FormControl, Row } from 'react-bootstrap';
import ModalProps from '../../../types/ModalProps';
import { useState } from 'react';
import FooterBoardModalForm from './FooterBoardModalForm';
// import Footer from '../../../interfaces/Footer';
import { useGetFooterDataQuery } from '../../../store/apis/FooterApi';

const FooterBoard = () => {
  const { data, isLoading, isFetching, isError } = useGetFooterDataQuery();

  const [modalShow, setModalShow] = useState<boolean>(false);
  const onShow = () => setModalShow(true);
  const onHide = () => setModalShow(false);

  const props: ModalProps = {
    onHide,
    modalShow,
  };

  return (
    <section className='dashboard_section active footer' id='footer'>
      <Form dir='rtl'>
        {isLoading || isFetching ? (
          'Loading...'
        ) : isError ? (
          'Error :('
        ) : (
          <Row className='py-2'>
            <Col md={6} className='mb-3'>
              <Card>
                <Card.Header>
                  <Card.Title>الوصف</Card.Title>
                </Card.Header>
                <Card.Body>
                  <FormGroup>
                    <FormControl
                      as={'textarea'}
                      value={data.desc}
                      placeholder='Enter Link link'
                      className='mb-1'
                      disabled
                    />
                  </FormGroup>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className='mb-3'>
              <Card>
                <Card.Header>
                  <Card.Title>اللينكات</Card.Title>
                </Card.Header>
                <Card.Body>
                  <FormGroup>
                    <FormLabel>{data.links.facebook} : </FormLabel>

                    <FormControl
                      dir='ltr'
                      type='url'
                      value={data.links.facebook}
                      placeholder='Enter Link link'
                      className='mb-1'
                      disabled
                    />
                    <FormControl
                      dir='ltr'
                      type='url'
                      value={data.links.youtube}
                      placeholder='Enter Link link'
                      className='mb-1'
                      disabled
                    />
                    <FormControl
                      dir='ltr'
                      type='url'
                      value={data.links.linkedin}
                      placeholder='Enter Link link'
                      className='mb-1'
                      disabled
                    />
                  </FormGroup>
                </Card.Body>
              </Card>{' '}
            </Col>
            <Col md={6} className='mb-3'>
              <Card>
                <Card.Header>
                  <Card.Title>اللينكات المهمة</Card.Title>
                </Card.Header>
                <Card.Body>
                  <FormGroup>
                    {' '}
                    <FormLabel>{data.importantLinks.text} : </FormLabel>
                    <FormControl
                      value={data.importantLinks.text}
                      placeholder='Enter Link link'
                      className='mb-1'
                      disabled
                    />
                    <FormLabel>{data.importantLinks.link.name} : </FormLabel>
                    <FormControl
                      dir='ltr'
                      type='url'
                      value={data.importantLinks.link.url}
                      placeholder='Enter Link link'
                      className='mb-1'
                      disabled
                    />
                    <FormLabel>{data.importantLinks.privacy.name} : </FormLabel>
                    <FormControl
                      value={data.importantLinks.privacy.name}
                      placeholder='Enter Link link'
                      className='mb-1'
                      disabled
                    />
                    <FormControl
                      value={data.importantLinks.privacy.url}
                      placeholder='Enter Link link'
                      className='mb-1'
                      disabled
                    />
                  </FormGroup>
                </Card.Body>
              </Card>{' '}
            </Col>
            <Col md={6} className='mb-3'>
              <Card>
                <Card.Header>
                  <Card.Title> حقوق الملكية </Card.Title>
                </Card.Header>
                <Card.Body>
                  <FormGroup>
                    {' '}
                    <FormLabel>{data.rights} : </FormLabel>
                    <FormControl
                      value={data.rights}
                      placeholder='Enter Link link'
                      className='mb-1'
                      disabled
                    />
                  </FormGroup>
                </Card.Body>
              </Card>{' '}
            </Col>
          </Row>
        )}
        <div className='btn form_btn' onClick={onShow}>
          تحديث
        </div>
      </Form>
      <FooterBoardModalForm {...props} />
    </section>
  );
};

export default FooterBoard;
