import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './ShowCard.scss';
import { Col, Row } from 'react-bootstrap';

export type ShowCardProps = {
  onHide: () => void;
  modalShow: boolean;
};

const ShowCard = (props: ShowCardProps) => {
  const { onHide, modalShow } = props;
  const card = JSON.parse(localStorage.getItem('card') || '')
    ? JSON.parse(localStorage.getItem('card') || '')
    : {};

  const { id, image, title, desc } = card;
  return (
    <section className='show_card'>
      <Modal
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
        show={modalShow}
        onHide={onHide}
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={5} className='content_col'>
              <figure>
                <img src={image} alt={title} width='100%' />
              </figure>
            </Col>
            <Col md={7} className='content_col'>
              <p>{desc}</p>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='warning' onClick={onHide}>
            إغلاق
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default ShowCard;