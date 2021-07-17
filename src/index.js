import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import customTheme from "./utils/theme";


ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider theme={customTheme}>
            <ColorModeScript initialColorMode="dark"></ColorModeScript>
            <App />
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById('root'));
