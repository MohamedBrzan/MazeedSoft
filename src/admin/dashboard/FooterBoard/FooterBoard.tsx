import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import { footer } from '../../../../db/db.json';
import { Card, Col, FormControl, Row } from 'react-bootstrap';
import ModalProps from '../../../types/ModalProps';
import { useState } from 'react';
import FooterBoardModalForm from './FooterBoardModalForm';
import Footer from '../../../interfaces/Footer';

const FooterBoard = () => {
  const { logo, desc, importantLinks, links, rights } = footer;

  const handleClick = ({
    logo,
    desc,
    links,
    importantLinks,
    rights,
  }: Footer) => {
    window.localStorage.setItem(
      'footer',
      JSON.stringify({ logo, desc, importantLinks, links, rights })
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
    <section className='dashboard_section active footer' id='footer'>
      <Form dir='rtl'>
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
                    value={desc}
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
                  <FormLabel>{links.facebook} : </FormLabel>

                  <FormControl
                    dir='ltr'
                    type='url'
                    value={links.facebook}
                    placeholder='Enter Link link'
                    className='mb-1'
                    disabled
                  />
                  <FormControl
                    dir='ltr'
                    type='url'
                    value={links.youtube}
                    placeholder='Enter Link link'
                    className='mb-1'
                    disabled
                  />
                  <FormControl
                    dir='ltr'
                    type='url'
                    value={links.linkedin}
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
                  <FormLabel>{importantLinks.text} : </FormLabel>
                  <FormControl
                    value={importantLinks.text}
                    placeholder='Enter Link link'
                    className='mb-1'
                    disabled
                  />
                  <FormLabel>{importantLinks.link.name} : </FormLabel>
                  <FormControl
                    dir='ltr'
                    type='url'
                    value={importantLinks.link.url}
                    placeholder='Enter Link link'
                    className='mb-1'
                    disabled
                  />
                  <FormLabel>{importantLinks.privacy.name} : </FormLabel>
                  <FormControl
                    value={importantLinks.privacy.name}
                    placeholder='Enter Link link'
                    className='mb-1'
                    disabled
                  />
                  <FormControl
                    value={importantLinks.privacy.url}
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
                  <FormLabel>{rights} : </FormLabel>
                  <FormControl
                    value={rights}
                    placeholder='Enter Link link'
                    className='mb-1'
                    disabled
                  />
                </FormGroup>
              </Card.Body>
            </Card>{' '}
          </Col>
        </Row>
        <div
          className='btn form_btn'
          onClick={() =>
            handleClick({ logo, desc, importantLinks, links, rights })
          }
        >
          تحديث
        </div>
      </Form>
      <FooterBoardModalForm {...props} />
    </section>
  );
};

export default FooterBoard;
