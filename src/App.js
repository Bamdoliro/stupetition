import './App.css';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import SignIn from './components/SignIn/SignIn';
import SignUp from "./components/SignUp/SignUp";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
