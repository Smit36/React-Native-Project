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

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: ' ',
      password: ' ',
    };
  }

  handleUsername = (text) => {
    this.setState({username: text});
  };
  handlePassword = (text) => {
    this.setState({password: text});
  };
  handleSubmit = () => {
    fetch('http://192.168.0.107:3033/signup', {
      method: 'POST',
      header: {
        Accept: 'applcation/json',
        'Content-Type': 'application/json',
      },
      body: {
        username: this.state.username,
        password: this.state.password,
      },
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((resJson) => {
        alert(resJson);
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headername}>Sign Up</Text>
        </View>
        <View style={styles.login}>
          <TextInput
            style={styles.textinput}
            placeholder="USERNAME"
            onChangeText={this.handleUsername}
          />
          <TextInput
            style={styles.textinput}
            placeholder="PASSWORD"
            secureTextEntry={true}
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
              title={'Existing User?'}
              style={styles.buttoncustom}
              onPress={() => this.props.navigation.navigate('Login')}
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

export default Signup;
