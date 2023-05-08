import Home from './pages/Home/Home';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import UpperBtn from './components/UpperBtn/UpperBtn';
import WhatsAppBtn from './components/WhatsAppBtn/WhatsAppBtn';
import Features from './pages/Features/Features';
import AboutUs from './pages/AboutUs/AboutUs';
import VideoPage from './pages/VideoPage/VideoPage';
import CallUs from './pages/CallUs/CallUs';
import Privacy from './pages/Privacy/Privacy';
import BetaVersion from './pages/BetaVersion/BetaVersion';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import Admin from './admin/Admin';

window.onscroll = () => {
  if (window.scrollY >= 100) {
    document.getElementById('upper_btn')?.classList.add('active');
  } else {
    document.getElementById('upper_btn')?.classList.remove('active');
  }
};

function App() {
  const location = useLocation();

  if (location.pathname === '/' || location.pathname === '/program_features') {
    localStorage.setItem('card', JSON.stringify({}));
  }

  if (location.pathname === '/aram_tech/admin_control/dashboard') {
    [
      'header_link',
      'home_data',
      'about_us',
      'call_us',
      'features',
      'testimonials',
      'footer',
    ].map((name) => localStorage.setItem(name, JSON.stringify({})));
  }

  return (
    <>
      {location.pathname !== '/aram_tech/admin_control/dashboard' && <Header />}

      <UpperBtn />

      {location.pathname !== '/aram_tech/admin_control/dashboard' && (
        <WhatsAppBtn />
      )}
      <main>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='/program_features'>
              <Route index element={<Features />} />
            </Route>
            <Route path='/about_us' element={<AboutUs />} />
            <Route path='/video' element={<VideoPage />} />
            <Route path='/call_us' element={<CallUs />} />
            <Route path='/privacy' element={<Privacy />} />
            <Route path='/beta_version' element={<BetaVersion />} />
            <Route
              path='/aram_tech/admin_control/dashboard'
              element={<Admin />}
            />
          </Route>
        </Routes>
      </main>

      {location.pathname !== '/aram_tech/admin_control/dashboard' && (
        <Testimonials />
      )}
      {location.pathname !== '/aram_tech/admin_control/dashboard' && <Footer />}
    </>
  );
}

export default App;
