// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoReducer from './redux/reducer';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

const store = createStore(todoReducer);

const App = () => (
  <Provider store={store}>
    <div className="App drop-shadow-2xl bg-gray-100 p-8 w-[30rem] mx-auto mt-8 rounded-lg ">
      <h1 className=''>To-Do List</h1>
      <AddTask />
      <ListTask />
    </div>
  </Provider>
);

export default App;