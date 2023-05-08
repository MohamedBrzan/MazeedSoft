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
  useGetFooterDataQuery,
  useUpdateFooterDataMutation,
} from '../../../store/apis/FooterApi';

const FooterBoardModalForm = (props: ModalProps) => {
  const { modalShow, onHide } = props;

  const { data, isLoading, isFetching, isError, refetch } =
    useGetFooterDataQuery();
  const [updateFooterData] = useUpdateFooterDataMutation();

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
    setDescText(data?.desc);
    setFacebookLink(data?.links?.facebook);
    setYoutubeLink(data?.links?.youtube);
    setLinkedinLink(data?.links?.linkedin);
    setImportantLinkText(data?.importantLinks?.text);
    setImportantLinkName(data?.importantLinks?.link?.name);
    setImportantLinkUrl(data?.importantLinks?.link?.url);
    setPrivacyName(data?.importantLinks?.privacy?.name);
    setPrivacyUrl(data?.importantLinks?.privacy?.url);
    setRightsText(data?.rights);
  }, [
    data?.desc,
    data?.importantLinks?.link?.name,
    data?.importantLinks?.link?.url,
    data?.importantLinks?.privacy?.name,
    data?.importantLinks?.privacy?.url,
    data?.importantLinks?.text,
    data?.links?.facebook,
    data?.links?.linkedin,
    data?.links?.youtube,
    data?.rights,
  ]);

  const UpdateIt = async () => {
    const FooterData = {
      logo: data?.logo,
      desc: descText,
      links: {
        facebook: facebookLink,
        youtube: youtubeLink,
        linkedin: linkedinLink,
      },
      importantLinks: {
        text: importantLinkText,
        link: {
          name: importantLinkName,
          url: importantLinkUrl,
        },
        privacy: {
          name: privacyName,
          url: privacyUrl,
        },
      },
      rights: rightsText,
    };

    await updateFooterData(FooterData);
    refetch();
    onHide();
  };

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
        {isLoading || isFetching ? (
          'Loading...'
        ) : isError ? (
          'Error :('
        ) : (
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
        )}
        <div onClick={UpdateIt} className='btn modal_form_btn'>
          تحديث
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default FooterBoardModalForm;
