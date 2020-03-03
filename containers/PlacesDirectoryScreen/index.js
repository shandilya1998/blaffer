import {createStackNavigator} from 'react-navigation-stack';
import PlacesDirectoryScreen from './PlacesDirectoryScreen';

let stack = createStackNavigator(
	{
		home : {screen : PlacesDirectoryScreen}
	},
	{
		initialRouteName : 'home',
	}

);

export default stack;
