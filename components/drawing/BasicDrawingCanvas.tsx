import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

const BasicDrawingCanvas = () => {
  return(
    <SafeAreaView style={{flex: 1}}>
      <View style={{ flex: 1 }}>
        <Text>Drawing Screen</Text>
      </View>
    </SafeAreaView>
  )
}

export default BasicDrawingCanvas;