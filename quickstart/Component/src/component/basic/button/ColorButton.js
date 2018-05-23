/**
 * @flow
 */
import React, {Component} from 'react'
import {Text, View, Button} from 'react-native'

const PropTypes = require('prop-types');
const invariant = require('fbjs/lib/invariant');
const ColorPropType = require('ColorPropType');

export default class ColorButton extends Component < {
    title : string,
    color : string,
    onPress : () => void
} > {

    static propTypes = {
        title: PropTypes.string.isRequired,
        color: ColorPropType,
        onPress: PropTypes.func.isRequired
    }

    render() {
        const {title, color, onPress} = this.props;
        invariant(typeof title === 'string', 'The title prop of a Button must be a string.',);

        return (<Button title={title} color={color} onPress={onPress}/>)
    }
}