import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import GlobalStyled from 'styles/global.style';
import { RecoilRoot } from 'recoil';
import App from './App';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <App />
      <GlobalStyled />
    </QueryClientProvider>
  </RecoilRoot>,
);
