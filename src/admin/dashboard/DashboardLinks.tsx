const DashboardLinks = () => {
   const handleClick = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    document
      .querySelectorAll('.dashboard .links li.link_item')
      .forEach((ele) => ele.classList.remove('active'));

    const li = e.target as HTMLLIElement;

    li.classList.add('active');

    document
      .querySelectorAll('.dashboard .dashboard_section')
      .forEach((ele) => {
        ele.classList.remove('active');

        if (ele.getAttribute('id') === li.getAttribute('data-board')) {
          ele.classList.add('active');
          li.classList.add('active');
        }
      });
  };
  return (
    <ul className='list-unstyled links'>
      <li
        className='link_item active'
        data-board='header'
        onClick={handleClick}
      >
        Header
      </li>
      <li className='link_item' data-board='home' onClick={handleClick}>
        Home
      </li>
      <li className='link_item' data-board='features' onClick={handleClick}>
        Features
      </li>
      <li className='link_item' data-board='about_us' onClick={handleClick}>
        About Us
      </li>
      {/* <li
     className='link_item'
     data-board='beta_version'
     onClick={handleClick}
   >
     Beta version
   </li> */}
      <li className='link_item' data-board='call_us' onClick={handleClick}>
        Call Us
      </li>
      {/* <li className='link_item' data-board='links' onClick={handleClick}>
     Links
   </li> */}
      <li className='link_item' data-board='testimonials' onClick={handleClick}>
        Testimonials
      </li>
      <li className='link_item' data-board='footer' onClick={handleClick}>
        Footer
      </li>
    </ul>
  );
};

export default DashboardLinks;
