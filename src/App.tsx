import Interface from './interface/Interface';
import UpperBtn from './components/UpperBtn/UpperBtn';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

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
      <UpperBtn />
      <Interface />
    </>
  );
}

export default App;
