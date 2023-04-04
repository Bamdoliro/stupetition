import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import GlobalStyled from 'styles/global.style';
import { RecoilRoot } from 'recoil';
import ScrollTop from 'utils/ScrollTop';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalModal from 'utils/GlobalModal';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <App />
        <GlobalModal />
        <GlobalStyled />
        <ScrollTop />
        <ToastContainer
          autoClose={2000}
          limit={5}
          pauseOnHover={false}
          position="top-right"
          pauseOnFocusLoss={false}
        />
      </HelmetProvider>
    </QueryClientProvider>
  </RecoilRoot>,
);
