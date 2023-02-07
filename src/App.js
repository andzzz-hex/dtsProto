import './styles.css';
// router
import {createBrowserRouter, RouterProvider, } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import FindPatient from "./routes/findpatient";
// material ui
import Button from '@mui/material/Button';
import 'material-symbols';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Header from './components/header';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "findpatient",
    element: <FindPatient />
  }
]);

function App() {
  return (
    <body>
        <RouterProvider router={router} />
        <div className='conteudo'>
        <div className="topo">
          <Header />
          </div>
        <hr></hr>
 
        <div className="maindiv"><h1>second block</h1></div>
        <Grid container sx={{ color: "text.primary" }} >
        <Grid item xs={20}>
      </Grid>
    </Grid>
        
        </div>
    </body>
  

  );
}

export default App;
