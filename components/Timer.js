import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
	text: {
		'fontSize': 48
	}
});

class Timer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			timer: false
		}
	}


	toggleTimer() {
		console.log('count:', this.state.count);
		this.setState({
			count: setInterval(this.inc, 1000),
			timer: !this.state.timer,
		})
	}

	componentWillUnmount() {
		clearInterval(this.state.count)
	}

	inc = () => {
		this.setState(prevState => ({
			count: prevState.count + 1,
			})
		)
	}

	render(){
		if (this.state.timer) {
			return (
				<View>
					<Text style={styles.text}>{this.state.count}</Text>
					<Button title={'Start'}  onPress={() => this.toggleTimer()}/>
				</View>
			)
		} else {
			return (
				<View>
					<Button title={'Start'}  onPress={() => this.toggleTimer()}/>
				</View>
			)
		}
	}
}

export default Timer;
