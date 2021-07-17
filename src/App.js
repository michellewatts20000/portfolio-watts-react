import React from 'react';
import { VStack, Stack } from "@chakra-ui/layout";
import {
  BrowserRouter as Router,
  Switch,
  Route
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
      <VStack>
        <Stack p={5}>
          <Header />
          <main>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route path="/resume">
                <Resume />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
          </main>
          <Footer />
        </Stack>
      </VStack>
    </Router>
  );
};

export default App;






