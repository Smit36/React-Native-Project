import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

class Home extends Component {
  render() {
    return (
      <View style={styles.home}>
        <Text>Hey! How are you?</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Home;
