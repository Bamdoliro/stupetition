import { Route, Routes } from 'react-router-dom';
import BaseLayout from 'layouts/BaseLayout';
import PetitionDetail from 'components/ui/PetitionDetail';
import CreatePetition from 'components/ui/WritePetition';
import MyPetition from 'components/ui/MyPetition';
import Main from 'components/ui/Main';
import Login from 'components/ui/Login';
import UpdatePassword from 'components/ui/UpdatePassword';
import GenerateStudnets from 'components/ui/GenerateStudents';
import PrintPDF from 'components/ui/PrintPDF';

const App = () => {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="/petition/:id" element={<PetitionDetail />} />
        <Route path="/petition/my" element={<MyPetition />} />
        <Route path="/student/generate" element={<GenerateStudnets />} />
        <Route path="/student/generate/print" element={<PrintPDF />} />
      </Route>
      <Route path="/update/password" element={<UpdatePassword />} />
      <Route path="/petition/write" element={<CreatePetition />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
