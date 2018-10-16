import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Vibration } from 'react-native';
import { Constants } from 'expo';
import TimerClock from './TimerClock';

const styles = StyleSheet.create({
	appContainer: {
		paddingTop: Constants.statusBarHeight,
	},
	timerColor: {
		backgroundColor: '#333 !important'
	}
});

class Timer extends Component {
	constructor(props) {
		super();

		this.state = {
			seconds: 5,
			minutes: 0,
			timerRunning: false,
			displayWorkTimer: true,
			displayBreakTimer: false,
			buttonText: 'Start'
		};

	}


	toggleTimer() {
        let { minutes, timerRunning } = this.state;
		minutes = minutes < 10 ?  minutes.toString().padStart(1, '0'): minutes;
		this.setState({
			timerRunning: !timerRunning,
			buttonText: 'Stop'
		});
		return timerRunning ? clearInterval(this.interval) : this.interval = setInterval(this.countdown, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval)
	}

	countdown = () => {

        let { seconds, minutes, displayWorkTimer, displayBreakTimer } = this.state;
        // keep double equals to allow type coercion
		// Subtract minutes from work timer,
		// reset second count to 60
		if (seconds == 0 && minutes != 0 ) {
			this.setState({
				seconds: 60,
				minutes: (minutes - 1).toString().padStart(1, '0')
			})
		}

        // Once seconds minutes hits 0
        // Vibrate phone & reset time to 5 minutes
		// In order to setup break timer
		if (displayWorkTimer && seconds == 1 && minutes == 0) {
			Vibration.vibrate(1000);

            clearInterval(this.interval);
			this.setState({
				seconds: 1,
				minutes: 5,
				timerRunning: false,
				displayWorkTimer: false,
				displayBreakTimer: true,
			})
		}

        if (displayBreakTimer && seconds == 0 && minutes != 0) {
            this.setState({
                seconds: 60,
                minutes: (minutes - 1).toString().padStart(1, '0')
            })
        }

        if (displayBreakTimer) {
        	this.changeBackgroundColor();
        }

		// Count down
		this.setState(prevState => ({
				seconds: (parseInt(prevState.seconds) - 1).toString().padStart(1, '0'),
			})
		);
	};

	render() {

		let { seconds, minutes, timerRunning } = this.state;

		if (!timerRunning) {
				return (
					<View>
						<TimerClock style={styles.timerColor} title={'Start'} onPress={() => this.toggleTimer()} minutes={minutes.toString().padStart(1, '0')} seconds={seconds.toString().padStart(2, '0')}/>
					</View>
				)
			}
		if (timerRunning) {
			return (
				<View>
					<TimerClock style={styles.timerColor} title={'Stop'} onPress={() => this.toggleTimer()} minutes={minutes.toString().padStart(1, '0')} seconds={seconds.toString().padStart(2, '0')}/>
				</View>
			)
		}
	}
}

export default Timer;
