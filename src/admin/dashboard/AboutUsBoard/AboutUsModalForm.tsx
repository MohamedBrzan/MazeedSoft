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
import {
  useGetAboutUsDataQuery,
  useUpdateAboutUsDataMutation,
} from '../../../store/apis/AboutUsApi';

const AboutUsModalForm = (props: ModalProps) => {
  const aboutUsData = JSON.parse(localStorage.getItem('about_us') || '')
    ? JSON.parse(localStorage.getItem('about_us') || '')
    : {};

  const { modalShow, onHide } = props;

  const { data, isLoading, isFetching, isError, refetch } =
    useGetAboutUsDataQuery();

  const [updateAboutUsData] = useUpdateAboutUsDataMutation();

  const [titleText, setTitleText] = useState<string>('');
  const [descText, setDescText] = useState<string>('');
  const [missionTitleText, setMissionTitleText] = useState<string>('');
  const [missionDescText, setMissionDescText] = useState<string>('');
  const [visionTitleText, setVisionTitleText] = useState<string>('');
  const [visionDescText, setVisionDescText] = useState<string>('');

  useMemo(() => {
    setTitleText(data?.title);
    setDescText(data?.desc);
    setMissionTitleText(data?.mission?.title);
    setMissionDescText(data?.mission?.desc);
    setVisionTitleText(data?.vision?.title);
    setVisionDescText(data?.vision?.desc);
  }, [
    data?.desc,
    data?.mission?.desc,
    data?.mission?.title,
    data?.title,
    data?.vision?.desc,
    data?.vision?.title,
  ]);

  const UpdateIt = async () => {
    const AboutData = {
      image: data?.image,
      title: titleText,
      desc: descText,
      mission: {
        title: missionTitleText,
        desc: missionDescText,
      },
      vision: {
        title: visionTitleText,
        desc: visionDescText,
      },
    };
    await updateAboutUsData(AboutData);

    refetch();
    onHide();
  };

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
        {isLoading || isFetching ? (
          'Loading...'
        ) : isError ? (
          'Error :('
        ) : (
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
        )}

        <div className='btn modal_form_btn' onClick={UpdateIt}>
          تحديث
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AboutUsModalForm;
