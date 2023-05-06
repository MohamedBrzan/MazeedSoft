import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faEmptyStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Rating.scss';

type RatingType = {
  rate: number;
};

const Rating = (props: RatingType) => {
  const { rate } = props;
  return (
    <div className='rating'>
      {rate >= 0 && rate < 0.5 ? (
        <>
          <FontAwesomeIcon icon={faEmptyStar} />
          <FontAwesomeIcon icon={faEmptyStar} />
          <FontAwesomeIcon icon={faEmptyStar} />
          <FontAwesomeIcon icon={faEmptyStar} />
          <FontAwesomeIcon icon={faEmptyStar} />
        </>
      ) : rate >= 0.5 && rate < 1 ? (
        <>
          <FontAwesomeIcon icon={faStarHalfAlt} />
          <FontAwesomeIcon icon={faEmptyStar} />
          <FontAwesomeIcon icon={faEmptyStar} />
          <FontAwesomeIcon icon={faEmptyStar} />
          <FontAwesomeIcon icon={faEmptyStar} />
        </>
      ) : rate <= 1 && rate < 1.5 ? (
        <>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faEmptyStar} />
          <FontAwesomeIcon icon={faEmptyStar} />
          <FontAwesomeIcon icon={faEmptyStar} />
          <FontAwesomeIcon icon={faEmptyStar} />
        </>
      ) : rate <= 1.5 && rate < 2 ? (
        <>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStarHalfAlt} />
          <FontAwesomeIcon icon={faEmptyStar} />
          <FontAwesomeIcon icon={faEmptyStar} />
          <FontAwesomeIcon icon={faEmptyStar} />
        </>
      ) : rate <= 2 && rate < 2.5 ? (
        <>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faEmptyStar} />
          <FontAwesomeIcon icon={faEmptyStar} />
          <FontAwesomeIcon icon={faEmptyStar} />
        </>
      ) : rate <= 2.5 && rate < 3 ? (
        <>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStarHalfAlt} />
          <FontAwesomeIcon icon={faEmptyStar} />
          <FontAwesomeIcon icon={faEmptyStar} />
        </>
      ) : rate <= 3 && rate < 3.5 ? (
        <>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faEmptyStar} />
          <FontAwesomeIcon icon={faEmptyStar} />
        </>
      ) : rate <= 3.5 && rate < 4 ? (
        <>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStarHalfAlt} />
          <FontAwesomeIcon icon={faEmptyStar} />
        </>
      ) : rate <= 4 && rate < 4.5 ? (
        <>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faEmptyStar} />
        </>
      ) : rate <= 4.5 && rate < 5 ? (
        <>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStarHalfAlt} />
        </>
      ) : (
        <>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </>
      )}
    </div>
  );
};

export default Rating;
