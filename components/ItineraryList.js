import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import styles from '../assets/styles';
import data from '../assets/data/data';

class ItineraryList extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<View style = {{justifyContent : 'center', alignItems : 'center'}}>
				<View style={styles.inputView}>
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
                                                                        color: '#1faadb'}
                                                        }}/>
                                        </View>
				<View>
					<FlatList 
						style = {styles.ItineraryListFlatList}
						data = {data}
						keyExtractor = {(item, index) => item.idplace}/>
				</View>
			</View>
		);
	}
}

export default ItineraryList;
