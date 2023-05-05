import Interface from './pages/Interface/Interface';
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
      <Interface />
    </>
  );
}

export default App;
