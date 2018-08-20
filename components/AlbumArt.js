import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions, Animated, Easing
} from 'react-native';

export default class AlbumArt extends Component {
    constructor(props){
        super(props);
    }

    onPress() {
        console.log('onPress');
    }

    render() {
        const { url } = this.props;
        // console.log(url);
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.onPress}>
                <Animated.Image
                    style={styles.image}
                    source={{uri: url}}
                />
                </TouchableOpacity>
            </View>
        );
    }
}

spinValue = new Animated.Value(0)

// First set up animation 
Animated.timing(
    this.spinValue,
  {
    toValue: 5,
    duration: 99999,
    easing: Easing.linear,
    useNativeDriver: true
  }
).start()

// Second interpolate beginning and end values (in this case 0 and 1)
const spin = this.spinValue.interpolate({
  inputRange: [0, 10],
  outputRange: ['0deg', '720deg']
})

const { width, height } = Dimensions.get('window');
const imageSize = width - 48;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingRight: 24,
    marginTop: 20,
  },
  image: {
    width: imageSize,
    height: imageSize,
    borderRadius: 50,
    transform: [{rotate: spin}],
  },
})
