import React, {Component} from "react";
import {Text, View} from "react-native";
import styles from "../../assets/styles";

class AboutAppScreen extends Component{
    
    //Add an app feedback screen to this
    //Third Party Licences will be here

    static navigationOptions = ({ navigation }) => ({
        title : 'TRAVEL APP',
        headerStyle : styles.appTitle,
        headerTitleStyle : styles.appTitleText,
        headerRight:<View></View>, 
      });

    render(){
        return(
            <View>
                <Text>Read about app here</Text>
            </View>
        );
    }
}

export default AboutAppScreen;