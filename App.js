import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import PlacesDirectoryScreen from './containers/PlacesDirectoryScreen/';
import ProfileScreen from './containers/ProfileScreen/';
import TripsScreen from './containers/TripsScreen/';
import Icon from 'react-native-ionicons';
import {Provider, connect} from 'react-redux';
import rootReducer from './reducers/';
import {createStore} from 'redux';
import initialState from './reducers/initialState';
//import configureStore from './configureStore'; 


let tab = createBottomTabNavigator(
	{
		places : {
                                screen : PlacesDirectoryScreen,
                                navigationOptions: {
                                        tabBarLabel: 'places',
                                        tabBarIcon: ({ tintColor }) => (
                                                <Icon name="ios-home" />
                                        )

                                }
                        },
		trips : {
				screen : TripsScreen,
				navigationOptions: {
            				tabBarLabel: 'trips', 
            				tabBarIcon: ({ tintColor }) => (
                				<Icon ios="list-circle-outline"  />
            				)
        			}
			},
		profile : {
			screen : ProfileScreen,
				navigationOptions: {
            				tabBarLabel: 'profile', 
            				tabBarIcon: ({ tintColor }) => (
                				<Icon name="person-circle-outline" />
            				)
        			}
			},
	},
	{
		initialRouteName : 'trips',
		navigationOptions : {
			header : null,
			headerMode : 'none',
			headerVIsible : false
		}
	}
);

const AppContainer = createAppContainer(tab);
const store = createStore(rootReducer);

class App extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<Provider store = {store}>
				<AppContainer/>
			</Provider>
		);
	}
}

export default App;

