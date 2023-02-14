import LoginPage from 'pages/Login';
import MainLayout from 'components/Layout/main.layout';
import JoinPage from 'pages/Join';
import MainPage from 'pages/Main';
import CreateBoard from 'components/board/createBoard';
import PetitionDetail from 'components/PetitionDetail';
import { Route, Routes } from 'react-router-dom';
import CreatePetition from 'components/CreatePetition';

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/petition/:id" element={<PetitionDetail />} />
      </Route>
      <Route path="/createPetition" element={<CreatePetition />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/join" element={<JoinPage />} />
    </Routes>
  );
};

export default App;
