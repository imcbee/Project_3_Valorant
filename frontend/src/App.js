
import './App.css';
import {Routes, Route, Outlet} from 'react-router-dom'
import HomePage from './pages/HomePage';



function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<HomePage />} />

      </Routes>
      
      
    </div>
  );
}

export default App;
