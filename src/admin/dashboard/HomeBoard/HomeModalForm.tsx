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
  useGetHomeDataQuery,
  useUpdateHomeDataMutation,
} from '../../../store/apis/HomeApi';

const HomeModalForm = (props: ModalProps) => {
  const { modalShow, onHide } = props;
  const [updateHomeData] = useUpdateHomeDataMutation();
  const { data, refetch } = useGetHomeDataQuery();

  const [btnText, setBtnText] = useState<string>('');
  const [signatureText, setSignatureText] = useState<string>('');
  const [firstText, setFirstText] = useState<string>('');
  const [secondText, setSecondText] = useState<string>('');
  const [thirdText, setThirdText] = useState<string>('');
  const [adviceTitleText, setAdviceTitleText] = useState<string>('');
  const [adviceDescOneText, setAdviceDescOneText] = useState<string>('');
  const [adviceDescTwoText, setAdviceDescTwoText] = useState<string>('');
  const [askFormTitleOneText, setAskFormTitleOneText] = useState<string>('');
  const [askFormTitleTwoText, setAskFormTitleTwoText] = useState<string>('');
  const [askFormOfferText, setAskFormOfferText] = useState<string>('');
  const [askFormBtnText, setAskFormBtnText] = useState<string>('');

  const UpdateIt = async () => {
    const data = {
      btn: btnText,
      signature: signatureText,
      introText: {
        first: firstText,
        second: secondText,
        third: thirdText,
      },
      advice: {
        title: adviceTitleText,
        desc_one: adviceDescOneText,
        desc_two: adviceDescTwoText,
      },
      askForm: {
        title_one: askFormTitleOneText,
        title_two: askFormTitleTwoText,
        offer: askFormOfferText,
        btn: askFormBtnText,
      },
    };

    await updateHomeData({ ...data });
    refetch();
    onHide();
  };

  useMemo(() => {
    setBtnText(data?.btn);
    setSignatureText(data?.signature);
    setFirstText(data?.introText?.first);
    setSecondText(data?.introText?.second);
    setThirdText(data?.introText?.third);
    setAdviceTitleText(data?.advice?.title);
    setAdviceDescOneText(data?.advice?.desc_one);
    setAdviceDescTwoText(data?.advice?.desc_two);
    setAskFormTitleOneText(data?.askForm?.title_one);
    setAskFormTitleTwoText(data?.askForm?.title_two);
    setAskFormOfferText(data?.askForm?.offer);
    setAskFormBtnText(data?.askForm?.btn);
  }, [
    data?.advice?.desc_one,
    data?.advice?.desc_two,
    data?.advice?.title,
    data?.askForm?.btn,
    data?.askForm?.offer,
    data?.askForm?.title_one,
    data?.askForm?.title_two,
    data?.btn,
    data?.introText?.first,
    data?.introText?.second,
    data?.introText?.third,
    data?.signature,
  ]);

  return (
    <Modal
      className='home_modal_form'
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
              <FormLabel>زر الواجهة : </FormLabel>
              <FormControl
                value={btnText}
                placeholder='Enter Link title'
                className='mb-1'
                onChange={(e) => HandleOnChange(e, setBtnText)}
              />
            </FormGroup>
          </Col>
          <Col md={6} className='mb-3'>
            <FormGroup>
              <FormLabel>الختم : </FormLabel>
              <FormControl
                value={signatureText}
                placeholder='Enter Link title'
                className='mb-1'
                onChange={(e) => HandleOnChange(e, setSignatureText)}
              />
            </FormGroup>
          </Col>
          <Col md={6} className='mb-3'>
            <FormGroup>
              <FormLabel>المقدمة : </FormLabel>
              <FormControl
                value={firstText}
                placeholder='Enter Link title'
                className='mb-1'
                onChange={(e) => HandleOnChange(e, setFirstText)}
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                value={secondText}
                placeholder='Enter Link title'
                className='mb-1'
                onChange={(e) => HandleOnChange(e, setSecondText)}
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                value={thirdText}
                placeholder='Enter Link title'
                className='mb-1'
                onChange={(e) => HandleOnChange(e, setThirdText)}
              />
            </FormGroup>
          </Col>{' '}
          <Col md={6} className='mb-3'>
            <FormGroup>
              <FormLabel> تسويق : </FormLabel>
              <FormControl
                as={'textarea'}
                value={adviceTitleText}
                placeholder='Enter Link title'
                className='mb-1'
                onChange={(e) => HandleOnChange(e, setAdviceTitleText)}
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                as={'textarea'}
                value={adviceDescOneText}
                placeholder='Enter Link title'
                className='mb-1'
                onChange={(e) => HandleOnChange(e, setAdviceDescOneText)}
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                as={'textarea'}
                value={adviceDescTwoText}
                placeholder='Enter Link title'
                className='mb-1'
                onChange={(e) => HandleOnChange(e, setAdviceDescTwoText)}
              />
            </FormGroup>
          </Col>{' '}
          <Col md={6} className='mb-3'>
            <FormGroup>
              <FormLabel> طلب البرنامج : </FormLabel>
              <FormControl
                as={'textarea'}
                value={askFormTitleOneText}
                placeholder='Enter Link title'
                className='mb-1'
                onChange={(e) => HandleOnChange(e, setAskFormTitleOneText)}
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                as={'textarea'}
                value={askFormTitleTwoText}
                placeholder='Enter Link title'
                className='mb-1'
                onChange={(e) => HandleOnChange(e, setAskFormTitleTwoText)}
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                as={'textarea'}
                value={askFormOfferText}
                placeholder='Enter Link title'
                className='mb-1'
                onChange={(e) => HandleOnChange(e, setAskFormOfferText)}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel> الزر : </FormLabel>
              <FormControl
                as={'textarea'}
                value={askFormBtnText}
                placeholder='Enter Link title'
                className='mb-1'
                onChange={(e) => HandleOnChange(e, setAskFormBtnText)}
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

export default HomeModalForm;
