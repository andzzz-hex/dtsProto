import './styles.css';
// router .. import route.js for each screen! 
import { Routes, Route} from 'react-router-dom';
import Dashboard from "./routes/dashboard";
import Findpatient from "./routes/findpatient";
// material ui
import 'material-symbols';

import ErrorPage from "./error-page";

// app = all routes (pages) to cycle through 
function App() {
  return (
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='findpatient' element={<Findpatient />} />
      </Routes>
  );
}

export default App;



