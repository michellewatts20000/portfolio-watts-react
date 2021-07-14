import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavTabs from "./components/NavTabs";


function App() {
  return (
    <div>
      <NavTabs />
      <Header />
      <PortfolioContainer />
      <Footer />
    </div>
  );
}


export default App;
