import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class Header extends Component {
    constructor(props){
        super(props);
    }

    onDownPress() {
        console.log('onDownPress');
    }
    onQueuePress() {
        console.log('onQueuePress');
    }
    onMessagePress() {
        console.log('onMessagePress');
    }

    render() {
        const {message} = this.props;
        // console.log(message);
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.onDownPress}>
                    <Image style={styles.button}
                    source={require('../img/baseline_keyboard_arrow_down_black_18dp.png')} />
                </TouchableOpacity>
                <Text onPress={this.onMessagePress}
                    style={styles.message}>{message.toUpperCase()}</Text>
                <TouchableOpacity onPress={this.onQueuePress}>
                    <Image style={styles.button}
                    source={require('../img/baseline_queue_music_black_18dp.png')} />
                </TouchableOpacity>
            </View>
        );
    }
}
  
const styles = StyleSheet.create({
    container: {
        height: 50,
        paddingTop: 12,
        paddingLeft: 12,
        paddingRight: 12,
        flexDirection: 'row',
        backgroundColor: '#F6D155',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    message: {
        flex: 1,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        fontStyle: 'italic'
    },
    button: {
        opacity: 0.72
    }
});
