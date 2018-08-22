import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions, 
    StyleSheet
} from 'react-native';

export default class Lyrics extends Component {

constructor(props) {
    super(props);
}

    render() {
        return (
                <View style={styles.lyrics}>
                    <Text style={{color: 'black', textAlign: 'center', marginBottom: 40, fontSize: 16}}>
                        {this.props.track.title} - {this.props.track.artist}
                    </Text>
                    <Text>
                        {this.props.track.lyrics}
                    </Text>
                </View>
        );
    }
}

let screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create ({
    lyrics: {
        flex: 1,
        width: screenWidth,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
});
