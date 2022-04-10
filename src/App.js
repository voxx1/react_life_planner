import './App.css';
import { Routes, Route } from "react-router-dom"
import React, { Suspense } from 'react';
import LoadingSpinner from './components/UI/LoadingSpinner';

const GoalsPage = React.lazy(() => import('./pages/GoalsPage'))
const SpendingPage = React.lazy(() => import('./pages/SpendingPage'))
const InspirationPage = React.lazy(() => import('./pages/InspirationPage'))



function App() {

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path='/' element={<GoalsPage />} />
        <Route path="/spending" element={<SpendingPage />} />
        <Route path="/goals" element={<GoalsPage />} />
        <Route path="/inspiration" element={<InspirationPage />} />
        <Route path="/*" element={<GoalsPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
