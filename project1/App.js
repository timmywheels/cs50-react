import React from 'react';
import { StyleSheet, View } from 'react-native';
import Timer from './components/Timer';
import { Constants } from 'expo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3e94ff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
	  this.state = {
		  onWorkTimer: true
      }
  }

  render() {
    return (
      <View style={styles.container}>
        <Timer/>
      </View>
    );
  }

  changeBackgroundColor = () => {
    styles.container.backgroundColor = '#a3d4b1';
  }

}


export default App;