import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sellers = () => {
  return (
    <>
      <tr className='secondary_color'>
        <td colSpan={3}>
          <h5>
            <strong> البائعين</strong>
          </h5>
        </td>
      </tr>
      <tr>
        <td>
          <h6>
            <strong> دليل البائعين</strong>
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
            <strong> بطاقة عمولة بائع</strong>
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
            <strong> تقرير عمولات البائعين</strong>
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
            <strong> حركة إجمالي البائعين</strong>
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

export default Sellers;
