import { useState } from 'react';
import { Link } from 'react-router-dom';
import CardType from '../../interfaces/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { features } from '../../../db/db.json';

import './CustomCard.scss';
import ShowCard from '../ShowCard/ShowCard';
import Card from '../../interfaces/Card';
import ModalProps from '../../types/ModalProps';

const CustomCard = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const onShow = () => setModalShow(true);
  const onHide = () => setModalShow(false);

  const props: ModalProps = {
    onHide,
    modalShow,
  };

  const handleLocalStorage = ({ id, image, title, desc }: Card) => {
    window.localStorage.setItem(
      'card',
      JSON.stringify({ id, image, title, desc })
    );
    // navigate(`/program_features/${id}`);
  };

  return (
    <section className='my_cards'>
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
                  <Link
                    // to={`program_features/${id}`}
                    to='/program_features'
                    className='card_btn'
                    onClick={onShow}
                  >
                    إقرا المزيد...
                  </Link>
                </div>
                <ShowCard {...props} />
              </Col>
            )
          )}
        </Row>
      </Container>
    </section>
  );
};

export default CustomCard;
