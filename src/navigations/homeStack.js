import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from  'react-navigation';
import Home from '../screens/landing'

const screens = {
    Home: {
        screen: Home,
    },
}

const homeStack = createStackNavigator(screens);

export default createAppContainer(homeStack);