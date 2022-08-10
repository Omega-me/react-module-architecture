import { Spinner } from 'components';
import { AppContainer } from 'containers';
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'state';

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
