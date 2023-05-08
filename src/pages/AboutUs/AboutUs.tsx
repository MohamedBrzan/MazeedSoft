import { Col, Container, Row } from 'react-bootstrap';
import './AboutUs.scss';
import { useGetAboutUsDataQuery } from '../../store/apis/AboutUsApi';

const AboutUs = () => {
  const { data, isLoading, isFetching, isError } = useGetAboutUsDataQuery();

  return (
    <section className='about_us'>
      <Container className='py-5'>
        {isLoading || isFetching ? (
          'Loading...'
        ) : isError ? (
          'Error :('
        ) : (
          <Row className='justify-content-center align-items-center'>
            <Col xs={12} md={6}>
              <figure>
                <img
                  src={data.image}
                  alt=''
                  width='100%'
                  height={600}
                  loading='lazy'
                />
              </figure>
            </Col>
            <Col xs={12} md={6}>
              <h2 className='mb-3'>
                <strong> {data.title}</strong>{' '}
              </h2>
              <p>{data.desc}</p>
              <p>
                <span>
                  <strong>{data.mission.title} : </strong>
                  {data.mission.desc}
                </span>
              </p>
              <p>
                <span>
                  <strong>{data.vision.title} : </strong>
                  {data.vision.desc}
                </span>
              </p>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
};

export default AboutUs;
