import React, {Component} from "react";
import { Text, View, ScrollView, ImageBackground, Image } from "react-native";
import styles from "../../assets/styles";
import MultiSelectList from "../../components/MultiSelectList";
import { Avatar } from 'react-native-elements';
import { TouchableOpacity } from "react-native-gesture-handler";

class ProfileScreen extends Component{

  constructor(props){
    super(props);
    this.data = [
      {
        name : "Location",
        screen : "SetLocationScreen",
        icon : {name : "location-arrow", type : "font-awesome", color : "black"}
      },
      {
        name : "Payment Details",
        screen : "PaymentDetailsScreen",
        icon : {name : "credit-card", type : "font-awesome", color : "black"}
      },
      {
        name : "Notifications",
        screen : "NotificationsSettingsScreen",
        icon : {name : "bell", type : "font-awesome", color : "black"}
      },
      {
        name : "Security",
        screen : "SecurityScreen",
        icon : {name : "unlock", type : "font-awesome", color : "black"}
      },
      {
        name : "Terms of Use",
        screen : "TermsAndConditionsScreen",
        icon : {name : "page-filled", type : "foundation", color : "black"}
      },
      {
        name : "About Us",
        screen : "AboutAppScreen",
        icon : {name : "info", type : "font-awesome", color : "black"}
      },
      {
        name : "Past Itineraries",
        screen : "SavedItineraryScreen",
        icon : {name : "clipboard-list", type : "font-awesome", color : "black"}
      },
      {
        name : "Place Preferences",
        screen : "TagSelectionScreen",
        icon : {name : "list", type : "font-awesome", color : "black"}
      }
    ];
    this.props.navigation.navigate = this.props.navigation.navigate.bind(this);
  }
  
  static navigationOptions = ({ navigation }) => ({
    title : 'TRAVEL APP',
    headerStyle : styles.appTitle,
    headerTitleStyle : styles.appTitleText,
  });

  render()
  {
    return(
        <ImageBackground
            source={require("../../assets/images/bg.png")}
            style={styles.bg}>
            <View style = {styles.profileScreen}>
              <View style = {styles.upperProfileScreen}>
                <View style = {styles.avatarContainer}>
                  <Avatar
                    rounded
                    size="large"
                    source={{
                      uri:
                        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    }}
                    showEditButton
                    onEditPress = {() => this.props.navigation.navigate("EditProfileScreen")} 
                  /> 
                </View>
                <View style = {styles.nameDescriptionContainer}>
                  <Text style = {styles.nameText}>Shreyas Shandilya</Text>
                  <Text style = {styles.descriptionText}>Runner. Running from one town to another in search of nirvana </Text>
                </View>
              </View>
              <View style = {styles.settingsContainer}>
                <MultiSelectList data = {this.data} navigation = {this.props.navigation}/>
              </View>
            </View>
        </ImageBackground>
        );
  }
}
export default ProfileScreen;


