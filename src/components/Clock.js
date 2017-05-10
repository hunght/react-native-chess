import React, { Component, PropTypes } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const TOTAL_MINUTES = 60;

export default class Clock extends Component {
  static propTypes = {
    time: PropTypes.number.isRequired,
    enabled: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.state = {
      time: props.time,
    };
  }

  componentWillReceiveProps(nextProps) {
    const nextTime = nextProps.time;
    if (this.props.time !== nextTime) {
      this.setState({
        time: nextTime,
      });
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(
      () => {
        if (this.props.enabled) {
          this.setState({
            time: this.state.time - 1,
          });
        }
      },
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { enabled } = this.props;
    const { time } = this.state;
    if (time < 0) {
      return (
        <Text style={styles.waiting}>
          {enabled ? 'Waiting for player!' : ' '}
        </Text>
      );
    }

    let minutes = '' +
      Math.floor(time % (TOTAL_MINUTES * TOTAL_MINUTES) / TOTAL_MINUTES);
    let seconds = '' + Math.floor(time % TOTAL_MINUTES);

    if (minutes.length === 1) {
      minutes = `0${minutes}`;
    }
    if (seconds.length === 1) {
      seconds = `0${seconds}`;
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{`${minutes}:${seconds}`}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    alignSelf: 'flex-end',
    backgroundColor: 'grey',
    padding: 4,
    borderRadius: 3,
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  waiting: {
    margin: 16,
    alignSelf: 'flex-end',
    fontSize: 14,
    color: '#dd465b',
  },
});