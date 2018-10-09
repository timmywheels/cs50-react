import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './components/Timer';
import { Constants, AppLoading, Font } from 'expo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3e94ff',
    alignItems: 'center',
    justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
  },
});



export default class App extends React.Component {

  render() {

    return (
      <View style={styles.container}>
        <Timer/>
      </View>
    );
  }
}
