import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx';
import logo from './assets/Aram-Tech-PNG.png';
import Features from './pages/Features/Features.tsx';
import AboutUs from './pages/AboutUs/AboutUs.tsx';
import Video from './pages/VideoPage/VideoPage.tsx';
import UpperBtn from './components/UpperBtn/UpperBtn.tsx';
import WhatsAppBtn from './components/WhatsAppBtn/WhatsAppBtn.tsx';
import CallUs from './pages/CallUs/CallUs.tsx';
import Privacy from './pages/Privacy/Privacy.tsx';
import BetaVersion from './pages/BetaVersion/BetaVersion.tsx';
import Testimonials from './components/Testimonials/Testimonials.tsx';
import { Provider } from 'react-redux';
import store from './apis/store/store.ts';

export type LogoType = {
  logo: string;
};

const data: LogoType = {
  logo,
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header {...data} />
        <UpperBtn />
        <WhatsAppBtn />
        <main>
          <Routes>
            <Route path='/'>
              <Route index element={<App />} />
              <Route path='/program_features' element={<Features />} />
              <Route path='/about_us' element={<AboutUs />} />
              <Route path='/video' element={<Video />} />
              <Route path='/call_us' element={<CallUs />} />
              <Route path='/privacy' element={<Privacy />} />
              <Route path='/beta_version' element={<BetaVersion />} />
            </Route>
          </Routes>
        </main>
        <Testimonials />
        <Footer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
