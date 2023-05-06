import Interface from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

window.onscroll = () => {
  if (window.scrollY >= 100) {
    document.getElementById('upper_btn')?.classList.add('active');
  } else {
    document.getElementById('upper_btn')?.classList.remove('active');
  }
};
function App() {
  return (
    <>
      <Interface />
    </>
  );
}

export default App;
