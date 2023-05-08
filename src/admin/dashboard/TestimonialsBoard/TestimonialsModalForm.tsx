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
  useGetTestimonialByIdQuery,
  useGetTestimonialsDataQuery,
  useUpdateTestimonialMutation,
} from '../../../store/apis/TestimonialsApi';

const TestimonialsModalForm = (props: ModalProps) => {
  const testimonialsData = JSON.parse(
    localStorage.getItem('testimonials') || ''
  )
    ? JSON.parse(localStorage.getItem('testimonials') || '')
    : {};

  const { modalShow, onHide } = props;

  const { id } = testimonialsData;

  const { refetch: refetchAllData } = useGetTestimonialsDataQuery();
  const { data, refetch } = useGetTestimonialByIdQuery(id);
  const [updateTestimonialData] = useUpdateTestimonialMutation();

  const [nameText, setNameText] = useState<string>('');
  const [descText, setDescText] = useState<string>('');
  const [rateNum, setRateNum] = useState<string | number>('');

  useMemo(() => {
    setNameText(data?.name);
    setDescText(data?.desc);
    setRateNum(data?.rate);
  }, [data?.desc, data?.name, data?.rate]);

  const UpdateIt = async () => {
    const data = { name: nameText, desc: descText, rate: Number(rateNum) };
    await updateTestimonialData({ id, ...data });
    refetch();
    refetchAllData();
    onHide();
  };

  return (
    <Modal
      className='testimonials_modal_form'
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
          <Col xs={12} className='mb-3'>
            <FormGroup>
              <FormLabel>الإسم : </FormLabel>
              <FormControl
                required
                as={'textarea'}
                value={nameText}
                placeholder='Enter Link title'
                className='mb-1'
                onChange={(e) => HandleOnChange(e, setNameText)}
              />
            </FormGroup>
          </Col>
          <Col xs={12} className='mb-3'>
            <FormGroup>
              <FormLabel>الوصف : </FormLabel>
              <FormControl
                required
                as={'textarea'}
                value={descText}
                placeholder='Enter Link title'
                className='mb-1'
                onChange={(e) => HandleOnChange(e, setDescText)}
              />
            </FormGroup>
          </Col>
          <Col xs={12} className='mb-3'>
            <FormGroup>
              <FormLabel>التقييم : </FormLabel>
              <FormControl
                required
                type='number'
                max={5}
                value={rateNum}
                placeholder='Enter Link title'
                className='mb-1'
                onChange={(e) => HandleOnChange(e, setRateNum)}
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

export default TestimonialsModalForm;
