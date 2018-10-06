import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Text, View } from 'react-native';
import reducers from './src/reducers';

class App extends Component{
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
