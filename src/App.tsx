import { Route, Routes } from 'react-router-dom';
import Layout from 'components/common/Layout';
import PetitionDetail from 'pages/PetitionDetail';
import CreatePetition from 'pages/WritePetition';
import MyPetition from 'pages/MyPetition';
import Main from 'pages/Main';
import Login from 'pages/Login';
import Callback from 'pages/Callback';
import useTokenCheck from 'hooks/useTokenCheck';

const App = () => {
  useTokenCheck();

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/petition/:id" element={<PetitionDetail />} />
        <Route path="/petition/my" element={<MyPetition />} />
      </Route>
      <Route path="/callback/google" element={<Callback />} />
      <Route path="/petition/write" element={<CreatePetition />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
