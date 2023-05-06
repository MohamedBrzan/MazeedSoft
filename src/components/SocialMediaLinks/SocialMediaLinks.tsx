import { BsFacebook } from 'react-icons/bs';
import './SocialMediaLinks.scss';
import { AiFillYoutube, AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { footer } from '../../../db/db.json';

export type SocialMediaIconsSize = {
  size: number;
};

const SocialMediaLinks = (props: SocialMediaIconsSize) => {
  const { size } = props;
  const { facebook, youtube, linkedin } = footer.links;
  return (
    <div className='social_media_links'>
      <Link to={facebook}>
        <BsFacebook size={size} />
      </Link>
      <Link to={youtube}>
        <AiFillYoutube size={size} />
      </Link>
      <Link to={linkedin}>
        <AiFillLinkedin size={size} />
      </Link>
    </div>
  );
};

export default SocialMediaLinks;
