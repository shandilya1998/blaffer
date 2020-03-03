import React, {Component} from "react";
import {Text, View} from "react-native";
import styles from "../../assets/styles";
//import Map from '../../components/Map';

class SetLocationScreen extends Component{

    static navigationOptions = ({ navigation }) => ({
        title : 'TRAVEL APP',
        headerStyle : styles.appTitle,
        headerTitleStyle : styles.appTitleText,
        headerRight:<View></View>, 
      });

    render(){
        return(
            <View>
                <Text>Set Location here</Text>
            </View>
        );
    }
}

export default SetLocationScreen;
