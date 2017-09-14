import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import Thunk from 'redux-thunk';

import Reducers from './reducers';
import RootNavigation from './router/RootNavigation';

import isLoggedIn from './utilities/isLoggedIn';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  render() {
    const store = createStore(Reducers, {}, applyMiddleware(Thunk));

    return (
      <Provider store={store}>
        <RootNavigation/>
      </Provider>
    );
  }
}

export default App;
