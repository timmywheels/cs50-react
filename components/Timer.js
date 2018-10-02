import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo';
import TimerClock from './TimerClock';

const styles = StyleSheet.create({
	appContainer: {
		paddingTop: Constants.statusBarHeight,
	},
	text: {
		'fontSize': 48
	},
	button: {
		backgroundColor: '#333',
		color: '#fff'
	}
});

class Timer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			displayTimer: true
		}
	}


	toggleTimer() {

		this.setState({
			displayTimer: !this.state.displayTimer,
		});

		return !this.state.displayTimer ? clearInterval(this.interval) : this.interval = setInterval(this.inc, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval)
	}

	inc = () => {
		this.setState(prevState => ({
				count: prevState.count + 1,
			})
		)
	};

	render() {
		if (this.state.displayTimer) {
			return (
				<TimerClock title={'Stop'} onPress={() => this.toggleTimer()} count={this.state.count}/>
			)
		} else {
			return (
				<TimerClock title={'Start'} onPress={() => this.toggleTimer()} count={this.state.count}/>
			)
		}
	}
}

export default Timer;
