/* eslint-disable quotes */
/* eslint-disable no-return-assign */
/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
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

class Signin extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  handleUsername = (text) => {
    this.setState({username: text});
  };
  handlePassword = (text) => {
    this.setState({password: text});
  };
  handleSubmit = () => {
    alert("HEllo")
  };
  changePage = () => {
    this.setState;
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headername}>Login</Text>
        </View>
        <View style={styles.login}>
          <TextInput
            style={styles.textinput}
            placeholder="USERNAME"
            value={this.state.username}
            onChangeText={this.handleUsername}
          />
          <TextInput
            style={styles.textinput}
            placeholder="PASSWORD"
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={this.handlePassword}
          />
          <View style={styles.buttoncustom}>
            <Button
              title={'Submit'}
              style={styles.buttoncustom}
              onPress={this.handleSubmit}
            />
          </View>
          <View style={styles.buttoncustom}>
            <Button
              title={'New User?'}
              style={styles.buttoncustom}
              onPress={() => this.props.navigation.navigate('signup')}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  headername: {
    fontSize: 30,
    color: 'orange',
  },
  buttoncustom: {
    marginTop: 15,
    width: '60%',
  },
  login: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textinput: {
    width: '60%',
    marginTop: 30,
    paddingLeft: 10,
    borderWidth: 1,
  },
});

export default Signin;
