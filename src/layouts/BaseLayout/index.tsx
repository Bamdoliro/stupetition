import Footer from 'components/common/Footer';
import Header from 'components/common/Header';
import { Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default BaseLayout;
