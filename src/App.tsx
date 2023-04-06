import { Route, Routes } from 'react-router-dom';
import Layout from 'components/common/Layout';
import PetitionDetail from 'components/ui/PetitionDetail';
import CreatePetition from 'components/ui/WritePetition';
import MyPetition from 'components/ui/MyPetition';
import Main from 'components/ui/Main';
import Login from 'components/ui/Login';
import SEOMetaTag from 'SEOMetaTag';
import Callback from 'components/ui/Callback';

const App = () => {
  return (
    <>
      <SEOMetaTag />
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
    </>
  );
};

export default App;
