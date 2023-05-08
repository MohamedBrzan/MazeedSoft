import Container from 'react-bootstrap/Container';
import videoData from '/video.mp4';
import './VideoPage.scss';

const VideoPage = () => {
  return (
    <section className='videoPage'>
      <Container>
        <video width='100%' controls poster='/Aram-Tech-PNG.png'>
          <source src={videoData} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </Container>
    </section>
  );
};

export default VideoPage;
