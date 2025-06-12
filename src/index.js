import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/styles/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import { Home,  ContactPage, PageNotFound, BookTime } from './pages/index.js'
import ScrollToTop from '../src/components/ScrollToTop.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <ScrollToTop/>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kontakta-oss" element={<ContactPage />} />
        <Route path="/boka-tid" element={<BookTime />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);