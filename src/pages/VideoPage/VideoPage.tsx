import { Player } from 'video-react';
import './VideoPage.scss';
import { Container } from 'react-bootstrap';

const VideoPage = () => {
  return (
    <section className='videoPage'>
      <Container>
        <Player
          playsInline
          poster='/Aram-Tech-PNG.png'
          src='/فيديو تعريفي عن المنارة لحلول الأعمال.mp4'
        />
      </Container>
    </section>
  );
};

export default VideoPage;
