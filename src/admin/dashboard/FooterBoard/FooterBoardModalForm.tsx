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
import HandleChangeFooterData from '../../../functions/HandleChangeFooterData';

const FooterBoardModalForm = (props: ModalProps) => {
  const footerData = JSON.parse(localStorage.getItem('footer') || '')
    ? JSON.parse(localStorage.getItem('footer') || '')
    : {};

  const { modalShow, onHide } = props;

  const { logo, desc, importantLinks, links, rights } = footerData;

  const [descText, setDescText] = useState<string>('');
  const [facebookLink, setFacebookLink] = useState<string>('');
  const [youtubeLink, setYoutubeLink] = useState<string>('');
  const [linkedinLink, setLinkedinLink] = useState<string>('');
  const [importantLinkText, setImportantLinkText] = useState<string>('');
  const [importantLinkName, setImportantLinkName] = useState<string>('');
  const [importantLinkUrl, setImportantLinkUrl] = useState<string>('');
  const [privacyName, setPrivacyName] = useState<string>('');
  const [privacyUrl, setPrivacyUrl] = useState<string>('');
  const [rightsText, setRightsText] = useState<string>('');

  useMemo(() => {
    setDescText(desc);
    setFacebookLink(links?.facebook);
    setYoutubeLink(links?.youtube);
    setLinkedinLink(links?.linkedin);
    setImportantLinkText(importantLinks?.text);
    setImportantLinkName(importantLinks?.link?.name);
    setImportantLinkUrl(importantLinks?.link?.url);
    setPrivacyName(importantLinks?.privacy?.name);
    setPrivacyUrl(importantLinks?.privacy?.url);
    setRightsText(rights);
  }, [
    desc,
    importantLinks?.link?.name,
    importantLinks?.link?.url,
    importantLinks?.privacy?.name,
    importantLinks?.privacy?.url,
    importantLinks?.text,
    links?.facebook,
    links?.linkedin,
    links?.youtube,
    rights,
  ]);

  return (
    <Modal
      className='footer_modal_form'
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
          <Col xs={12} md={6} className='mb-3'>
            <FormLabel>الوصف</FormLabel>

            <FormGroup>
              <FormControl
                as={'textarea'}
                value={descText}
                placeholder='Enter Link link'
                className='mb-1'
                onChange={(e) => HandleOnChange(e, setDescText)}
              />
            </FormGroup>
          </Col>
          <Col xs={12} md={6} className='mb-3'>
            <h3>اللينكات</h3>

            <FormGroup>
              <FormLabel>فيسبوك : </FormLabel>

              <FormControl
                dir='ltr'
                type='url'
                value={facebookLink}
                placeholder='Enter Link link'
                className='mb-1'
                onChange={(e) => HandleOnChange(e, setFacebookLink)}
              />
              <FormLabel>يوتيوب : </FormLabel>
              <FormControl
                dir='ltr'
                type='url'
                value={youtubeLink}
                placeholder='Enter Link link'
                className='mb-1'
                onChange={(e) => HandleOnChange(e, setYoutubeLink)}
              />
              <FormLabel>لينكدإن : </FormLabel>
              <FormControl
                dir='ltr'
                type='url'
                value={linkedinLink}
                placeholder='Enter Link link'
                className='mb-1'
                onChange={(e) => HandleOnChange(e, setLinkedinLink)}
              />
            </FormGroup>
          </Col>
          <Col md={6} className='mb-3'>
            <FormLabel>اللينكات المهمة</FormLabel>

            <FormGroup>
              <FormLabel>{importantLinkText} : </FormLabel>
              <FormControl
                value={importantLinkText}
                placeholder='Enter Link link'
                className='mb-1'
                onChange={(e) => HandleOnChange(e, setImportantLinkText)}
              />
              <FormLabel>{importantLinkName} : </FormLabel>
              <FormControl
                dir='ltr'
                type='url'
                value={importantLinkName}
                placeholder='Enter Link link'
                className='mb-1'
                onChange={(e) => HandleOnChange(e, setImportantLinkName)}
              />
              <FormLabel>{importantLinkUrl} : </FormLabel>
              <FormControl
                dir='ltr'
                type='url'
                value={importantLinkUrl}
                placeholder='Enter Link link'
                className='mb-1'
                onChange={(e) => HandleOnChange(e, setImportantLinkUrl)}
              />
              <FormLabel>{privacyName} : </FormLabel>
              <FormControl
                value={privacyName}
                placeholder='Enter Link link'
                className='mb-1'
                onChange={(e) => HandleOnChange(e, setPrivacyName)}
              />
              <FormControl
                value={privacyUrl}
                placeholder='Enter Link link'
                className='mb-1'
                onChange={(e) => HandleOnChange(e, setPrivacyUrl)}
                disabled
              />
            </FormGroup>
          </Col>
          <Col md={6} className='mb-3'>
            <FormLabel> حقوق الملكية </FormLabel>

            <FormGroup>
              <FormLabel>{rightsText} : </FormLabel>
              <FormControl
                value={rightsText}
                placeholder='Enter Link link'
                className='mb-1'
                onChange={(e) => HandleOnChange(e, setRightsText)}
              />
            </FormGroup>
          </Col>
        </Row>
        <div
          onClick={() =>
            HandleChangeFooterData(
              {
                logo,
                descText,
                facebookLink,
                youtubeLink,
                linkedinLink,
                importantLinkText,
                importantLinkName,
                importantLinkUrl,
                privacyName,
                privacyUrl,
                rightsText,
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

export default FooterBoardModalForm;
