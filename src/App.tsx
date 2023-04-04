import { Route, Routes, BrowserRouter } from 'react-router-dom';
import BaseLayout from 'layouts/BaseLayout';
import PetitionDetail from 'components/ui/PetitionDetail';
import CreatePetition from 'components/ui/WritePetition';
import MyPetition from 'components/ui/MyPetition';
import Main from 'components/ui/Main';
import Login from 'components/ui/Login';
import UpdatePassword from 'components/ui/UpdatePassword';
import SEOMetaTag from 'SEOMetaTag';

const App = () => {
  return (
    <BrowserRouter>
      <SEOMetaTag />
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/petition/:id" element={<PetitionDetail />} />
          <Route path="/petition/my" element={<MyPetition />} />
        </Route>
        <Route path="/update/password" element={<UpdatePassword />} />
        <Route path="/petition/write" element={<CreatePetition />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
