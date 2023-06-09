import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';

import './CallUs.scss';
import { Button, FormLabel } from 'react-bootstrap';
import { useGetCallUsDataQuery } from '../../store/apis/CallUsApi';

const CallUs = () => {
  const { data, isLoading, isFetching, isError } = useGetCallUsDataQuery();
  return (
    <section className='call_us'>
      {isLoading || isFetching ? (
        'Loading...'
      ) : isError ? (
        'Error'
      ) : (
        <Row className='m-0 p-0 justify-content-center align-items-center'>
          <Col md={6}>
            <h2>
              <strong> {data.title} </strong>
            </h2>
            <p> {data.desc} </p>
          </Col>
          <Col md={6}>
            <Form>
              <div className='h6'>
                الإسم <span className='text-muted'>( إجبارى )</span>
              </div>
              <FormGroup className='my-3'>
                <Row>
                  <Col xs={12} md={6}>
                    <FormLabel>الإسم الأول</FormLabel>
                    <FormControl
                      type='text'
                      aria-label='First Name Input'
                      placeholder='الإسم الأول'
                      required
                    />
                  </Col>
                  <Col xs={12} md={6}>
                    <FormLabel>الإسم الأخير</FormLabel>
                    <FormControl
                      type='text'
                      aria-label='Last Name Input'
                      placeholder='الإسم الأخير'
                      required
                    />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup className='my-3'>
                <Row>
                  <Col xs={12} md={6} className='my-3'>
                    <FormLabel>
                      البريد الإلكترونى{' '}
                      <span className='text-muted'>( إجبارى )</span>
                    </FormLabel>
                    <FormControl
                      type='text'
                      aria-label='E-Mail Input'
                      placeholder='البريد الإلكترونى'
                      required
                    />
                  </Col>
                  <Col xs={12} md={6} className='my-3'>
                    <FormLabel>
                      رقم الهاتف <span className='text-muted'>( إجبارى )</span>
                    </FormLabel>
                    <FormControl
                      type='number'
                      aria-label='Phone Input'
                      placeholder='رقم الهاتف'
                      required
                    />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup className='my-3'>
                <FormLabel>
                  الرسالة <span className='text-muted'>( إجبارى )</span>
                </FormLabel>
                <FormControl
                  as='textarea'
                  rows={10}
                  aria-label='Message Input'
                  placeholder='الرسالة'
                  required
                />
              </FormGroup>
              <Button type='submit' className='page_form_btn'>
                إرسل
              </Button>
            </Form>
          </Col>
        </Row>
      )}
    </section>
  );
};

export default CallUs;
