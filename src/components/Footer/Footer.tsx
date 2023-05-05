import Stack from 'react-bootstrap/Stack';
import Col from 'react-bootstrap/Col';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import { LogoType } from '../../main';
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks';

const Footer = (props: LogoType) => {
  const { logo } = props;

  return (
    <footer>
      <Stack direction='horizontal' gap={5} className='p-5'>
        <Col xs={12} md={6} lg={4}>
          <figure>
            <img src={logo} alt='Website Logo.' width={100} />
          </figure>
          <p>
            شركة آرام تك هو المزود الرائد لحلول البرمجيات وتطوير الشبكة . تأسست
            آرام تك في نهاية عام 2017.
          </p>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <h4>وسائل التواصل</h4>
          <SocialMediaLinks size={50} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <h4>روابط مهمة</h4>
          <p>
            موقعنا الرسمي <Link to='https://www.arambs.com'>arambs.com</Link>{' '}
          </p>
          <p>
            <Link to='/privacy'>Privacy Policy</Link>
          </p>
        </Col>
      </Stack>
      <hr />
      <div className='text-center'>
        <FontAwesomeIcon icon={faCopyright} />
        <span className='px-1'>كل الحقوق محفوظة</span>
        {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
