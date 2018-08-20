import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class TrackDetails extends Component {
    constructor(props){
        super(props);
    }

    onAddPress() {
        console.log('onAddPress');
    }

    onMorePress() {
        console.log('onMorePress');
    }

    onTitlePress() {
        console.log('onTitlePress');
    }

    onArtistPress() {
        console.log('onArtistPress');
    }

    render() {
        const title = this.props.title;
        const artist = this.props.artist;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.onAddPress}>
                    <Image 
                        style={styles.button}
                        source={require('../img/baseline_add_circle_black_18dp.png')} />
                </TouchableOpacity>

                <View style={styles.detailsWrapper}>
                    <Text style={styles.title} onPress={this.onTitlePress}>{title}</Text>
                    <Text style={styles.artist} onPress={this.onArtistPress}>{artist}</Text>
                </View>

                <TouchableOpacity onPress={this.onMorePress}>
                    <View style={styles.moreButton}>
                        <Image style={styles.moreButtonIcon}
                        source={require('../img/baseline_more_horiz_black_18dp.png')} />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flexDirection: 'row',
        paddingLeft: 20,
        alignItems: 'center',
        paddingRight: 20,
    },
    detailsWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
    artist: {
        color: 'black',
        fontSize: 14,
        marginTop: 4,
    },
    button: {
        opacity: 0.72,
    },
    moreButton: {
        borderColor: 'rgb(255, 255, 255)',
        borderWidth: 2,
        opacity: 0.72,
        borderRadius: 10,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    moreButtonIcon: {
        height: 30,
        width: 30,
    }
});
