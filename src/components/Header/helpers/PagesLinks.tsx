import { NavLink } from 'react-router-dom';

import { header } from '../../../../db/db.json';

const PagesLinks = () => {
  const handleClick: any = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const elements = document.querySelectorAll('.links li.link');

    elements.forEach((link) => {
      link.classList.remove('active');
    });

    const ele = (e.target as HTMLAnchorElement).parentElement as HTMLElement;

    ele.classList.add('active');
  };

  return (
    <ul className='list-unstyled links'>
      {header.map(({ link, title }, index) => (
        <NavLink to={link} onClick={handleClick} key={index}>
          <li className='link'>{title}</li>
        </NavLink>
      ))}
    </ul>
  );
};

export default PagesLinks;
