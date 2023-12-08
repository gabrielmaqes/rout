/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {AppProvider} from './src/main';

AppRegistry.registerRunnable(appName, initialProps => {
  AppProvider.provideDependencies();
  AppRegistry.registerComponent(appName, () => App);
  AppRegistry.runApplication(appName, initialProps);
});
