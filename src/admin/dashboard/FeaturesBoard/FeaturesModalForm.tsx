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
import HandleOnChange from '../../../functions/HandleOnChange';
import HandleChangeFeaturesData from '../../../functions/HandleChangeFeaturesData';

const FeaturesModalForm = (props: ModalProps) => {
  const featuresData = JSON.parse(localStorage.getItem('features') || '')
    ? JSON.parse(localStorage.getItem('features') || '')
    : {};

  const { modalShow, onHide } = props;

  const { id, image, title, desc } = featuresData;

  const [titleText, setTitleText] = useState<string>('');
  const [descText, setDescText] = useState<string>('');

  useMemo(() => {
    setTitleText(title);
    setDescText(desc);
  }, [desc, title]);

  return (
    <Modal
      className='features_modal_form'
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
        <Row>
          <Col md={12} className='mb-3'>
            <figure>
              <img src={image} alt='Card Image.' width='100%' />
            </figure>
          </Col>
          <Col md={6} className='mb-3'>
            <FormGroup>
              <FormLabel>العنوان : </FormLabel>
              <FormControl
                as={'textarea'}
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
        </Row>
        <div
          onClick={() =>
            HandleChangeFeaturesData(
              {
                id,
                image,
                titleText,
                descText,
              },
              onHide
            )
          }
          className='btn modal_form_btn'
        >
          تحديث
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default FeaturesModalForm;
