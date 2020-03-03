import React, {Component} from "react";
import {Text, View} from "react-native";
import styles from "../../assets/styles";

class TermsAndConditionsScreen extends Component{

    static navigationOptions = ({ navigation }) => ({
        title : 'TRAVEL APP',
        headerStyle : styles.appTitle,
        headerTitleStyle : styles.appTitleText,
        headerRight:<View></View>, 
      });

    render(){
        return(
            <View>
                <Text>Read the terms and condition of use here</Text>
            </View>
        );
    }
}


export default TermsAndConditionsScreen;
