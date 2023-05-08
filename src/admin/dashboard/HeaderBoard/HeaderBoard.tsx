import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import { Card, Col, FormControl, Row } from 'react-bootstrap';
import HeaderInterface from '../../../interfaces/Header';
import HeaderModalForm from './HeaderModalForm';
import ModalProps from '../../../types/ModalProps';
import { useState } from 'react';
import { useGetHeaderDataQuery } from '../../../store/apis/HeaderApi';

const HeaderBoard = () => {
  const handleClick = ({ id, title, link }: HeaderInterface) => {
    window.localStorage.setItem(
      'header_link',
      JSON.stringify({ id, title, link })
    );
    onShow();
  };

  const { data, isLoading, isFetching, isError } = useGetHeaderDataQuery();

  const [modalShow, setModalShow] = useState<boolean>(false);
  const onShow = () => setModalShow(true);
  const onHide = () => setModalShow(false);

  const props: ModalProps = {
    onHide,
    modalShow,
  };

  return (
    <section className='dashboard_section active header' id='header'>
      <Form dir='rtl'>
        {isLoading || isFetching ? (
          'Loading...'
        ) : isError ? (
          'Error :('
        ) : (
          <Row className='py-2'>
            {Object.values(data).map(({ id, title, link }, index: number) => (
              <Col md={6} key={index} className='mb-3'>
                <Card>
                  <Card.Body>
                    <FormGroup>
                      <FormLabel>{title} : </FormLabel>
                      <FormControl
                        value={title}
                        placeholder='Enter Link title'
                        className='mb-1'
                        disabled
                      />

                      <FormControl
                        value={link}
                        placeholder='Enter Link link'
                        className='mb-1'
                        dir='ltr'
                        disabled
                      />
                    </FormGroup>
                  </Card.Body>
                  <Card.Footer>
                    <div
                      className='btn form_btn'
                      onClick={() => handleClick({ id, title, link })}
                    >
                      تحديث
                    </div>
                  </Card.Footer>
                </Card>
                <HeaderModalForm {...props} />
              </Col>
            ))}
          </Row>
        )}
      </Form>
    </section>
  );
};

export default HeaderBoard;
