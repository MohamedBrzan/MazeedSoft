import Breadcrumb from 'react-bootstrap/Breadcrumb';
import BreadCrumbType from '../../types/BreadCrumbType';
import { Link } from 'react-router-dom';
import './CustomBreadcrumb.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const CustomBreadCrumb = (props: BreadCrumbType[]) => {
  return (
    <Breadcrumb className='CustomBreadcrumb'>
      <Breadcrumb.Item active>
        <Link to='/'>
          <FontAwesomeIcon icon={faHome} />
        </Link>
      </Breadcrumb.Item>
      {Object.values(props).map(({ name, active, link }, index) =>
        active ? (
          <Breadcrumb.Item active key={index}>
            <Link to={`${link}`}>{name}</Link>
          </Breadcrumb.Item>
        ) : (
          <Breadcrumb.Item key={index}>{name}</Breadcrumb.Item>
        )
      )}
    </Breadcrumb>
  );
};

export default CustomBreadCrumb;
