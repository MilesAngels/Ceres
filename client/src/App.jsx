import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from 'react-router-dom';

import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/DashBoard';
import PlantProfile from './components/PlantProfile';

import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/plant-profile" element={<PlantProfile />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
