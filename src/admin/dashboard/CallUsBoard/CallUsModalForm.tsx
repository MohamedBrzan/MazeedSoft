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
import {
  useGetCallUsDataQuery,
  useUpdateCallUsDataMutation,
} from '../../../store/apis/CallUsApi';

const CallUsModalForm = (props: ModalProps) => {
  const { data, refetch } = useGetCallUsDataQuery();
  const [updateCallUsData] = useUpdateCallUsDataMutation();

  const { modalShow, onHide } = props;

  const [titleText, setTitleText] = useState<string>('');
  const [descText, setDescText] = useState<string>('');

  useMemo(() => {
    setTitleText(data?.title);
    setDescText(data?.desc);
  }, [data?.desc, data?.title]);

  const UpdateIt = async () => {
    const data = { title: titleText, desc: descText };
    await updateCallUsData(data);
    refetch();
    onHide();
  };

  return (
    <Modal
      className='call_us_modal_form'
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
                value={descText}
                placeholder='Enter Link title'
                className='mb-1'
                onChange={(e) => HandleOnChange(e, setDescText)}
              />
            </FormGroup>
          </Col>
        </Row>
        <div onClick={UpdateIt} className='btn modal_form_btn'>
          تحديث
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CallUsModalForm;
