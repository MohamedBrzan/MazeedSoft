import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { home } from '../../../db/db.json';
import './Home.scss';

const Home = () => {
  const { advice, introText, signature, askForm, btn } = home;
  return (
    <article className='home'>
      <section className='intro_img'>
        <figure></figure>
        <Row>
          <Col className='content'>
            <p>{introText.first}</p>
            <p>{introText.second}</p>
            <p>{introText.third}</p>

            <Link to='/call_us' className='form_btn'>
              {btn}
            </Link>
          </Col>
          <Col className='truth_signature'>
            <h6> {signature}</h6>
          </Col>
        </Row>
      </section>
      <section className='manage_numbers'>
        <h2>{advice.title}</h2>
        <p> {advice.desc_one} </p>
        <p> {advice.desc_two} </p>
      </section>
      <section className='ready_control'>
        <h2>
          {askForm.title_one} <br /> {askForm.title_two}
        </h2>
        <span className='get_now'>{askForm.offer} </span>

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
              {askForm.btn}
            </Button>
          </Form>
        </Container>
      </section>
    </article>
  );
};

export default Home;
