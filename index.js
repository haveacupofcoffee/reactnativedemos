/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
//import App from './demo/DemoState'
//import App from './demo/DemoContainerComponent'

//import App from './demo/DemoStyleTest'

//import App from './demo/DemoFlexBox'  // flex box
//import App from './demo/DemoListView'

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
//AppRegistry.registerComponent(appName, () => DemoRouter)
