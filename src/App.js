import './App.css';
import GoalsPage from './pages/GoalsPage';
import SpendingPage from './pages/SpendingPage';
import InspirationPage from './pages/InspirationPage';
import { Routes, Route } from "react-router-dom"


function App() {

  return (
    <Routes>
      <Route path='/' element={<GoalsPage />} />
      <Route path="/spending" element={<SpendingPage />} />
      <Route path="/goals" element={<GoalsPage />} />
      <Route path="/inspiration" element={<InspirationPage />} />
      <Route path="/*" element={<GoalsPage />} />
    </Routes>



  );
}

export default App;
