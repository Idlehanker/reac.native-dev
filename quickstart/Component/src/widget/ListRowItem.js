/**
 * @flow
 */
'use strict';
import React from 'react';
import {View,TouchableHighlight,Text,StyleSheet } from 'react-native';
import type {Props as FlatListProps} from 'FlatList';

type Props = {
    itemValue: any,
    id: string,
    onPressItem: (id: string)=>void,
};

type State = {};
// type Props<ItemT> = RowItemProps & FlatListProps<ItemT>;

export default class ListRowItem extends React.Component<Props, State>{

    props: Props;
    state: State;
    _touchableControl: null | TouchableHighlight;

    constructor(props: Props){
        super(props);
    }

    _onPress = () => {
        this.props.onPressItem(this.props.id + '');
    }

    render(){
        return ( 
        <TouchableHighlight
            onPress = {this._onPress} style = {styles.container}>
             <View style={styles.content}>
                <Text>{this.props.itemValue}</Text>
            </View>
       </TouchableHighlight>)
    }
}

const styles = StyleSheet.create({
    container : {
        height: 45,
    },
    content: {
        backgroundColor: 'white',
        height: 44,
    }
}
)