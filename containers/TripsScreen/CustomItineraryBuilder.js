import React, {Component} from 'react';
import {SafeAreaView, View, Text, ImageBackground, FlatList} from 'react-native';
import Header from '../../components/Header';
import styles from '../../assets/styles';
import ItineraryList from '../../components/ItineraryList';
import DATA from '../../assets/data/data.js';
import CardItem from '../../components/CardItem';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {connect} from 'react-redux';

class CustomItineraryBuilder extends Component{

	onPressPlanButton(){
		console.log('Plan Button Pressed')
	}

	renderBackButton(){
		return(
			<Image source={require('../../assets/images/icons/icons8-back-arrow-30.png')}/>
		);
	}

	renderPlanTripButton(){
		return(
			<Image source={require('../../assets/images/icons/plan-trip-icon.png')}/>
		);
	}constructor(props){
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
				<SafeAreaView style = {styles.itineraryListContainer}>	
					<FlatList 
						data = {this.props.itinerary}
						renderItem = {(item, index, separator)=>this.renderItem(item, index, separator)}
						keyExtractor = {(item)=>item.id}
						ListEmptyComponent = {()=><View><Text>Add Places to see them here</Text></View>}
						numColumns={2}/>
				</SafeAreaView>
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
			</ImageBackground>
		);
	}
}

const mapStateToProps = (state) => {
	console.log('lol')
	console.log(state)
	console.log(state.places)
	return {
		itinerary : state.places.state.itinerary
	};
};

export default connect(mapStateToProps, null)(CustomItineraryBuilder);
