import { useEffect } from 'react';
import './Admin.scss';
import Dashboard from './dashboard/Dashboard';

const Admin = () => {
  useEffect(() => {
    localStorage.setItem('card', JSON.stringify({}));
    localStorage.setItem('header_link', JSON.stringify({}));
  }, []);

  return (
    <article className='admin' dir='ltr'>
      <Dashboard />
    </article>
  );
};

export default Admin;
