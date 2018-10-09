import React, { Component } from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Constants, AppLoading, Font } from "expo";

const styles = StyleSheet.create({
	text: {
		fontSize: 48,
		color: '#fff',
		fontFamily: 'Inconsolata',
		letterSpacing: 1

	},
	button: {
		backgroundColor: '#333',
		color: '#fff',
		fontFamily: 'Inconsolata',
		letterSpacing: 1
	}
});

class TimerClock extends Component {

	state ={
        isReady: false
    };

    componentWillMount() {
        (async() => {
            await Font.loadAsync({
                'Inconsolata': require('../assets/fonts/Inconsolata/Inconsolata-Regular.ttf')
            });

            this.setState({isReady: true});
        })();
    }

	render() {
        if (!this.state.isReady) {
            return <AppLoading/>;
        }

	this.props.minutes = this.props.minutes < 10 ?  '0' + this.props.minutes: this.props.minutes;
		return (
			<View>
				<Text style={styles.text}>{this.props.minutes}:{this.props.seconds}</Text>
				<Button style={styles.button} padding={'10px 20px'} color={'#fff'} title={this.props.title}  onPress={this.props.onPress}/>
			</View>
		)
	}
}

export default TimerClock;