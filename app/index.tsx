import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import BasicDrawingCanvas from '../components/drawing/BasicDrawingCanvas';

const App = () => {
  const [showCanvas, setShowCanvas] = React.useState(false);

  if(showCanvas) {
    return <BasicDrawingCanvas />;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home Screen</Text>
        <TouchableOpacity 
          onPress={() => setShowCanvas(true)}
          style={{ 
            padding: 15, 
            backgroundColor: '#007AFF', 
            borderRadius: 10
            }}
          >
            <Text style={{ color: 'white', fontSize: 16 }}>
              Go to Drawing Screen
            </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default App;