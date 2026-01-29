import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/mains.css';

// Components
import Header from './components/Header';
import MainNavbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Management from './pages/Management';
import Jobs from './pages/Jobs';
import Portfolio from './pages/Portfolio';
import TestimonialsPage from './pages/TestimonialsPage'; // renamed
import Contact from './pages/Contact';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <HashRouter>
      <div className="app-wrapper">
        <Header />
        <MainNavbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/management" element={<Management />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
