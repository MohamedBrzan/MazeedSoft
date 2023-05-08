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
import HandleChangeHomeData from '../../../functions/HandleChangeHomeData';
import HandleOnChange from '../../../functions/HandleOnChange';

const HomeModalForm = (props: ModalProps) => {
  const homeData = JSON.parse(localStorage.getItem('home_data') || '')
    ? JSON.parse(localStorage.getItem('home_data') || '')
    : {};

  const { modalShow, onHide } = props;

  const { btn, signature, introText, advice, askForm } = homeData;

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

  useMemo(() => {
    setBtnText(btn);
    setSignatureText(signature);
    setFirstText(introText?.first);
    setSecondText(introText?.second);
    setThirdText(introText?.third);
    setAdviceTitleText(advice?.title);
    setAdviceDescOneText(advice?.desc_one);
    setAdviceDescTwoText(advice?.desc_two);
    setAskFormTitleOneText(askForm?.title_one);
    setAskFormTitleTwoText(askForm?.title_two);
    setAskFormOfferText(askForm?.offer);
    setAskFormBtnText(askForm?.btn);
  }, [
    advice?.desc_one,
    advice?.desc_two,
    advice?.title,
    askForm?.btn,
    askForm?.offer,
    askForm?.title_one,
    askForm?.title_two,
    btn,
    introText?.first,
    introText?.second,
    introText?.third,
    signature,
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
        <div
          onClick={() =>
            HandleChangeHomeData(
              {
                btnText,
                signatureText,
                firstText,
                secondText,
                thirdText,
                adviceTitleText,
                adviceDescOneText,
                adviceDescTwoText,
                askFormTitleOneText,
                askFormTitleTwoText,
                askFormOfferText,
                askFormBtnText,
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

export default HomeModalForm;
