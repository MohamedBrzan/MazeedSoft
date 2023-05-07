import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import './BetaVersion.scss';

import General from './helpers/General';
import Movement from './helpers/Materials/Movement';
import POS from './helpers/POS/POS';
import Accounts from './helpers/Accounts/Accounts';
import { Link, useNavigate } from 'react-router-dom';

const BetaVersion = () => {
  const navigate = useNavigate();

  const ContactWithUs = () => {
    window.scrollTo(0, 0);
    navigate('/call_us');
  };
  return (
    <section className='beta_version'>
      <Container>
        <Table
          border={2}
          bordered
          striped
          hover
          responsive
          className='text-center'
        >
          <thead>
            <tr>
              <th>
                <h3>وجهة المقارنة</h3>
              </th>
              <th>
                <h3>أساسى</h3>
              </th>
              <th>
                <h3>إحترافي</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            <General />
            <Movement />
            <POS />
            <Accounts />
          </tbody>
        </Table>
      </Container>
      <div className='get_btn'>
        <Link
          to='/call_us'
          className='get_now'
          onClick={() => window.scrollTo(0, 0)}
        >
          <span className='get_now'>إطلب النسخة التجريبية المجانية الأن</span>
        </Link>
      </div>
    </section>
  );
};

export default BetaVersion;
