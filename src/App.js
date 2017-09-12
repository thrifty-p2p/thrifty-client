import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import Thunk from 'redux-thunk';

import Reducers from './reducers';
import {AppNavigation, LandingNavigation} from './RouterConfig';

class App extends Component {
  render() {
    const store = createStore(Reducers, {}, applyMiddleware(Thunk));
    return (
      <Provider store={store}>
        <LandingNavigation/>
      </Provider>
    );
  }
}

export default App;
