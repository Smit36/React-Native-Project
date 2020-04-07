import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

class Loading extends Component {
  render() {
    return (
      <View style={styles.loading}>
        <Text>Hey! How are you?</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Loading;
