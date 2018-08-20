import React, { Component } from 'react';
import Slider from 'react-native-slider';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

function pad(n, width, z=0) {
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

const minutesAndSeconds = (position) => ([
  pad(Math.floor(position / 60), 2),
  pad(position % 60, 2),
]);

export default class SeekBar extends Component {
    constructor(props){
        super(props);
    }

    onSeek() {
        console.log('onSeek');
    }

    onSlidingStart() {
        console.log('onSlidingStart');
    }

    render() {
        const trackLength = this.props.trackLength;
        const currentPosition = this.props.currentPosition;
        const elapsed = minutesAndSeconds(currentPosition);
        const remaining = minutesAndSeconds(trackLength - currentPosition);
        return (
            <View style={styles.container}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.text}>
                    {elapsed[0] + ":" + elapsed[1]}
                    </Text>
                    <View style={{flex: 1}} />
                    <Text style={[styles.text, {width: 40}]}>
                    {trackLength > 1 && "-" + remaining[0] + ":" + remaining[1]}
                    </Text>
                </View>
                <Slider
                    maximumValue={Math.max(trackLength, 1, currentPosition + 1)}
                    onSlidingStart={this.onSlidingStart}
                    onSlidingComplete={this.onSeek}
                    value={currentPosition}
                    style={styles.slider}
                    minimumTrackTintColor='#F6D155'
                    maximumTrackTintColor='#ccc'
                    thumbStyle={styles.thumb}
                    trackStyle={styles.track} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    slider: {
        marginTop: -12,
    },
    container: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 20,
    },
    track: {
        height: 2,
        borderRadius: 1,
    },
    thumb: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#F6D155',
    },
    text: {
        color: '#F6D155',
        fontSize: 12,
        textAlign:'center',
    }
});
