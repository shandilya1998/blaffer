import React, {Component} from "react";
import styles from "../../assets/styles"
import {View, Text} from "react-native";

class EditProfileScreen extends Component{

    static navigationOptions = ({ navigation }) => ({
        title : 'TRAVEL APP',
        headerStyle : styles.appTitle,
        headerTitleStyle : styles.appTitleText,
        headerRight:<View></View>, 
      });
    
    render(){
        return(
            <View>
                <Text>Edit Profile here</Text>
            </View>
        );
    }
}

export default EditProfileScreen;