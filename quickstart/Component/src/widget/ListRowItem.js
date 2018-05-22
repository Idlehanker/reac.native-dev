/**
 * @flow
 */
'use strict';
import React,{PropTypes} from 'react';
import {View,TouchableHighlight,Text,StyleSheet } from 'react-native';
// import type {Props as FlatListProps} from 'FlatList';
import type {Item} from '../Types';

/*
type Props = {
    item: Item,
    index: number,
    section?: string,
    onPressItem: (section?:string, id: string, index: number)=>void,
};
*/
// type Props<ItemT> = RowItemProps & FlatListProps<ItemT>;

type RequireProps = {
    item: Item,
    index: number,
    onPressItem: (info: {
        section?: string,
        id: string,
        index: number,
    })=> void,
};

type OptionalProps = {
    section?: ?string,
}

type Props = RequireProps & OptionalProps;

export default class ListRowItem extends React.PureComponent<Props>{

    props: Props;
    _touchableControl: null | TouchableHighlight;

    constructor(props: Props){
        super(props);
    }

    _onPress = () => {
        const {section, item,index } = this.props;
        const stringId: string = String(item.id) || '';

        const info = section ? {
                section: section, 
                id: stringId, 
                index: index
            } :
            {
                id: stringId, 
                index: index
            }

        this.props.onPressItem(info);
    }

    render(){
        const {key} = this.props.item;
        return ( 
            <View style={{backgroundColor: 'white'}}>
                <TouchableHighlight
                    onPress = {this._onPress} >
                    <View style = {styles.container}>
                        <Text style={styles.content}>{key}</Text>
                    </View>
                </TouchableHighlight>)
         </View>
        )}
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        paddingLeft: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        height: 54,
        backgroundColor: 'white',
    },
    content: {
        fontSize: 24,
        flex:.6,
        color: 'steelblue',
        // textAlignVertical: ''
        // backgroundColor: 'red'
        // fontColor: 'steelsky',
    }
})
/*
ListRowItem.PropTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number,

}
*/