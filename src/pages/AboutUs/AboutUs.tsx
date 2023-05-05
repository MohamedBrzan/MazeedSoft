import { Col, Container, Row } from 'react-bootstrap';
import AboutUs2 from '../../assets/about_us2.jpg';
import './AboutUs.scss';

const AboutUs = () => {
  return (
    <section className='about_us'>
      <Container className='py-5'>
        <Row className='justify-content-center align-items-center'>
          <Col xs={12} md={6}>
            <figure>
              <img
                src={AboutUs2}
                alt=''
                width='auto'
                height={600}
                loading='lazy'
              />
            </figure>
          </Col>
          <Col xs={12} md={6}>
            <h2 className='mb-3'>
              <strong>من نحن</strong>{' '}
            </h2>
            <p>
              شركة آرام تك هو المزود الرائد لحلول البرمجيات وتطوير الشبكة .
              تأسست آرام تك في نهاية عام 2017.
            </p>
            <p>
              <span>
                <strong>مهمتنا : </strong>توفير أفضل حلول البرمجيات لتناسب
                احتياجات ومتطلبات العملاء.
              </span>
            </p>
            <p>
              <span>
                <strong>رؤيتنا : </strong>تقديم الدعم الفني وخدمات ما بعد البيع
                لتحقيق أعلى المعايير المهنية.
              </span>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
