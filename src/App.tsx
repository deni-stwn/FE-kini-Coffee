import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/about';
import { Contact } from './pages/contact';
import Home from './pages/home';
import KopiSepeda from './pages/kopiSepeda';
import ScrollToTop from './component/scroolToTop';
import NotFound from './pages/NotFoundPage';
import DetailArticle from './component/articlesComponent/articleDetail';

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/kopiSepeda" element={<KopiSepeda />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/article/:title" element={<DetailArticle />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
