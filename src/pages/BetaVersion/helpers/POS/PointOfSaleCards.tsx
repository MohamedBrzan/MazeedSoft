import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const PointOfSaleCards = () => {
  return (
    <>
      <tr className='main_color'>
        <td colSpan={3}>
          <h5>
            <strong> نقاط البيع</strong>
          </h5>
        </td>
      </tr>
      <tr className='secondary_color'>
        <td colSpan={3}>
          <h5>
            <strong> بطاقات نقاط البيع</strong>
          </h5>
        </td>
      </tr>
      <tr>
        <td>
          <h6>
            <strong>نقطة البيع</strong>
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
            <strong> بطاقات نقطة البيع</strong>
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
            <strong> خيارات نقطة البيع</strong>
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
            <strong> بطاقة قسم - نقطة البيع</strong>
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
            <strong> بطاقة مجموعة - نقطة البيع</strong>
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
            <strong>بطاقة طريقة دفع - نقطة البيع</strong>
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
            <strong>بطاقة لوحة الأزرار</strong>
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
            <strong> بطاقة محطة نقطة البيع</strong>
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
            <strong> بطاقة مستخدم نقطة البيع</strong>
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
            <strong> بطاقة سائق</strong>
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

export default PointOfSaleCards;
