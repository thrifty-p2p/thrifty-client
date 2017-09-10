import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import Thunk from 'redux-thunk';

import Reducers from './reducers';

class App extends Component {
  render() {
    const store = createStore(Reducers, {}, applyMiddleware(Thunk));
    return (
      <Provider store={store}>

      </Provider>
    );
  }
}

export default App;
