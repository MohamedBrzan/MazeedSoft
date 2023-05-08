import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Rating from '../Rating/Rating';
import { Card, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { testimonials } from '../../../db/db.json';
import './Testimonials.scss';

const Testimonials = () => {
  return (
    <div className='testimonials'>
      <Container>
        <div className='title'>
          <h3>أراء العملاء</h3>
          <div className='line'></div>
        </div>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className='mySwiper'
          slidesPerView={2}
        >
          <Row>
            {testimonials.map(({ name, rate, desc }, index) => (
              <Col key={index}>
                <SwiperSlide className='content_col'>
                  <Card>
                    <Card.Header>
                      <Card.Title>{name}</Card.Title>
                    </Card.Header>
                    <Card.Body>
                      <p className='desc'>{desc}</p>
                    </Card.Body>
                    <Card.Footer>
                      <Rating rate={rate} />
                    </Card.Footer>
                  </Card>
                </SwiperSlide>
              </Col>
            ))}
          </Row>
        </Swiper>
      </Container>
    </div>
  );
};

export default Testimonials;
