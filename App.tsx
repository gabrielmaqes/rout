import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import HomeScreen from './src/modules/task/ui/screens/HomeScreen';
import {Provider} from './src/global/context/Context';
import {DIContainerImpl} from './src/core/di/impl/DIContainerImpl';

function App(): JSX.Element {
  const container = DIContainerImpl.getDefault();

  return (
    <Provider container={container}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'dark-content'} />
        <HomeScreen />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
