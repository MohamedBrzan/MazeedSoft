import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const Intersection = () => {
  return (
    <>
      <tr className='secondary_color'>
        <td colSpan={3}>
          <h5>
            <strong> التقارير التقاطعية</strong>
          </h5>
        </td>
      </tr>
      <tr>
        <td>
          <h6>
            <strong>حركة المواد حسب الفواتير</strong>
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
            <strong>حركة المواد حسب الزبائن</strong>
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
            <strong>حركة المواد حسب الأسعار</strong>
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
            <strong>حركة المواد حسب المستودعات</strong>
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
            <strong>حركة المواد حسب تاريخ الصلاحية</strong>
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

export default Intersection;
