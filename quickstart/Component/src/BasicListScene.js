/**
 * @flow
 */
import React from 'react';
import {View,FlatList,Alert,Dimensions} from 'react-native';
import ListRowItem from './widget/ListRowItem';
import type {Item} from './Types'

import {
    FlatListData
  } from '../test/Data';
  
type Props = {};
type State = {
    data: Array<Item>,
};

const {width, height} = Dimensions.get('window');
class BasicList extends React.Component<Props, State>{

    constructor(props: Props){
        super(props);
        this.state = {
            data: FlatListData,
        }
    }

    _onPressItem = (section?: string, id: string, index:number)=>{
        // Alert.alert(id);
        Alert.alert(id+'-'+index);
    }
    _renderItem = ({item, index}) => (
        <ListRowItem onPressItem = {this._onPressItem} item = {item} index={index}/>
    )
    _itemSeparator = (item)=>{
        return <View style={{width: width, height: 1, backgroundColor:'gray'}}/> 
    }

    render(){
        return (
            <View style={{flex: 1, flexDirection: 'column', paddingTop :64}}>
                <FlatList renderItem = {this._renderItem} data = {this.state.data} ItemSeparatorComponent={this._itemSeparator}/>
             </View>
        );
    }
}

module.exports = {
    BasicList
}