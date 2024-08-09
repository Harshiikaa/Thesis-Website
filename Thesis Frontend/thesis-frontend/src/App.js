import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard';




const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        {/* <Route path="/"> */}
        <Route path="/" element={<Dashboard />} />



        {/* </Route> */}

      </Routes>
    </Router>
  );
}

export default App;