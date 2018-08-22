import React, { Component } from 'react';
import {
    View,
    StatusBar, 
    ScrollView,
    StyleSheet
} from 'react-native';

import Header from './Header';
import AlbumArt from './AlbumArt';
import TrackDetails from './TrackDetails';
import SeekBar from './SeekBar';
import Controls from './Controls';
import Video from 'react-native-video';

import AllPlayList from './AllPlayList';
import Lyrics from './Lyrics';

import tracks from '../data/data';

export default class Player extends Component {

    constructor(props) {
        super(props);

        this.state = {
            paused: true,
            totalLength: 1,
            currentPosition: 0,
            selectedTrack: 0,
            repeatOn: false,
            shuffleOn: false,
            onRepeat: false, 
        };
    }

    setDuration(data) {
        // console.log(data);
        this.setState({totalLength: Math.floor(data.duration)});
    }

    setTime(data) {
        this.setState({currentPosition: Math.floor(data.currentTime)});
    }

    seek(time) {
        time = Math.round(time);
        this.refs.audioElement && this.refs.audioElement.seek(time);
        this.setState({
            currentPosition: time,
            paused: false,
        });
    }

    onBack() {
        if (this.state.currentPosition < 10 && this.state.selectedTrack > 0) {
            this.refs.audioElement && this.refs.audioElement.seek(0);
            this.setState({ isChanging: true });
            setTimeout(() => this.setState({
                currentPosition: 0,
                paused: false,
                totalLength: 1,
                isChanging: false,
                selectedTrack: this.state.selectedTrack - 1,
            }), 0);
        } else {
            this.refs.audioElement.seek(0);
            this.setState({
                currentPosition: 0,
            });
        }
    }

    onForward() {
        if (this.state.selectedTrack < tracks.length - 1) {
            this.refs.audioElement && this.refs.audioElement.seek(0);
            this.setState({ isChanging: true });
            setTimeout(() => this.setState({ 
                currentPosition: 0,
                totalLength: 1,
                paused: false,
                isChanging: false,
                selectedTrack: this.state.selectedTrack + 1
            }), 0);
        }
    }

    Shuffle = (array) => {
        var currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {
    
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
        }
    
        return array;
    }

    onClickShuffle = () => {
        var result = this.Shuffle(tracks);
        this.refs.audioElement && this.refs.audioElement.seek(0);
        this.setState({ isChanging: true });
        setTimeout(() => this.setState({ 
            shuffleOn: !this.state.shuffleOn,
            currentPosition: 0,
            totalLength: 1,
            paused: false,
            isChanging: false,
            selectedTrack: this.state.selectedTrack,
        }), 0);
    }

    //set time callback onrepeat va onshuffle
    componentDidMount() {
        setInterval(() => {
            this.onClickShuffle();
            this.onPressRepeat();
        }, 720000);
    }

    onPressRepeat = () => {
        let length = tracks.length;
        let callback = length - 1;
        this.setState({repeatOn : !this.state.repeatOn});
        if (this.state.selectedTrack == length - 1) {
            this.refs.audioElement && this.refs.audioElement.seek(0);
            this.setState({ isChanging: true });
            this.setState({
                onRepeat: true, 
                currentPosition: 0,
                totalLength: 1,
                paused: false,
                isChanging: false,
                selectedTrack: this.state.selectedTrack - callback
            });
        }
    }

    render() {
        const track = tracks[this.state.selectedTrack];
        // console.log(track);
        const video = this.state.isChanging ? null : (
            // <Video source={{uri: track.audioUrl}} // Can be a URL or a local file.
            // <Video source={require(`${track.audioUrl}`)} // Can be a URL or a local file.
            <Video source={track.audioUrl} // Can be a URL or a local file.
                ref="audioElement"
                paused={this.state.paused}               // Pauses playback entirely.
                resizeMode="cover"           // Fill the whole screen at aspect ratio.
                repeat={true}                // Repeat forever.
                onLoadStart={this.loadStart} // Callback when video starts to load
                onLoad={this.setDuration.bind(this)}    // Callback when video loads
                onProgress={this.setTime.bind(this)}    // Callback every ~250ms with currentTime
                onEnd={this.onForward.bind(this)}           // Callback when playback finishes
                onError={this.videoError}    // Callback when video cannot be loaded
                style={styles.audioElement} 
            />
        );

        return (
            <ScrollView
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
            >
                {/* <AllPlayList /> */}

                <View style={styles.container}>
                    <StatusBar hidden={false} />
                    {/* <Header message="My Musics" /> */}
                    <AlbumArt url={track.albumArtUrl} />
                    <TrackDetails title={track.title} artist={track.artist} />
                    <SeekBar
                        onSeek={this.seek.bind(this)}
                        trackLength={this.state.totalLength}
                        onSlidingStart={() => this.setState({paused: true})}
                        currentPosition={this.state.currentPosition} 
                    />
                    <Controls
                        onPressRepeat={this.onPressRepeat }
                        repeatOn={this.state.repeatOn}
                        shuffleOn={this.state.shuffleOn}
                        forwardDisabled={this.state.selectedTrack === tracks.length - 1}
                        onPressShuffle={ this.onClickShuffle }
                        // onPressShuffle={ () => this.setState({shuffleOn: !this.state.shuffleOn}) }
                        onPressPlay={() => this.setState({paused: false})}
                        onPressPause={() => this.setState({paused: true})}
                        onBack={this.onBack.bind(this)}
                        onForward={this.onForward.bind(this)}
                        paused={this.state.paused}
                    />
                    {video}
                </View>

                <Lyrics track={track} />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    audioElement: {
        height: 0,
        width: 0,
    },
});
