import LoginPage from 'pages/Login';
import JoinPage from 'pages/Join';
import MainPage from 'pages/Main';
import CreateBoard from 'components/board/createBoard';
import PetitionDetail from 'components/PetitionDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/petition/:id" element={<PetitionDetail />} />
        <Route path="/createPetition" element={<CreateBoard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
