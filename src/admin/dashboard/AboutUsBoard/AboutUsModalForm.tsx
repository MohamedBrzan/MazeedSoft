import { useMemo, useState } from 'react';
import {
  Col,
  FormControl,
  FormGroup,
  FormLabel,
  Modal,
  Row,
} from 'react-bootstrap';
import ModalProps from '../../../types/ModalProps';

import '../Dashboard.scss';
import HandleChangeAboutUsData from '../../../functions/HandleChangeAboutUsData';
import HandleOnChange from '../../../functions/HandleOnChange';

const AboutUsModalForm = (props: ModalProps) => {
  const aboutUsData = JSON.parse(localStorage.getItem('about_us') || '')
    ? JSON.parse(localStorage.getItem('about_us') || '')
    : {};

  const { modalShow, onHide } = props;

  const { image, title, desc, mission, vision } = aboutUsData;

  const [titleText, setTitleText] = useState<string>('');
  const [descText, setDescText] = useState<string>('');
  const [missionTitleText, setMissionTitleText] = useState<string>('');
  const [missionDescText, setMissionDescText] = useState<string>('');
  const [visionTitleText, setVisionTitleText] = useState<string>('');
  const [visionDescText, setVisionDescText] = useState<string>('');

  useMemo(() => {
    setTitleText(title);
    setDescText(desc);
    setMissionTitleText(mission?.title);
    setMissionDescText(mission?.desc);
    setVisionTitleText(vision?.title);
    setVisionDescText(vision?.desc);
  }, [desc, mission?.desc, mission?.title, title, vision?.desc, vision?.title]);

  return (
    <Modal
      className='about_us_modal_form'
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      show={modalShow}
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className='py-2'>
          <Col md={6} className='mb-3'>
            <FormGroup>
              <FormLabel>العنوان : </FormLabel>
              <FormControl
                value={titleText}
                placeholder='Enter Link title'
                className='mb-1'
                onChange={(e) => HandleOnChange(e, setTitleText)}
              />
            </FormGroup>
          </Col>
          <Col md={6} className='mb-3'>
            <FormGroup>
              <FormLabel>الوصف : </FormLabel>
              <FormControl
                as={'textarea'}
                value={descText}
                placeholder='Enter Link title'
                className='mb-1'
                onChange={(e) => HandleOnChange(e, setDescText)}
              />
            </FormGroup>
          </Col>
          <Col md={6} className='mb-3'>
            <FormGroup>
              <FormLabel>{missionTitleText} : </FormLabel>
              <FormControl
                value={missionTitleText}
                placeholder='Enter Link title'
                className='mb-1'
                onChange={(e) => HandleOnChange(e, setMissionTitleText)}
              />
              <FormControl
                as={'textarea'}
                value={missionDescText}
                placeholder='Enter Link title'
                className='mb-1'
                onChange={(e) => HandleOnChange(e, setMissionDescText)}
              />
            </FormGroup>
          </Col>
          <Col md={6} className='mb-3'>
            <FormGroup>
              <FormLabel>{visionTitleText} : </FormLabel>
              <FormControl
                value={visionTitleText}
                placeholder='Enter Link title'
                className='mb-1'
                onChange={(e) => HandleOnChange(e, setVisionTitleText)}
              />
              <FormControl
                as={'textarea'}
                value={visionDescText}
                placeholder='Enter Link title'
                className='mb-1'
                onChange={(e) => HandleOnChange(e, setVisionDescText)}
              />
            </FormGroup>
          </Col>
        </Row>

        <div
          className='btn modal_form_btn'
          onClick={() =>
            HandleChangeAboutUsData(
              {
                image,
                titleText,
                descText,
                missionTitleText,
                missionDescText,
                visionTitleText,
                visionDescText,
              },
              onHide
            )
          }
        >
          تحديث
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AboutUsModalForm;
