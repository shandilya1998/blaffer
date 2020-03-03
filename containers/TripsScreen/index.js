import {createStackNavigator} from 'react-navigation-stack';
import TripsScreen from './TripsScreen';
import CustomItineraryBuilder from './CustomItineraryBuilder';
import PlannedTrips from './PlannedTrips';
import PreviousTrips from './PreviousTrips';


let stack =  createStackNavigator(
	{
		home : {screen : TripsScreen},
		builder : {screen : CustomItineraryBuilder},
		planned : {screen : PlannedTrips},
		previous : {screen : PreviousTrips}
	},
	{

		initialRouteName : 'home',
	}
);

export default stack;

