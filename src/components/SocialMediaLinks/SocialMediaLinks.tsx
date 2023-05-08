import { BsFacebook } from 'react-icons/bs';
import './SocialMediaLinks.scss';
import { AiFillYoutube, AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useGetFooterDataQuery } from '../../store/apis/FooterApi';

export type SocialMediaIconsSize = {
  size: number;
};

const SocialMediaLinks = (props: SocialMediaIconsSize) => {
  const { size } = props;
  const { data, isLoading, isFetching, isError } = useGetFooterDataQuery();
  return (
    <>
      {isLoading || isFetching ? (
        'Loading...'
      ) : isError ? (
        'Error :('
      ) : (
        <div className='social_media_links'>
          <Link to={data.links.facebook}>
            <BsFacebook size={size} />
          </Link>
          <Link to={data.links.youtube}>
            <AiFillYoutube size={size} />
          </Link>
          <Link to={data.links.linkedin}>
            <AiFillLinkedin size={size} />
          </Link>
        </div>
      )}
    </>
  );
};

export default SocialMediaLinks;
