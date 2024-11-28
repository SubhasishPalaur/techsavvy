import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import Dashboard from './Pages/Dashboard';
import './App.css';

const App = () => {
  return (
    <Routers>
    <div className="App">
      <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
    </Routers>
  );
};

export default App;
