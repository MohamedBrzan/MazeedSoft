import Container from 'react-bootstrap/Container';
import Rating from '../Rating/Rating';
import { Card, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import './Testimonials.scss';
import { useGetTestimonialsDataQuery } from '../../store/apis/TestimonialsApi';

const Testimonials = () => {
  const { data, isLoading, isFetching, isError } =
    useGetTestimonialsDataQuery();
  return (
    <div className='testimonials'>
      <Container>
        <div className='title'>
          <h3>أراء العملاء</h3>
          <div className='line'></div>
        </div>
        {isLoading || isFetching ? (
          'Loading...'
        ) : isError ? (
          'Error :('
        ) : (
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
              {data.map(({ name, rate, desc }, index: number) => (
                <SwiperSlide key={index} className='content_col'>
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
              ))}
            </Row>
          </Swiper>
        )}
      </Container>
    </div>
  );
};

export default Testimonials;
