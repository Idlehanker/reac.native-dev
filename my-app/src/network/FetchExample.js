import React from 'react'
import {FlatList, ActivityIndicator, Text, View} from 'react-native'

export default class FetchExample extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {

        const uri = 'https://facebook.github.io/react-native/movies.json'
        console.log('start loading...')

        return fetch(uri)
            .then(response => response.json())
            .then(respJson => {
                console.log(respJson)
                this
                    .setState({
                        isLoading: false,
                        dataSource: respJson.movies
                    }, function () {})
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {

        if (this.state.isLoading) {
            return (
                <View
                    style={{
                    // flex: 1,
                    width: 320,
                    height: 200,
                    backgroundColor: 'blue',
                    padding: 20,
                }}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return (
            <View
                style={{
                // flex: 1,
                backgroundColor: 'skyblue',
                width: 320,
                height: 200,
                paddingTop: 20
            }}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => <Text>{item.title},{item.releaseYear}</Text>}
                    keyExtractor={(item, index) => index}/>
            </View>
        )
    }

}