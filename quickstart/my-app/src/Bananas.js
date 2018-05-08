import React from 'react'
import {AppRegistry, Image} from 'react-native'

export default class Bananas extends React.Component {
    render(){
        const pic={
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };

        return(
            <Image source={pic} style={{width: 193, height: 110}} />
        )
    }
}