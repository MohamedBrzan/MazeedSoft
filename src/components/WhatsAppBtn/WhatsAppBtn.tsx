import { Link } from 'react-router-dom';
import whatsApp from '/whatsapp.svg';

import './WhatsAppBtn.scss';

const WhatsAppBtn = () => {
  return (
    <Link
      className='whatsApp_btn'
      to='https://api.whatsapp.com/send?phone=966532665664&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7,%20%D8%A7%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D9%86%D8%B8%D8%A7%D9%85%20%D8%A7%D9%84%D9%85%D9%86%D8%A7%D8%B1%D8%A9%20%D9%84%D8%AD%D9%84%D9%88%D9%84%20%D8%A7%D9%84%D8%A3%D8%B9%D9%85%D8%A7%D9%84'
    >
      <figure>
        <img src={whatsApp} alt='' width='100%' />
      </figure>
    </Link>
  );
};

export default WhatsAppBtn;
