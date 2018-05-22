/**
 * @flow
 */
import React, { Component } from 'react';
import { Text, View, SectionList, Alert,Dimensions } from 'react-native';
import {SectionListData} from '../test/Data';
import ListRowItem from './widget/ListRowItem';

import Separator from './widget/Separator';

import type {SectionItem} from './Types';

type Props = {};
type State = {
    items: Array<Object>
};

const {width, height} = Dimensions.get('window');
export default class SectionListScene extends Component<Props,State> {

    state: State;
    constructor(props: Props){
        super(props);
        this.state = {
            items : SectionListData
        };
    }

    _onPressItem = ({section, id, index})=>{
        // Alert.alert(id);
        Alert.alert((section || '') + '/'+id+'-'+index);
    }

    _renderItems = ({item, index, section})=>{
        // return <Text key={index}>{item}</Text>
       return <ListRowItem onPressItem = {this._onPressItem} item = {item} index={index} section = {section.section}/>
    };

    _renderSectionHeader = ({section: {section}})=>(
        // return <Text style={{fontWeight: 'bold'}}>{section}</Text>
        <View style={{flex: 1, justifyContent:'center', backgroundColor: 'skyblue', height: 40, width: width}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', flex:.6, paddingLeft: 14}}>{section}</Text>
        </View>
    )

    _keyExtrator = (item, index) => (
        item + index
    )

    _itemSeparator = (item)=>(<Separator/>)

    render() {
        return (
            <SectionList sections =  {this.state.items} 
                renderItem = {this._renderItems} 
                renderSectionHeader={this._renderSectionHeader}
                keyExtractor = {this._keyExtrator}
                ItemSeparatorComponent={this._itemSeparator}/>
        )
    }
}