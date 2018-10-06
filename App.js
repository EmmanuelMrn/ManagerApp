import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Text, View } from 'react-native';
import reducers from './src/reducers';
import firebase from '@firebase/app';

class App extends Component{
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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Welcome to React Native!</Text>
        </View>
      </Provider>
    );
  }
}

export default App; 
