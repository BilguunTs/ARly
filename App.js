import React from 'react';

import {SafeAreaView, StatusBar, Text, useColorScheme} from 'react-native';
import {ViroScene, ViroText, ViroCamera} from '@viro-community/react-viro';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ViroScene>
        <ViroCamera position={[-1, 0, 0]} active={true} />
        <ViroText text="Hello!" position={[-1, 0, -1]} />
      </ViroScene>
    </SafeAreaView>
  );
};
export default App;
