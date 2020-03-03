import React, {Component} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from '../../assets/styles';

class PreviousTrips extends Component{
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
                                                <Text>Previous Trips</Text>
                                        </View>
                        </ImageBackground>

                );
        }
}

export default PreviousTrips;


