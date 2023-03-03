import ReactDOM from "react-dom";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";



import './styles.css';
// router .. import route.js for each screen! 
import { Routes, Route} from 'react-router-dom';
import Dashboard from "./routes/dashboard";
import Findpatient from "./routes/findpatient";
import Profile from "./routes/patientprofile";
// material ui
import 'material-symbols';

import Navigation from './routes/navigation';
import Header from './components/header';
import { HorizontalRule } from "@mui/icons-material";
import Knowledge from "./routes/knowledge";
// app = all routes (pages) to cycle through 

const temaFeno = createTheme ({
  palette: {
    mode: 'light',
    primary: {
      main: '#4bbf9e',
      contrastText: '#364959',
    },
    secondary: {
      main: '#f50057',
    },
    divider: '#cac4d0',
  },
  typography: {
    fontFamily: 'Montserrat',
    fontSize: '12pt',
    h1: {
      fontFamily: 'Montserrat',
      fontSize: '28pt',
      fontWeight: 300,
    },

    h2: {
      fontSize: '20pt',
      fontWeight: 200,
    },
    h3: {
      fontSize: '18pt',
      fontWeight: 100,
    },
    body:{
      fontFamily: 'Montserrat',
      fontSize: '12pt'

    },
    caption:{
      fontSize: '9pt'
    }

  },


})


function App() {
  return (
  <ThemeProvider theme={temaFeno}>

    <>
    <Navigation />
    <Header/> 

  
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='findpatient' element={<Findpatient />} />
        <Route path='patientprofile' element={<Profile />} />
        <Route path='knowledge' element={<Knowledge/>} />
      </Routes>



    </>
  </ThemeProvider>
  );
}

export default App;



