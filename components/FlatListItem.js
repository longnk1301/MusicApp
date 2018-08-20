import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

class FlatListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeRowKey: null,
            numberOfRefresh: 0
        };
    }

    refreshFlatListItem = () => {
        this.setState((prevState) => {
            return{
                numberOfRefresh: prevState.numberOfRefresh + 1
            };
        });
    }

    render() {
        var a = this.props.indexStart;
        // console.log(a);
        var b = this.props.index;
        // console.log(b);
        return (
            <View style={styles.container}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                }}>
                    <TouchableOpacity 
                        style={styles.button}
                        
                    >
                        <Text>{this.props.item.title} - {this.props.item.artist}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default FlatListItem;
let screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create ({
    container: {
        flex:1,
        flexDirection: 'column',
        width: screenWidth,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        flex: 1,
        flexDirection: 'column',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        padding: 15,
    },
  });