// register all screens of the app (including internal ones)

/**
 * @flow
 */
import { Navigation,ScreenVisibilityListener } from 'react-native-navigation';

import SectionListScene from './src/SectionListScene';
import BasicListScene from './src/BasicListScene';


export function registerScreens() {
    Navigation.registerComponent('Section', () => SectionListScene);
    Navigation.registerComponent('Basic', () => BasicListScene);
  }

export function registerScreenVisibilityListener() {
    new ScreenVisibilityListener({
        willAppear: ({screen}) => console.log(`Displaying screen ${screen}`),
        didAppear: ({screen, startTime, endTime, commandType}) => console.log('screenVisibility', `Screen ${screen} displayed in ${endTime - startTime} millis [${commandType}]`),
        willDisappear: ({screen}) => console.log(`Screen will disappear ${screen}`),
        didDisappear: ({screen}) => console.log(`Screen disappeared ${screen}`)
    }).register();
}
