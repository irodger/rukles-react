import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import createStore from '_redux/store';
// import rootSaga from '_redux/sagas';
import App from './app/containers/App';

// const store = createStore({});
// store.runSaga(rootSaga);
// render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
render(<App />, document.getElementById('root'));
