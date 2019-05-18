import React from 'react';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';

import store from './store';

import TodoList from './components/TodoList';

const App = () => (
  <Provider store={store}>
    <div>Hello</div>
    <TodoList />
  </Provider>
);

export default App;
