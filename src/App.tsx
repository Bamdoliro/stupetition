import LoginPage from 'pages/Login';
import MainOutlet from 'components/shared/Outlet/main.outlet';
import JoinPage from 'pages/Join';
import MainPage from 'pages/Main';
import PetitionDetail from 'components/layout/PetitionDetail';
import { Route, Routes } from 'react-router-dom';
import CreatePetition from 'components/layout/CreatePetition';

const App = () => {
  return (
    <Routes>
      <Route element={<MainOutlet />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/petition/:id" element={<PetitionDetail />} />
      </Route>
      <Route path="/petition/write" element={<CreatePetition />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/join" element={<JoinPage />} />
    </Routes>
  );
};

export default App;
