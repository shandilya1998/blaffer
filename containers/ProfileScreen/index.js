import { createStackNavigator } from 'react-navigation-stack';
import ProfileScreen from "./ProfileScreen";
import SetLocationScreen from "./SetLocationScreen";
import PaymentDetailsScreen from "./PaymentDetailsScreen";
import TermsAndConditionsScreen from "./TermsAndConditionsScreen";
import NotificationsSettingsScreen from "./NotificationsSettingsScreen";
import SecurityScreen from "./SecurityScreen";
import AboutAppScreen from "./AboutAppScreen";
import TagSelectionScreen from "./TagSelectionScreen";
import SavedItineraryScreen from "./SavedItineraryScreen";
import EditProfileScreen from "./EditProfileScreen";

export default createStackNavigator(
  {
      ProfileScreen : {screen : ProfileScreen},
      SetLocationScreen : {screen : SetLocationScreen},
      PaymentDetailsScreen : {screen : PaymentDetailsScreen},
      TermsAndConditionsScreen : {screen : TermsAndConditionsScreen},
      NotificationsSettingsScreen : {screen : NotificationsSettingsScreen},
      SecurityScreen : {screen : SecurityScreen},
      AboutAppScreen : {screen : AboutAppScreen},
      SavedItineraryScreen : {screen : SavedItineraryScreen},
      TagSelectionScreen : {screen : TagSelectionScreen},
      EditProfileScreen : {screen : EditProfileScreen},

  },
  {
    initialRouteName : 'ProfileScreen',
    },

);

