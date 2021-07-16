import React, { useState } from 'react';
import { Stack } from "@chakra-ui/layout";
import NavTabs from './NavTabs';
// import Header from './Header';
import Footer from './Footer';
import Resume from './pages/Resume';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {

    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <Stack p={5}>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* <Header /> */}
      {renderPage()}
      <Footer />
    </Stack>
  );
}
