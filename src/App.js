import React, {Component} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import Thunk from 'redux-thunk';

import Reducers from './reducers';
import ApplicationRoutes from './ApplicationRoutes';
import LandingScreen from './components/LandingScreen';

class App extends Component {
  render() {
    const store = createStore(Reducers, {}, applyMiddleware(Thunk));
    return (
      <Provider store={store}>
        <LandingScreen/>
      </Provider>
    );
  }
}

export default App;
