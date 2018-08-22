import React, { Component } from 'react';
import {
    FlatList
} from 'react-native';

import FlatListItem from './FlatListItem';

import tracks from '../data/data';

export default class AllPlayList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FlatList 
                ref={"flatlist"}
                data={tracks}
                keyExtractor={(item, index) => item.title}
                renderItem={({item, index}) => {
                    // console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                    return (
                        <FlatListItem 
                            item={item}
                            index={index}
                            navigation={this.props.navigation}
                        >
                        </FlatListItem>
                    );
                }}
            />
        );
    }
}
