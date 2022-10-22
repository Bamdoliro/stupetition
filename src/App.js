import './App.css';
import MainPage from './pages/MainPage';
import SignIn from './pages/SignIn/SignIn';
import SignUp from "./pages/SignUp/SignUp";
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
        <Route path='/' element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
