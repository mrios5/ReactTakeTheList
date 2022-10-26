import logo from './logo.svg';
import './App.css';
import LoginPage from './Views/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import MainPage from './Views/MainPage';
import ScannerPage from './Views/ScannerPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/mainpage' element={<MainPage/>}/>
        <Route path='/scanner' element={<ScannerPage/>}/>
        <Route path='/' element={<LoginPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
