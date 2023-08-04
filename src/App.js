import './App.css';
import { Routes, Route } from "react-router-dom";
import { Login } from './pages/login/index';
import Index from './pages/index';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
