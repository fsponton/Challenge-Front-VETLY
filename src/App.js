import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './pages/login';
import Home from './pages/home';
import AutomaticNewAccount from './pages/automatic-new-account';
import ManualRegisterUser from './pages/manual-register-user'
import NotFound from './pages/not-found';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/new-account' element={<AutomaticNewAccount />} />
      <Route path='manual-register-user' element={<ManualRegisterUser />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
