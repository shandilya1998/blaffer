import React, {Component} from "react";
import {View, Text} from "react-native";
import styles from "../../assets/styles";

class SavedItineraryScreen extends Component{

    static navigationOptions = ({ navigation }) => ({
        title : 'TRAVEL APP',
        headerStyle : styles.appTitle,
        headerTitleStyle : styles.appTitleText,
        headerRight:<View></View>, 
      });
    
    render(){
        return(
            <View>
                <Text>Saved Itinerary Screen</Text>
            </View>
        );
    }
}

export default SavedItineraryScreen;