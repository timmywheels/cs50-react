import React, { Component } from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Constants} from "expo";

const styles = StyleSheet.create({
	text: {
		'fontSize': 48
	},
	button: {
		backgroundColor: '#333',
		color: '#fff'
	}
});

class TimerClock extends Component {
	render() {
	this.props.minutes = this.props.minutes < 10 ?  '0' + this.props.minutes: this.props.minutes;
		return (
			<View>
				<Text style={styles.text}>{this.props.minutes}:{this.props.seconds}</Text>
				<Button style={styles.button} title={this.props.title}  onPress={this.props.onPress}/>
			</View>
		)
	}
}

export default TimerClock;