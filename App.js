import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyCHuynZoulQqPc392RqVsggFJTTkZan4bc',
      authDomain: 'managerapp-29401.firebaseapp.com',
      databaseURL: 'https://managerapp-29401.firebaseio.com',
      projectId: 'managerapp-29401',
      storageBucket: 'managerapp-29401.appspot.com',
      messagingSenderId: '1041322454516'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App; 
