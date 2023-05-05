import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx';
import logo from './assets/Aram-Tech-PNG.png';

export type LogoType = {
  logo: string;
};

const data: LogoType = {
  logo,
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header {...data} />
      <main>
        <Routes>
          <Route path='/'>
            <Route index element={<App />} />
          </Route>
        </Routes>
      </main>
      <Footer {...data} />
    </BrowserRouter>
  </React.StrictMode>
);
