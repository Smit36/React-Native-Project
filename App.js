/* eslint-disable no-undef */
import React, {Component, useEffect, useState} from 'react';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
import Loading from './screens/Loading';
import Home from './screens/Home';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image,
  TextInput,
  AsyncStorage,
} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {TransitionSpecs} from '@react-navigation/stack';
const Stack = createStackNavigator();

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedin: null,
    };
    const token = AsyncStorage.getItem('token');
    if (token) {
      this.setState({isLoggedin: true});
    } else {
      this.setState({isLoggedin: false});
    }
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">          
          {<Stack.Screen name="Loading" component={Loading} />}) 
          {<Stack.Screen name="Home" component={Home} />}
          <Stack.Screen
            name="Login"
            component={Signin}
            options={{
              transitionSpec: {
                open: TransitionSpecs.TransitionIOSSpec,
                close: TransitionSpecs.TransitionIOSSpec,
              },
            }}
          />         
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
