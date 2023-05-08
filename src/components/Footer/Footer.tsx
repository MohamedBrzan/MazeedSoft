import Stack from 'react-bootstrap/Stack';
import Col from 'react-bootstrap/Col';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks';
import { useGetFooterDataQuery } from '../../store/apis/FooterApi';

const Footer = () => {
  const { data, isLoading, isFetching, isError } = useGetFooterDataQuery();

  return isLoading || isFetching ? (
    'Loading...'
  ) : isError ? (
    'Error :('
  ) : (
    <footer>
      <Stack direction='horizontal' gap={5} className='p-5'>
        <Col xs={12} md={6} lg={4}>
          <figure>
            <img src={data.logo} alt='Website Logo.' width={100} />
          </figure>
          <p>{data.desc}</p>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <h4>وسائل التواصل</h4>
          <SocialMediaLinks size={50} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <h4>روابط مهمة</h4>
          <p>
            {data.importantLinks.text}
            <Link to={data.importantLinks.link.url}>
              {data.importantLinks.link.name}
            </Link>{' '}
          </p>
          <p>
            <Link to={data.importantLinks.privacy.url}>
              {data.importantLinks.privacy.name}
            </Link>
          </p>
        </Col>
      </Stack>
      <hr />
      <div className='text-center'>
        <FontAwesomeIcon icon={faCopyright} />
        <span className='px-1'>{data.rights}</span>
        {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
