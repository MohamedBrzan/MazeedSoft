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
  useGetFeatureByIdQuery,
  useGetFeaturesDataQuery,
  useUpdateFeatureMutation,
} from '../../../store/apis/FeaturesApi';

const FeaturesModalForm = (props: ModalProps) => {
  const featuresData = JSON.parse(localStorage.getItem('features') || '')
    ? JSON.parse(localStorage.getItem('features') || '')
    : {};

  const { modalShow, onHide } = props;

  const { id } = featuresData;

  const { data, isLoading, isFetching, isError } = useGetFeatureByIdQuery(id);

  const { refetch } = useGetFeaturesDataQuery();

  const [updateFeatureData] = useUpdateFeatureMutation();

  const [titleText, setTitleText] = useState<string>('');
  const [descText, setDescText] = useState<string>('');

  useMemo(() => {
    setTitleText(data?.title);
    setDescText(data?.desc);
  }, [data?.desc, data?.title]);

  const UpdateIt = async () => {
    const featureData = { image: data.image, title: titleText, desc: descText };
    await updateFeatureData({ id, ...featureData });
    refetch();
    onHide();
  };

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
        {isLoading || isFetching ? (
          'Loading...'
        ) : isError ? (
          'Error :('
        ) : (
          <Row>
            <Col md={12} className='mb-3'>
              <figure className='feature_figure'>
                <img src={data.image} alt='Card Image.' />
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
        )}
        <div onClick={UpdateIt} className='btn modal_form_btn'>
          تحديث
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default FeaturesModalForm;
