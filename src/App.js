import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './pages/login';
import Home from './pages/home';
import CallbackPage from './pages/callback-page';
import AutomaticNewAccount from './pages/automatic-new-account';
import ManualRegisterUser from './pages/manual-register-user'

function App() {
  return (
    <Routes>
      <Route path='*' />
      <Route path='/new-account' element={<AutomaticNewAccount />} />
      <Route path='manual-register-user' element={<ManualRegisterUser />} />
      <Route path='/callback' element={<CallbackPage />} />
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
