import { Route, Routes } from 'react-router-dom';
import MainLayout from 'layouts/MainLayout';
import PetitionDetail from 'components/ui/home/PetitionDetail';
import CreatePetition from 'components/ui/home/WritePetition';
import MyPetition from 'components/ui/home/MyPetition';
import Main from 'components/ui/home/Main';
import Login from 'components/ui/auth/Login';
import UpdatePassword from 'components/ui/home/UpdatePassword';

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="/petition/:id" element={<PetitionDetail />} />
        <Route path="/petition/my" element={<MyPetition />} />
      </Route>
      <Route path="/update/password" element={<UpdatePassword />} />
      <Route path="/petition/write" element={<CreatePetition />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
