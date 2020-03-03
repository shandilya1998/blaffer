import React ,{Component} from "react";
import styles from "../assets/styles";
import { Text, ScrollView, View, Image, Dimensions, TouchableOpacity, ImageBackground } from "react-native";
import {withNavigation} from 'react-navigation';
import {connect} from 'react-redux';
import {updateItinerary} from '../actions/actions_v1';

// refer to the following link for how props were passed to this component
// https://reactnavigation.org/docs/en/connecting-navigation-prop.html

//the props passed to CardItem are the elements of the response from places API
class CardItem extends Component{
    constructor(props){
        super(props);
	this.addToItinerary = this.addToItinerary.bind(this);
        }

	
    addToItinerary(){
	//console.log(this.props.itinerary);
    	let itinerary = this.props.itinerary;
	itinerary.push(this.props.id);
	this.props.add(itinerary);
	//later add code to remove this place from the list.
    }

    //check if the images are properly returned. Check the output of the function getImage function
    render(){
        return(
            <View style = {styles.cardContainer}>
                <View styles = {styles.ImageContainer}>
                    <ImageBackground source ={this.props.image} style = {styles.ImagePlaces} resizeMethod = 'auto'>
			<View style = {{flex : 1, flexDirection : 'row', justifyContent : 'space-around', padding : 20}}>
                            <TouchableOpacity>
                                <Image source = {require("../assets/images/icons/icons8-thumbs-down-26.png")} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {this.props.navigation.navigate("MoreInfoScreen")}>
                                <Image source = {require("../assets/images/icons/icons8-info-26.png")} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source = {require("../assets/images/icons/icons8-two-hearts-26.png")} />
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
		    <View style = {styles.cardItemDescriptionContainer}>
                        <Text style = {{fontSize : 14, textAlign : 'center'}}>{this.props.name}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch)=>{
	return({
		add : ()=>dispatch(updateItinerary(itinerary))
	});
};

export default connect(null, mapDispatchToProps)(CardItem);
