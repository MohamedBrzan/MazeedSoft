import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Currencies = () => {
  return (
    <>
      <tr className='secondary_color'>
        <td colSpan={3}>
          <h5>
            <strong> العملات</strong>
          </h5>
        </td>
      </tr>
      <tr>
        <td>
          <h6>
            <strong> فروقات أسعار الصرف</strong>
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
            <strong> ميزان العملات</strong>
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
            <strong> استيراد نشرة الأسعار</strong>
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
            <strong> دفتر أستاذ عملة</strong>
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
            <strong> أسعار صرف العملات</strong>
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
            <strong> نشرة أسعار العملات</strong>
          </h6>
        </td>
        <td>
          <FontAwesomeIcon icon={faCheck} size='2xl' color='green' />
        </td>
        <td>
          <FontAwesomeIcon icon={faCheck} size='2xl' color='green' />
        </td>
      </tr>
    </>
  );
};

export default Currencies;
