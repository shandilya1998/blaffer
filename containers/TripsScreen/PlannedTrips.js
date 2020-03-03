import React, {Component} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from '../../assets/styles';

class PlannedTrips extends Component{
        constructor(props){
                super(props);
        }

        static navigationOptions = (navigation) => ({
                headerShown : false
        });

        render(){
                return(
                        <ImageBackground
                                source={require('../../assets/images/bg.png')}
                                style={styles.bg}>
                                        <View style = {styles.itineraryView}>
                                                <Text>Planned Trips</Text>
                                        </View>
                        </ImageBackground>

                );
        }
}

export default PlannedTrips;

