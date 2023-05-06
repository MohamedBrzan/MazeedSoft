import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const SerialNumbers = () => {
  return (
    <>
      <tr className='secondary_color'>
        <td colSpan={3}>
          <h5>
            <strong> تقارير الأرقام التسلسلية</strong>
          </h5>
        </td>
      </tr>
      <tr>
        <td>
          <h6>
            <strong>حركة رقم تسلسلي</strong>
          </h6>
        </td>
        <td>
          <FontAwesomeIcon icon={faCheck} size='2xl' color='green' />
        </td>
        <td>
          <FontAwesomeIcon icon={faCheck} size='2xl' color='green' />
        </td>
      </tr>
      <tr>
        <td>
          <h6>
            <strong> جرد الأرقام التسلسلسية</strong>
          </h6>
        </td>
        <td>
          <FontAwesomeIcon icon={faTimes} size='2xl' color='red' />
        </td>
        <td>
          <FontAwesomeIcon icon={faCheck} size='2xl' color='green' />
        </td>
      </tr>
      <tr>
        <td>
          <h6>
            <strong>حركة إجمالي الأرقام التسلسلية</strong>
          </h6>
        </td>
        <td>
          <FontAwesomeIcon icon={faTimes} size='2xl' color='red' />
        </td>
        <td>
          <FontAwesomeIcon icon={faCheck} size='2xl' color='green' />
        </td>
      </tr>
      <tr>
        <td>
          <h6>
            <strong>أرباح الأرقام التسلسلية</strong>
          </h6>
        </td>
        <td>
          <FontAwesomeIcon icon={faTimes} size='2xl' color='red' />
        </td>
        <td>
          <FontAwesomeIcon icon={faCheck} size='2xl' color='green' />
        </td>
      </tr>
      <tr>
        <td>
          <h6>
            <strong>مقارنة جرد الأرقام التسلسلية</strong>
          </h6>
        </td>
        <td>
          <FontAwesomeIcon icon={faTimes} size='2xl' color='red' />
        </td>
        <td>
          <FontAwesomeIcon icon={faCheck} size='2xl' color='green' />
        </td>
      </tr>
    </>
  );
};

export default SerialNumbers;
