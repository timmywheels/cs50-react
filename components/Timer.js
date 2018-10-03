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

		// Number.prototype.pad = function(size) {
		// 	var s = String(this);
		// 	while (s.length < (size || 2)) {s = "0" + s;}
		// 	return s;
		// }

		this.state = {
			// count: 0,
			seconds: 55,
			minutes: 0,
			displayTimer: true
		}
	}


	toggleTimer() {
		this.state.minutes = this.state.minutes < 10 ?  this.state.minutes.toString().padStart(2, '0'): this.state.minutes;

		this.setState({
			displayTimer: !this.state.displayTimer,
		});
		return !this.state.displayTimer ? clearInterval(this.interval) : this.interval = setInterval(this.inc, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval)
	}

	inc = () => {


		// keep double equals to allow type coercion
		if (this.state.seconds == 59) {
			this.state.seconds = 0;
			this.state.minutes = (parseInt(this.state.minutes) + 1).toString().padStart(2, '0');
		}

		this.setState(prevState => ({
				seconds: (parseInt(prevState.seconds) + 1).toString().padStart(2, '0'),
			})
		)
	};

	render() {



		// if (this.state.seconds < 10) {
		// 	this.state.seconds = this.state.seconds.toString().padStart(2, '0')
		// } else {
		// 	this.state.seconds = this.state.seconds
		// }
		// this.state.minutes = this.state.minutes < 10 ?  '0' + this.state.minutes.toString().padStart(2, '0'): this.state.minutes;
		// toString().padStart(2, '0')
		if (this.state.displayTimer) {
				return (
					<View>
						<TimerClock title={'Start'} onPress={() => this.toggleTimer()} minutes={this.state.minutes} seconds={this.state.seconds}/>
					</View>
				)
			} else {
				return (
					<View>
						<TimerClock title={'Stop'} onPress={() => this.toggleTimer()} minutes={this.state.minutes} seconds={this.state.seconds}/>
					</View>
				)
			}
		}
}

export default Timer;
