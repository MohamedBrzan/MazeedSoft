import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.scss';
import VideoPage from '../VideoPage/VideoPage';
import { useGetHomeDataQuery } from '../../store/apis/HomeApi';

const Home = () => {
  const { data, isLoading, isFetching, isError } = useGetHomeDataQuery();

  return (
    <>
      {isLoading || isFetching ? (
        'Loading...'
      ) : isError ? (
        'Error :('
      ) : (
        <article className='home'>
          <section className='intro_img'>
            <Row>
              <Col className='content'>
                <p>{data.introText.first}</p>
                <p>{data.introText.second}</p>
                <p>{data.introText.third}</p>

                <Link to='/call_us' className='form_btn'>
                  {data.btn}
                </Link>
              </Col>
              <Col className='truth_signature'>
                <h6> {data.signature}</h6>
              </Col>
            </Row>
          </section>
          <section className='manage_numbers'>
            <h2>{data.advice.title}</h2>
            <p> {data.advice.desc_one} </p>
            <p> {data.advice.desc_two} </p>
          </section>
          <section className='ready_control'>
            <h2>
              {data.askForm.title_one} <br /> {data.askForm.title_two}
            </h2>
            <span className='get_now'>{data.askForm.offer} </span>

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
                  {data.askForm.btn}
                </Button>
              </Form>
            </Container>
          </section>
          <VideoPage />
        </article>
      )}
    </>
  );
};

export default Home;
