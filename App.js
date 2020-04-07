/* eslint-disable no-undef */
import React, {Component} from 'react';
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
} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {TransitionSpecs} from '@react-navigation/stack';
import {CardStyleInterpolators} from '@react-navigation/stack';
const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
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
          <Stack.Screen name="signup" component={Signup} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
