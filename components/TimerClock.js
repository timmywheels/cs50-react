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
		return (
			<View>
				<Text style={styles.text}>{this.props.count}</Text>
				<Button style={styles.button} title={this.props.title}  onPress={this.props.onPress}/>
			</View>
		)
	}
}

export default TimerClock;