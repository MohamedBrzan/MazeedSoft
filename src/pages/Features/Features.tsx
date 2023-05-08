import { useState } from 'react';
import CardType from '../../interfaces/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { features } from '../../../db/db.json';
import CardInterface from '../../interfaces/Card';
import ModalProps from '../../types/ModalProps';

import './Features.scss';
import ShowCard from '../../components/ShowCard/ShowCard';

const Features = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const onShow = () => setModalShow(true);
  const onHide = () => setModalShow(false);

  const props: ModalProps = {
    onHide,
    modalShow,
  };

  const handleLocalStorage = ({ id, image, title, desc }: CardInterface) => {
    window.localStorage.setItem(
      'card',
      JSON.stringify({ id, image, title, desc })
    );
    onShow();
  };

  return (
    <section className='feature'>
      <Container>
        <Row>
          {features.map(
            ({ id, image, title, desc }: CardType, index: number) => (
              <Col
                xs={12}
                md={6}
                lg={4}
                xl={3}
                className='custom_card'
                key={index}
                onClick={() => handleLocalStorage({ id, image, title, desc })}
              >
                <figure>
                  <img src={image} alt={title} loading='lazy' />
                </figure>
                <div className='my_card_body'>
                  <h4 title={title}>{title}</h4>
                  <p title={desc}>{desc}</p>
                  <div className='card_btn' onClick={onShow}>
                    إقرا المزيد...
                  </div>
                </div>
                <ShowCard {...props} />
              </Col>
            )
          )}
        </Row>
        <ShowCard {...props} />
      </Container>
    </section>
  );
};

export default Features;
