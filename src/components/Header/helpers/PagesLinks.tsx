import { NavLink } from 'react-router-dom';

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
      <NavLink to='/' onClick={handleClick}>
        <li className='link active'>الرئيسية</li>
      </NavLink>
      <NavLink to='/program_features' onClick={handleClick}>
        <li className='link'>مزايا البرنامج</li>
      </NavLink>
      <NavLink to='/about_us' onClick={handleClick}>
        <li className='link'>من نحن</li>
      </NavLink>
      <NavLink to='/try_beta' onClick={handleClick}>
        <li className='link'>الحصول على النسخة التجريبية</li>
      </NavLink>
      <NavLink to='/video' onClick={handleClick}>
        <li className='link'>شاهد الفيديو</li>
      </NavLink>
      <NavLink to='/testimonials' onClick={handleClick}>
        <li className='link'>آراء العملاء</li>
      </NavLink>
      <NavLink to='/call_us' onClick={handleClick}>
        <li className='link'>اتصل بنا</li>
      </NavLink>
      <NavLink to='/privacy' onClick={handleClick}>
        <li className='link'>سياسة الخصوصية</li>
      </NavLink>
    </ul>
  );
};

export default PagesLinks;
