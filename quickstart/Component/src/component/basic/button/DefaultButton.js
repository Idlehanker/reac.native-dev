/**
 * @flow
 */
import React, {Component} from 'react';
import {Button} from 'react-native';

const PropType = require('prop-types');
const invariant = require('fbjs/lib/invariant');

export default class DefaultButton extends Component < {
    title : string,
    onPress : (e : Object) => void
} > {

    static propTypes = {
        title: PropType.string.isRequired,
        onPress: PropType.func.isRequired
    }

    _onPress = () => {
        const {onPress} = this.props;
        onPress(this);
    }

    render() {

        const {title, onPress} = this.props;
        invariant(typeof title === 'string', 'The title prop of a Button must be a string',);

        return (<Button title={title} onPress={this._onPress}/>)
    }
}