/**
 * @flow
 */
import React from 'react';
import {View, FlatList, Alert, Dimensions} from 'react-native';
import ListRowItem from './widget/ListRowItem';

import type {Item}
from './Types';

const PropTypes = require('prop-types');

import BasicButtons from './component/basic/BasicButtons'

import Separator from './widget/Separator';
import {Navigator} from 'react-native-navigation';

import {FlatListData} from '../test/Data';

type State = {
    data: Array < Item >
};

type RequiredProps = {
    navigator: Navigator
}

type Props = RequiredProps;

const {width, height} = Dimensions.get('window');

export default class BasicListScene extends React.Component < Props,
State > {

    static propTypes = {
        navigator: PropTypes.object.isRequired
    }
    constructor(props : Props) {
        super(props);
        this.state = {
            data: FlatListData
        }
    }

    _onPressItem = ({id, index}) => {
        // Alert.alert(); Alert.alert(id+'-'+index);

        this
            .props
            .navigator
            .push({
                screen: 'learning.Basic.buttons',
                sharedElements: [`image${index}`],
                animated: true,
                overrideBackPress: true,
                passProps: {
                    sharedImageId: `image${index}`
                }
            })
        //*/
    }

    _renderItem = ({item, index}) => (
        <ListRowItem onPressItem={this._onPressItem} item={item} index={index}/>
    // <ListRowItem item = {item} index={index}/>
    )

    _itemSeparator = (item) => (<Separator/>)

    render() {
        return (
            <View
                style={{
                flex: 1,
                flexDirection: 'column'
            }}>
                {/* <FlatList renderItem = {this._renderItem} data = {this.state.data} ItemSeparatorComponent={this._itemSeparator}/> */}
                <FlatList
                    renderItem={this._renderItem}
                    data={this.state.data}
                    ItemSeparatorComponent={this._itemSeparator}/>
            </View>
        );
    }
}

// BasicList.propTypes = { actions: PropTypes.object.isRequired, searchResults:
// PropTypes.object.isRequired, navigator: PropTypes.object }; module.exports =
// {     BasicList }