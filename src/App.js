import React from 'react';
import { Flex } from "@chakra-ui/layout";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Header from './components/Header';
import Footer from './components/Footer';
import Resume from './components/pages/Resume';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';


function App() {
  return (
    <Router>
      <Flex
      direction="column"
      align="center"
      maxW={{ xl: "1200px" }}
      m="0 auto"
    >
          <Header />
          <main>
            <Switch>
            <Route exact path = "/" component = {About}/>
             <Route path = "/portfolio" component = {Portfolio}/>
               <Route path = "/resume" component = {Resume}/>
               <Route path = "/contact" component = {Contact}/>
            </Switch>
          </main>
          <Footer />
        </Flex>
    </Router>
  );
};

export default App;






