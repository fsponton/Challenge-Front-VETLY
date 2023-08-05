import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './pages/login';
import Home from './pages/home';
import CallbackPage from './pages/callback-page';
import NewAccount from './pages/newAccount';
function App() {
  return (
    <Routes>
      <Route path='/new-account' element={<NewAccount />} />
      <Route path='/callback' element={<CallbackPage />} />
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
