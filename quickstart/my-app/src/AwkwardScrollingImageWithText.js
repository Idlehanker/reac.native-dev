import React, {Component} from 'react'
import {Image, ScrollView, Text} from 'react-native'
import Bananas from './Bananas'
import LotsOfGreetings from './Greeting'
import BlinkApp from './BlinkApp'
import LotsOfStyle from './LotsOfStyle'
import FixedDimensionsBasics from './layout/FixedDimensionsBasics'
import FlexDimensionsBasics from './layout/FlexDimensionsBasics'
import FlexDirectionBasics from './layout/FlexDirectionBasics'
import JustifyContentBasics from './layout/JustifyContentBasics'
import AlignItemsBasics from './layout/AlignItemsBasics'
import PizzaTranslator from './input/PizzaTranslator'
import ButtonBasics from './controls/ButtonBasics'
import Touchables from './controls/Touchables'
import FlatListBasics from './data-view/FlatListBasics'

import SectionListBasics from './data-view/SectionListBasics'

import FetchExample from './network/FetchExample'

class AwkwardScrollingImageWithText extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1
      }}>
        <Image
          source={{
          uri: 'http://i.chzbgr.com/full/7345954048/h7E2C65F9/'
        }}
          style={{
          width: 320,
          height: 180
        }}/>
        <Text>
          On iOS, a React Native ScrollView uses a native UIScrollView. On Android, it
          uses a native ScrollView. On iOS, a React Native Image uses a native
          UIImageView. On Android, it uses a native ImageView. React Native wraps the
          fundamental native components, giving you the performance of a native app, plus
          the clean design of React.
        </Text>
        <Bananas/>
        <LotsOfGreetings/>
        <BlinkApp/>
        <LotsOfStyle/>
        <FixedDimensionsBasics/>
        <FlexDimensionsBasics/>
        <FlexDirectionBasics/>
        <JustifyContentBasics/>
        <AlignItemsBasics/>
        <PizzaTranslator/>

        <ButtonBasics/>
        <Touchables/>
        <FlatListBasics/>
        <SectionListBasics/>

        <FetchExample/>

      </ScrollView>
    )
  }
}

export default AwkwardScrollingImageWithText
