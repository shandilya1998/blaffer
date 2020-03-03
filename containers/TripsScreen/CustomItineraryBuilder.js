import React, {Component} from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import styles from '../../assets/styles';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Header from '../../components/Header';

class CustomItineraryBuilder extends Component{
	constructor(props){
		super(props);
		this.props.navigation.goBack = this.props.navigation.goBack.bind(this);
	}

	static navigationOptions = (navigation) => ({
		headerShown : false
	});

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
	}

	render(){
		return(
			<ImageBackground
                                source={require('../../assets/images/bg.png')}
                                style={styles.bg}>
					<Header 
						leftButtonVisible = {true}
						rightButtonVisible = {true}
						onPressLeftButton = {()=>this.props.navigation.goBack()}
						onPressRightButton = {()=>this.onPressPlanButton()}
						leftButtonImage = {()=>this.renderBackButton()}
						rightButtonImage = {()=>this.renderPlanTripButton()}/>

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
          								color: '#1faadb'
        							}}}/>
					</View>
                                        <View style = {styles.itineraryView}>
                                        	<Text></Text>
                                        </View>
                        </ImageBackground>

		);
	}
}

export default CustomItineraryBuilder;
