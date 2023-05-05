import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './UpperBtn.scss';
import { faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons';

const UpperBtn = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='upper_btn' onClick={handleClick} id='upper_btn'>
      <h3>
        <FontAwesomeIcon icon={faLongArrowAltUp} />
      </h3>
    </div>
  );
};

export default UpperBtn;
