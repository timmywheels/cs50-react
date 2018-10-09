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
	constructor() {
		super();

		this.state = {
			seconds: 5,
			minutes: 0,
			displayWorkTimer: true,
			displayBreakTimer: false
		};

	}


	toggleWorkTimer() {

        let { minutes, displayWorkTimer } = this.state;

		minutes = minutes < 10 ?  minutes.toString().padStart(1, '0'): minutes;

		this.setState({
			displayWorkTimer: !displayWorkTimer,
		});
        console.log('displayWorkTimer:', displayWorkTimer);
        console.log('displayBreakTimer:', this.state.displayBreakTimer);
        return !displayWorkTimer ? clearInterval(this.interval) : this.interval = setInterval(this.countdown, 1000);
	}

	toggleBreakTimer() {

        let { minutes, displayBreakTimer } = this.state;

        minutes = minutes < 10 ?  minutes.toString().padStart(1, '0'): minutes;
        this.setState({
            displayBreakTimer: !displayBreakTimer,
        });
        console.log('displayWorkTimer:', this.state.displayWorkTimer);
        console.log('displayBreakTimer:', displayBreakTimer);

        return !displayBreakTimer ? clearInterval(this.interval) : this.interval = setInterval(this.countdown, 1000);
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

        // Once seconds counter hits 1 & minutes hits 0
        // Vibrate phone & reset time to 5 minutes
		// In order to setup break timer
		if (!displayWorkTimer && seconds == 1 && minutes == 0) {
			Vibration.vibrate(1000);

            clearInterval(this.interval);
			this.setState({
				seconds: 1,
				minutes: 5,
				displayWorkTimer: false,
				displayBreakTimer: true,
			})
		}

        if (displayWorkTimer && seconds == 0 && minutes != 0) {
            this.setState({
                seconds: 60,
                minutes: (minutes - 1).toString().padStart(2, '0')
            })
        }

		// Count down
		this.setState(prevState => ({
				seconds: (parseInt(prevState.seconds) - 1).toString().padStart(2, '0'),
			})
		);
	};

	render() {

		let { seconds, minutes, displayWorkTimer, displayBreakTimer } = this.state;

        // console.log('displayWorkTimer', displayWorkTimer);
        // console.log('displayBreakTimer', displayWorkTimer);


			if (displayWorkTimer && !displayBreakTimer) {
				// console.log('displayWorkTimer->top', displayWorkTimer);
				return (
					<View>
						<TimerClock style={styles.timerColor} title={'START >'} onPress={() => this.toggleWorkTimer()} minutes={minutes.toString().padStart(1, '0')} seconds={seconds.toString().padStart(2, '0')}/>
					</View>
				)
			}
			else if (!displayWorkTimer && !displayBreakTimer && seconds > 0) {
                // console.log('displayWorkTimer->bottom', displayWorkTimer);
                // console.log('seconds', seconds);
				return (
					<View>
						<TimerClock title={'PAUSE ||'} onPress={() => this.toggleWorkTimer()} minutes={minutes.toString().padStart(1, '0')} seconds={seconds.toString().padStart(2, '0')}/>
					</View>
				)
			}

			else if (displayBreakTimer && minutes == 5) {
                return (
                    <View>
                        <TimerClock title={'START BREAK'} onPress={() => this.toggleBreakTimer()} minutes={minutes.toString().padStart(1, '0')} seconds={seconds.toString().padStart(2, '0')}/>
                    </View>
                )
			}
			else {
                return (
                    <View>
                        <TimerClock title={'PAUSE BREAK'} onPress={() => this.toggleBreakTimer()} minutes={minutes.toString().padStart(1, '0')} seconds={seconds.toString().padStart(2, '0')}/>
                    </View>
                )
            }
		}


	// }

}

export default Timer;
