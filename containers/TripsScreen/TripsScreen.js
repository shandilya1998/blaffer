import React, { Component } from 'react';
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import styles from '../../assets/styles';
import Header from '../../components/Header';

class TripsScreen extends Component {
  
  constructor(props) {
    super(props);
    this.props.navigation.navigate = this.props.navigation.navigate.bind(this);
  }

  static navigationOptions = ({ navigation }) => ({
    headerShown : false
  });

  render() {
    return (
      <ImageBackground
        source={require('../../assets/images/bg.png')}
        style={styles.bg}>
	<View style = {styles.headerContainer}>
          <Header 
	    rightButtonVisible = {false}
	    leftButtonVisible = {false}/>
        </View>
        <View style={styles.tripScreen}> 
          <View style={styles.tripScreenOptionsView}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('builder')}
              style={styles.tripScreenOptionButton}>
              <View>
                <Text style={styles.tripScreenOptionText}>Build an itinerary</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('planned')}
              style={styles.tripScreenOptionButton}>
              <View>
                <Text style={styles.tripScreenOptionText}>Planned Trips</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('previous')}
              style={styles.tripScreenOptionButton}>
              <View>
                <Text style={styles.tripScreenOptionText}>Previous Trips</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default TripsScreen;
