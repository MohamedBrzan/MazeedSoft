import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const PointOfSaleReports = () => {
  return (
    <>
      <tr className='secondary_color'>
        <td colSpan={3}>
          <h5>
            <strong>تقارير نقطة البيع</strong>
          </h5>
        </td>
      </tr>
      <tr>
        <td>
          <h6>
            <strong> حركة الطلبات حسب طرق الدفع</strong>
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
            <strong> حركة المواد حسب الوحدات</strong>
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
            <strong>تقرير إغلاق الصندوق</strong>
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
            <strong> تقرير الطلبات</strong>
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
            <strong> تقرير إحصائيات نقطة البيع</strong>
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

export default PointOfSaleReports;
