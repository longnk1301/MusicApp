import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class Controls extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.0} onPress={this.props.onPressShuffle}>
                    <Image 
                        style={[styles.secondaryControl, this.props.shuffleOn ? [] : styles.off]}
                        source={require('../img/baseline_shuffle_black_18dp.png')}/>
                </TouchableOpacity>

                <View style={{width: 40}} />
                
                <TouchableOpacity onPress={this.props.onBack}>
                    <Image source={require('../img/baseline_skip_previous_black_18dp.png')}/>
                </TouchableOpacity>
                
                <View style={{width: 20}} />
                
                {!this.props.paused 
                ?
                    <TouchableOpacity onPress={this.props.onPressPause}>
                        <View style={styles.playButton}>
                            <Image source={require('../img/baseline_pause_black_18dp.png')}/>
                        </View>
                    </TouchableOpacity> 
                :
                    <TouchableOpacity onPress={this.props.onPressPlay}>
                        <View style={styles.playButton}>
                            <Image source={require('../img/baseline_play_arrow_black_18dp.png')}/>
                        </View>
                    </TouchableOpacity>

                }
                <View style={{width: 20}} />
                    <TouchableOpacity 
                        onPress={this.props.onForward}
                        disabled={this.props.forwardDisabled}>
                <Image 
                    style={[this.props.forwardDisabled && {opacity: 0.3}]}
                    source={require('../img/baseline_skip_next_black_18dp.png')}/>

                </TouchableOpacity>

                <View style={{width: 40}} />

                <TouchableOpacity activeOpacity={0.0} onPress={this.props.onPressRepeat}>
                    <Image 
                        style={[styles.secondaryControl, this.props.repeatOn ? [] : styles.off]}
                        source={require('../img/baseline_repeat_black_18dp.png')}/>
                </TouchableOpacity>
            </View>
        );
    }
}

// export default Controls;

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 10,
    },
    playButton: {
      height: 72,
      width: 72,
      borderWidth: 1.5,
      borderColor: 'black',
      borderRadius: 72 / 2,
      alignItems: 'center',
      justifyContent: 'center',
    },
    secondaryControl: {
      height: 30,
      width: 30,
    },
    off: {
      opacity: 0.30,
    }
  })
