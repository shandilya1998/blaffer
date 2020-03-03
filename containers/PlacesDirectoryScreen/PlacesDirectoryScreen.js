import React, {Component} from 'react';
import {SafeAreaView, View, Text, ImageBackground, FlatList} from 'react-native';
import Header from '../../components/Header';
import styles from '../../assets/styles';
import ItineraryList from '../../components/ItineraryList';
import DATA from '../../assets/data/data.js';
import CardItem from '../../components/CardItem';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {connect} from 'react-redux';

const places = [
                {
                        id : 'ChIJ4zGFAZpYwokRGUGph3Mf37k',
                        name : 'Central Park',
                        description : 'New York\'s escape from New York',
                        image : require('../../assets/data/central-park.jpg')
                },
                {
                        id : 'ChIJPTacEpBQwokddKwIlDXelxkA',
                        name : 'Statue of Liberty National Monument',
                        description : 'A figure of Libertas, a robed Roman liberty goddess',
                        image : require('../../assets/data/Statue-of-Liberty-Island-New-York.jpg')
                },
                {
                        id : 'ChIJPTacEpBQwokRswIlDXelxkA',
                        name : 'Rockefeller Center',
                        description : 'A large complex Midtown Manhattan, New York City',
                        image : require('../../assets/data/rockefellar-center.jpg')
		}
        ];


class PlacesDirectoryScreen extends Component{
	constructor(props){
		super(props);
        	//this.service = new fetchService
		this.renderItem = this.renderItem.bind(this);
	}

	static navigationOptions = (navigation) => ({
		headerShown : false
	});


	renderItem(item, index, separator){
		console.log(item)
		return(
			<View style = {{margin : 5}}>
				<CardItem 
					itinerary = {this.props.itinerary}
					id = {item.item.id}
					image = {item.item.image}
					name = {item.item.name}
					description = {item.item.description}
					navigation = {this.props.navigation}/>
			</View>
		);
		
	}

	render(){
		console.log(this.props.places)
		console.log(this.props.test)
		console.log(this.props.pending)
		return(
			<ImageBackground 
				source = {require('../../assets/images/bg.png')}
				style = {styles.bg}>
				<View style = {styles.header}>
					<View style = {styles.headerContainer}>
                                		<Header
                                        		leftButtonVisible = {false}
                                        		rightButtonVisible = {false}/>
                        		</View>
				</View>
				<View style = {[styles.inputView, {flex : 10}]}>
					<GooglePlacesAutocomplete
                                                        placeholder='Search for a place here'
                                                        minLength = {2}
                                                        autoFocus = {false}
                                                        fetchDetails={true}
                                                        query={{
                                                                key: 'AIzaSyAybzYaBKYlMjUPx-rjUkcSeTXSyFGOXpU',
                                                                language: 'en'}}
                                                        styles={{
                                                                container : styles.googleAutocompletecontainer,
                                                                textInputContainer: styles.googleAutocompleteTextInputContainer,
                                                        textInput: styles.googleAutocompleteTextInput,
                                                        listView: styles.googleAutocompleteListView}}
                                                        nearbyPlacesAPI='GooglePlacesSearch'
                                                        GooglePlacesSearchQuery={{
                                                                rankby: 'distance',
                                                        }}
                                                        GooglePlacesDetailsQuery={{
                                                                fields: ['formatted_address','geometry','place_id','photos','place_id','reviews','website','name', 'opening_hours']

                                                        }}
                                                        styles={{
                                                                textInputContainer: {
                                                                        width: '100%'
                                                                },
                                                                description: {
                                                                        fontWeight: 'bold'
                                                                },
                                                                predefinedPlacesDescription: {
                                                                        color: '#1faadb'
                                                                }}}/>
				</View>
				<SafeAreaView style = {styles.itineraryListContainer}>	
					<FlatList 
						data = {this.props.places}
						renderItem = {(item, index, separator)=>this.renderItem(item, index, separator)}
						keyExtractor = {(item)=>item.id}
						ListEmptyComponent = {()=><View><Text>Places coming in a moment</Text></View>}/>
				</SafeAreaView>
			</ImageBackground>
		);
	}
}

const mapStateToProps = (state) => {
	console.log('lol')
	console.log(state)
	console.log(state.places)
	return {
		places : state.places.state.places,
		itinerary : state.places.state.itinerary
	};
};

export default connect(mapStateToProps, null)(PlacesDirectoryScreen);
