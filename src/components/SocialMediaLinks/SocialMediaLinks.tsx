import { BsFacebook } from 'react-icons/bs';
import './SocialMediaLinks.scss';
import { AiFillYoutube, AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export type SocialMediaIconsSize = {
  size: number;
};

const SocialMediaLinks = (props: SocialMediaIconsSize) => {
  const { size } = props;
  return (
    <div className='social_media_links'>
      <Link to='https://web.facebook.com/almanarasoft?_rdc=1&_rdr'>
        <BsFacebook size={size} />
      </Link>
      <Link to='https://www.youtube.com/c/Almanarasoft'>
        <AiFillYoutube size={size} />
      </Link>
      <Link to='https://www.linkedin.com/company/almanarasoft/'>
        <AiFillLinkedin size={size} />
      </Link>
    </div>
  );
};

export default SocialMediaLinks;
