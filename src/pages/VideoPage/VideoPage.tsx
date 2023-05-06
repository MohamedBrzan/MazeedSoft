import Container from 'react-bootstrap/Container';
import { Player } from 'video-react';
import { video } from '../../../db/db.json';
import './VideoPage.scss';

const VideoPage = () => {
  return (
    <section className='videoPage'>
      <Container>
        <Player playsInline poster='/Aram-Tech-PNG.png' src={video} />
      </Container>
    </section>
  );
};

export default VideoPage;
