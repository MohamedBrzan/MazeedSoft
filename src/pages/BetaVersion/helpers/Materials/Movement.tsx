import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import Inventory from './Reports/Inventory';
import Analytical from './Reports/Analytical';
import Ages from './Reports/Ages';
import Intersection from './Reports/Intersection';
import SerialNumbers from './Reports/SerialNumbers';
import Customers from './Reports/Customers';

const Movement = () => {
  return (
    <>
      <tr className='main_color'>
        <td colSpan={3}>
          <h5>
            <strong>المواد</strong>
          </h5>
        </td>
      </tr>
      <tr className='secondary_color'>
        <td colSpan={3}>
          <h5>
            <strong>الحركة</strong>
          </h5>
        </td>
      </tr>
      <tr>
        <td>
          <h6>
            <strong>دليل الأصناف</strong>
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
            <strong>دليل المستودعات</strong>
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
            <strong> تقارير الحركة * *</strong>
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
            <strong> تقارير الجرد * *</strong>
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
            <strong> تقارير تحليلية * *</strong>
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
            <strong> تقارير الأرباح </strong>
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
            <strong> تقارير الأعمار</strong>
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
            <strong> الحركة اليومية </strong>
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
            <strong> حركة إجمالي الأصناف </strong>
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
            <strong>حركة إجمالي الفواتير</strong>
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
            <strong>حركة الأصناف والمجموعات</strong>
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
            <strong> الحركة التحليلية</strong>
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
            <strong> حركة المجموعات</strong>
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
            <strong> ملخص الحركة اليومية </strong>
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
            <strong> حركة المناقلات </strong>
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
            <strong> حركة صنف </strong>
          </h6>
        </td>
        <td>
          <FontAwesomeIcon icon={faCheck} size='2xl' color='green' />
        </td>
        <td>
          <FontAwesomeIcon icon={faCheck} size='2xl' color='green' />
        </td>
      </tr>
      <Inventory />
      <Analytical />
      <Ages />
      <Intersection />
      <SerialNumbers />
      <Customers />
    </>
  );
};

export default Movement;
