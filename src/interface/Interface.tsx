import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './Interface.scss';
import { Col, Container, Row } from 'react-bootstrap';

const Interface = () => {
  return (
    <article className='interface'>
      <section className='intro_img'>
        <Row className='m-0 p-0'>
          <Col xs={12} md={6} className='content'>
            <p> برنامج المنارة</p>
            <p> للمحاسبة </p>
            <p> و المستودعات.</p>

            <Link to='/call_us' className='form_btn'>
              تواصل معنا
            </Link>
          </Col>
          <Col xs={12} md={6} className='truth_signature'>
            <h6>
              {' '}
              معتمد من قبل هيئة <br />
              الزكاة والضريبة
            </h6>
          </Col>
        </Row>
      </section>
      <section className='manage_numbers'>
        <h2>لا يجب أن تكون إدارة جانب الأرقام في عملك صعبًا أو مرهقًا.</h2>
        <p>
          مع الأنظمة الصحيحة والتوجيه المناسب ، يمكن أن تكون إدارة الشؤون
          المالية لأعمالك أمرًا مُمكِّنًا.
        </p>
        <p>
          فبدلاً من الشعور بأنك تتفوق عليه ، ستشعر بالسيطرة على أموالك ويمكنك
          اتخاذ قرارات أفضل بشأن عملك.
        </p>
      </section>
      <section className='ready_control'>
        <h2>
          هل أنت مستعد للتحكم في الشؤون المالية لشركتك
          <br /> والتخلص من ضغوط الوقت الضريبي؟
          <br />
        </h2>
        <span className='get_now'>إحصل على النسخة التجريبية الأن</span>

        <Container className='form_container'>
          <Form>
            <Row>
              <Col xs={12} md={7}>
                <FormGroup className='mb-3'>
                  <FormControl
                    aria-label='name form control'
                    name='name'
                    placeholder='الإســـم *'
                    required
                  />
                </FormGroup>
              </Col>
              <Col xs={12} md={7}>
                <FormGroup className='mb-3'>
                  <FormControl
                    aria-label='phone form control'
                    type='number'
                    name='phone'
                    placeholder='رقـــم الجـــوال *'
                    required
                  />
                </FormGroup>
              </Col>
              <Col xs={12} md={7}>
                <FormGroup className='mb-3'>
                  <FormControl
                    aria-label='email form control'
                    type='email'
                    name='email'
                    placeholder='البريــد الإلكتـــرونى *'
                    required
                  />
                </FormGroup>
              </Col>
              <Col xs={12} md={7}>
                <FormGroup className='mb-3'>
                  <FormControl
                    aria-label='city form control'
                    name='city'
                    placeholder='المــــديـــنة *'
                    required
                  />
                </FormGroup>
              </Col>
              <Col xs={12} md={7}>
                <FormGroup className='mb-3'>
                  <FormControl
                    aria-label='activity form control'
                    name='activity'
                    placeholder='النــشــــاط ( إختيارى )'
                  />
                </FormGroup>
              </Col>
            </Row>
            <Button type='submit' className='form_btn'>
              إطلبها الأن
            </Button>
          </Form>
        </Container>
      </section>
    </article>
  );
};

export default Interface;
