import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Rating from '../Rating/Rating';
import { Row } from 'react-bootstrap';
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
            delay: 2500,
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
            {testimonials.map(({ image, name, rate, desc }, index) => (
              <SwiperSlide key={index} className='content_col'>
                <Row>
                  <Col>
                    <figure>
                      <img src={image} alt={name} title={name} />
                    </figure>
                  </Col>
                  <Col>
                    <h5>{name}</h5>
                    <Rating rate={rate} />
                  </Col>
                  <p className='desc'>{desc}</p>
                </Row>
              </SwiperSlide>
            ))}
          </Row>
        </Swiper>
      </Container>
    </div>
  );
};

export default Testimonials;
