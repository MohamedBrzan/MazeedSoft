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
import { about_us } from '../../../../db/db.json';
import AboutUsModalForm from './AboutUsModalForm';
import AboutUs from '../../../interfaces/AboutUs';

const AboutUsBoard = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const onShow = () => setModalShow(true);
  const onHide = () => setModalShow(false);

  const { title, desc, image, mission, vision } = about_us;

  const props: ModalProps = {
    onHide,
    modalShow,
  };

  const handleClick = ({ title, desc, image, mission, vision }: AboutUs) => {
    window.localStorage.setItem(
      'about_us',
      JSON.stringify({
        title,
        desc,
        image,
        mission,
        vision,
      })
    );
    onShow();
  };

  return (
    <section className='dashboard_section about_us' id='about_us'>
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
                    value={desc}
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
                  <FormLabel>{mission.title} : </FormLabel>
                  <FormControl
                    value={mission.title}
                    placeholder='Enter Link title'
                    className='mb-1'
                    disabled
                  />
                  <FormControl
                    as={'textarea'}
                    value={mission.desc}
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
                  <FormLabel>{vision.title} : </FormLabel>
                  <FormControl
                    value={vision.title}
                    placeholder='Enter Link title'
                    className='mb-1'
                    disabled
                  />
                  <FormControl
                    as={'textarea'}
                    value={vision.desc}
                    placeholder='Enter Link title'
                    className='mb-1'
                    disabled
                  />
                </FormGroup>
              </Card.Body>
            </Card>
            <AboutUsModalForm {...props} />
          </Col>
        </Row>

        <div
          className='btn form_btn'
          onClick={() =>
            handleClick({
              title,
              desc,
              image,
              mission,
              vision,
            })
          }
        >
          تحديث
        </div>
      </Form>
    </section>
  );
};

export default AboutUsBoard;
