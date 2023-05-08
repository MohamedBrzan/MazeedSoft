import { NavLink } from 'react-router-dom';
import { useGetHeaderDataQuery } from '../../../store/apis/HeaderApi';
const PagesLinks = () => {
  const { data, isFetching, isLoading, isError } = useGetHeaderDataQuery();

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
      {isFetching || isLoading
        ? 'Loading...'
        : isError
        ? 'Error :('
        : data.map(({ link, title }, index: number) => (
            <NavLink to={link} onClick={handleClick} key={index}>
              <li className='link'>{title}</li>
            </NavLink>
          ))}
    </ul>
  );
};

export default PagesLinks;
