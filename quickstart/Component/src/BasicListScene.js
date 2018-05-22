/**
 * @flow
 */
import React,{PropTypes} from 'react';
import {View,FlatList,Alert,Dimensions} from 'react-native';
import ListRowItem from './widget/ListRowItem';
import type {Item} from './Types'

import Separator from './widget/Separator';

import {
    FlatListData
  } from '../test/Data';
  
type Props = {};
type State = {
    data: Array<Item>,
};

const {width, height} = Dimensions.get('window');
export default class BasicList extends React.Component<Props, State>{

    constructor(props: Props){
        super(props);
        this.state = {
            data: FlatListData,
        }
    }

    _onPressItem = ({id, index})=>{
        // Alert.alert();
        Alert.alert(id+'-'+index);
    }

    _renderItem = ({item, index}) => (
        <ListRowItem onPressItem = {this._onPressItem} item = {item} index={index}/>
        // <ListRowItem item = {item} index={index}/>
    )

    _itemSeparator = (item)=>(<Separator/>)

    render(){
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                {/* <FlatList renderItem = {this._renderItem} data = {this.state.data} ItemSeparatorComponent={this._itemSeparator}/> */}
                <FlatList renderItem = {this._renderItem} data = {this.state.data} ItemSeparatorComponent={this._itemSeparator}/>
             </View>
        );
    }
}

// BasicList.propTypes = {
	// actions: PropTypes.object.isRequired,
	// searchResults: PropTypes.object.isRequired,
	// navigator: PropTypes.object
// };


// module.exports = {
//     BasicList
// }