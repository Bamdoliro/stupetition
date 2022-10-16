import './App.css';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/login' element={<LoginPage />} />
        <Route exact path='/' element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
