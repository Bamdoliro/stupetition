import LoginPage from 'pages/Login';
import MainOutlet from 'components/common/Outlet/main.outlet';
import JoinPage from 'pages/Join';
import MainPage from 'pages/Main';
import PetitionDetail from 'components/layout/home/PetitionDetail';
import { Route, Routes } from 'react-router-dom';
import CreatePetition from 'components/layout/home/WritePetition';
import MyPetition from 'components/layout/home/MyPetition';

const App = () => {
  return (
    <Routes>
      <Route element={<MainOutlet />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/petition/:id" element={<PetitionDetail />} />
        <Route path="/petition/my" element={<MyPetition />} />
      </Route>
      <Route path="/petition/write" element={<CreatePetition />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/join" element={<JoinPage />} />
    </Routes>
  );
};

export default App;
