import { Route, Routes } from 'react-router-dom';

import Dashboard from './pages/dashboard/Dashboard';
import Log from './pages/login/Log';
import P404 from './pages/P404/P404';

import './App.css';

/**
 * Main App component
 * @returns {React.Component}
 */
function App() {
  return (
    <div className="App">
        <Routes>
               <Route index path='/' element={<Log />}></Route>
               <Route path="/profil/:id" element={<Dashboard/>}></Route>
               <Route path="*" element={<P404/>}></Route>
               {/* Github pages required */}
               <Route index path='/AxelSalenbier_12_24042022/' element={<Log />}></Route>
        </Routes>
    </div>
  );
}

export default App;
