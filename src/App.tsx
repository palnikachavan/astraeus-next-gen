import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Vajra from './pages/Vajra';
import Minerva from './pages/Minerva';
import BugBounty from './pages/BugBounty';
import Contact from './pages/Contact';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/Terms';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="vajra" element={<Vajra />} />
          <Route path="minerva" element={<Minerva />} />
          <Route path="bug-bounty" element={<BugBounty />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<TermsAndConditions />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;