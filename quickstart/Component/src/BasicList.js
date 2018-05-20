/**
 * @flow
 */
import React from 'react';
import {View,FlatList,Alert} from 'react-native';
import ListRowItem from './widget/ListRowItem';

import {
    FlatListData
  } from '../test/Data';
  
type Props = {};
type State = {
    data: Array<Object>,
};

class BasicList extends React.Component<Props, State>{

    constructor(props: Props){
        super(props);
        this.state = {
            data: FlatListData,
        }
    }

    _onPressItem = (id: string)=>{
        Alert.alert(id);
    }
    _renderItem = ({item}) => (
        <ListRowItem id = {item.id} onPressItem = {this._onPressItem} itemValue = {item.key}/>
    )

    render(){
        return (
            <View style={{flex: 1, flexDirection: 'column', paddingTop :64}}>
                <FlatList renderItem = {this._renderItem} data = {this.state.data}/>
             </View>
        );
    }
}

module.exports = {
    BasicList
}