import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Spinner } from 'src/components';
import { AppContainer } from 'src/containers';
import { store } from 'src/state/store/store';
import 'react-toastify/dist/ReactToastify.css';
import '../common/styles/global/global.scss';
import '../common/styles/global/reset.scss';

const App = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={<Spinner />}>
        <BrowserRouter>
          <AppContainer />
        </BrowserRouter>
      </Suspense>
    </Provider>
  );
};

export default App;
