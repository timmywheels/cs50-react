import React, {Component} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {AppLoading, Font} from "expo";
import TWLogo from '../assets/tw-logo-white.png';

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column'
	},
	timerText: {
		fontSize: 48,
		color: '#fff',
		fontFamily: 'Inconsolata',
		letterSpacing: 1,
		textAlign: 'center'

	},
	logoText: {
		fontFamily: 'NunitoBlack',
		color: '#fff',
		textAlign: 'center',
		fontSize: 50,
		fontWeight: '900',
		marginTop: -100,
		marginBottom: 100,
		position: 'fixed'
	},
	twLogo: {
		height: 50,
		width: 50,
		marginTop: 200,
		marginBottom: -200,
		opacity: 0.25,
		position: 'fixed',
		justifyContent: 'space-between'
	},
	btnText: {
		fontFamily: 'NunitoBlack',
		color: '#3e94ff',
		textAlign: 'center',
		fontSize: 20,
		letterSpacing: 2
	},
	btn: {
		color: '#3e94ff',
		marginTop: 20,
		borderColor: '#fff',
		borderStyle: 'solid',
		borderWidth: 2,
		borderRadius: '50%',
		backgroundColor: '#fff',
		width: 200,
		paddingVertical: 10
	}
});

class TimerClock extends Component {
	state = {
		isReady: false
	};

	componentWillMount() {
		(async () => {
			await Font.loadAsync({
				'Inconsolata': require('../assets/fonts/Inconsolata/Inconsolata-Regular.ttf'),
				'NunitoBlack': require('../assets/fonts/Nunito/Nunito-Black.ttf'),
				'NunitoBold': require('../assets/fonts/Nunito/Nunito-Bold.ttf'),
				'Nunito': require('../assets/fonts/Nunito/Nunito-Regular.ttf'),
			});
			this.setState({isReady: true});
		})();
	}

	render() {
		if (!this.state.isReady) {
			return <AppLoading/>;
		}

		this.props.minutes = this.props.minutes < 10 ? '0' + this.props.minutes : this.props.minutes;
		return (
			<View style={styles.container}>
				<Text style={styles.logoText}>pomo</Text>
				<Text style={styles.timerText}>{this.props.minutes}:{this.props.seconds}</Text>
				<TouchableOpacity
					style={styles.btn}
					title={this.props.title}
					onPress={this.props.onPress}
				>
					<Text style={styles.btnText}>{this.props.title.toUpperCase()}</Text>
				</TouchableOpacity>
				<Image style={styles.twLogo} source={TWLogo}/>
			</View>
		)
	}
}

export default TimerClock;