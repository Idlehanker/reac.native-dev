/**
 * @flow
 */
import {Platform} from 'react-native';
// import { AppRegistry } from 'react-native'; import App from './App';
// __STRESS_TEST__ = false;
import App from './bootstrap';
// AppRegistry.registerComponent('Component', () => App); const app = new App();
if (Platform.OS == 'ios') {
    const app = new App({});
}