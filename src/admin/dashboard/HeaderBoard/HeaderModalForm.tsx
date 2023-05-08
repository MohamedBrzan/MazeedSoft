import { useMemo, useState } from 'react';
import { FormControl, FormGroup, FormLabel, Modal } from 'react-bootstrap';
import ModalProps from '../../../types/ModalProps';
import HandleChangeHeaderLinks from '../../../functions/HandleChangeHeaderLinks';
import HandleOnChange from '../../../functions/HandleOnChange';

const HeaderModalForm = (props: ModalProps) => {
  const headerLink = JSON.parse(localStorage.getItem('header_link') || '')
    ? JSON.parse(localStorage.getItem('header_link') || '')
    : {};

  const { id, title, link } = headerLink;

  const [titleState, setTitleState] = useState<string>(title);
  const [linkState, setLinkState] = useState<string>(link);

  const { onHide, modalShow } = props;

  useMemo(() => {
    setTitleState(title);
    setLinkState(link);
  }, [link, title]);

  return (
    <Modal
      className='header_modal_form'
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
        <FormGroup>
          <FormLabel>{title} : </FormLabel>
          <FormControl
            value={titleState}
            placeholder='Enter Link title'
            className='mb-1'
            onChange={(e) => HandleOnChange(e, setTitleState)}
          />

          <FormControl
            value={linkState}
            placeholder='Enter Link link'
            className='mb-1'
            dir='ltr'
            onChange={(e) => HandleOnChange(e, setLinkState)}
          />
        </FormGroup>

        <div
          onClick={() =>
            HandleChangeHeaderLinks({ id, titleState, linkState }, onHide)
          }
          className='btn modal_form_btn'
        >
          تحديث
        </div>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default HeaderModalForm;
