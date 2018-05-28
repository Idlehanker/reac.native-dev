/**
 * @flow
 */
import { Platform } from "react-native";
// import { AppRegistry } from 'react-native'; import App from './App';
// __STRESS_TEST__ = false;
import App from "./bootstrap";
// AppRegistry.registerComponent('Component', () => App); const app = new App();
<<<<<<< HEAD
if (Platform.OS == 'ios') {
    const app = new App({});
}
=======
if (Platform.OS == "ios") {
  const app = new App({});
}
>>>>>>> 4c55aff6ce51c4b66965654ec5698a826360ce1a
