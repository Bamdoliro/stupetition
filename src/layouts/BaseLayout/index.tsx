import Header from 'components/common/Header';
import { Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default BaseLayout;
