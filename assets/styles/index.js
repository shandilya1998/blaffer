import {StyleSheet, Dimensions, PixelRatio} from "react-native"
const PRIMARY_COLOR = "#7444C0";
const SECONDARY_COLOR = "#5636B8";
const WHITE = "#FFFFFF";
const GRAY = "#757E90";
const DARK_GRAY = "#363636";
const BLACK = "#000000";

const ONLINE_STATUS = "#46A575";
const OFFLINE_STATUS = "#D04949";

const STAR_ACTIONS = "#FFA200";
const LIKE_ACTIONS = "#B644B2";
const DISLIKE_ACTIONS = "#363636";
const FLASH_ACTIONS = "#5028D7";

const ICON_FONT = "tinderclone";

const DIMENSION_WIDTH = Dimensions.get("window").width;
const DIMENSION_HEIGHT = Dimensions.get("window").height;

function wp (percentage) {
  const value = (percentage * DIMENSION_WIDTH) / 100;
  return Math.round(value);
}

const listItemmargin = ((DIMENSION_WIDTH -100)/6 - 30)/2

const itemHorizontalMargin = wp(2);
export const sliderWidth = wp(60);
export const itemWidth = sliderWidth + itemHorizontalMargin * 2;

export default StyleSheet.create({
  //CONTAINERS
  containers : {
    flex : 1,
    flexDirection : "column",
    justifyContent : "center",
    alignItems : "center"
  },
  //BACKGROUND IMAGE 
  bg: {
    flex: 1,
    resizeMode: "cover", 
    justifyContent : 'space-between',
    alignItems : 'stretch',
    width: DIMENSION_WIDTH,
    height: DIMENSION_HEIGHT
  },
  //APP TITLE
  appTitle : {

  },
  appTitleText :{
    alignSelf: 'center',
    textAlign: "center",
    justifyContent: 'center',
    flex: 1,
    fontWeight: 'bold',
    textAlignVertical: 'center'
  },
  //TITLE WITH BACk BUTTON
  appTitleWithBack : {
    flex : 5,
    flexDirection : "row",
    justifyContent: "space-between",
    alignContent: "space-between",
    alignItems : "center",
    paddingTop : 25,
  },
  backButton : {
    flex : 1,
  },
  appTitleWithBackText : {
    flex : 1,
    flexDirection : "row",
    justifyContent : "space-between",
    alignContent : "center",
    fontSize : 22,
    backgroundColor : "red",
  },
  helpButtonTitle : {
    flex : 1
  },
  //SCREEN
  screen : {
    flex : 95,
    flexDirection : "column",
    justifyContent : "space-evenly",
    alignItems : "center",
  },
  //TRIPS SCREEN
  tripScreen : {
    flex : 85,
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingVertical: 75
  },
  tripScreenOptionsView : {
    flex : 1,
    flexGrow: 0.85,
    width: DIMENSION_WIDTH,
    justifyContent : "space-evenly",
    alignItems : "center",
    alignSelf: "baseline",
    flexShrink: 1
  },
  tripScreenOptionButton : {
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor: WHITE,
    borderRadius:10,
    borderWidth: 1,
    borderColor: WHITE
  },
  tripScreenOptionText :{
    color: BLACK,
    textAlign:"center",
    paddingLeft : 10,
    paddingRight : 10,
    fontSize : 20
  },

  //HEADER
  header : {
	  flexDirection : 'row', 
	  justifyContent : 'flex-start'},
  headerContainer : {
    flex : 15,
    flexDirection : 'row',
    justifyContent : 'space-between', 
    alignItems : 'center',
    marginTop : 10,
    marginBottom : 10},
  placesDirectoryHeaderContainer :{
    flex : 1,
    justifyContent : 'space-between',
    alignItems : 'center'
  },
  //CUSTOM ITINERARY BUILDER
  inputView : {
    justifyContent : "center",
    alignItems : "center",
  },
  itineraryView : {
    flex : 9,
    justifyContent : "center",
    alignItems : "center",
  },
  //TEXT BOX ITINERARY BUILDER
  googleAutocompletecontainer : {
    flex : 1,
    flexDirection : "column",
    justifyContent : "center",
    alignItems : "center",
    width : DIMENSION_WIDTH,
    marginTop : 75, 
  },
  googleAutocompleteTextInputContainer : {
    backgroundColor: "transparent",
    height: 44,
    borderTopColor: "transparent",
    borderBottomColor: "transparent",
    borderTopWidth: 1 / PixelRatio.get(),
    borderBottomWidth: 1 / PixelRatio.get(),
    flexDirection: 'row',
  },
  googleAutocompleteListView : {
    top:40,
    position: 'absolute',
    height: DIMENSION_HEIGHT,
    width: DIMENSION_WIDTH,
    backgroundColor : WHITE,
  },
  googleAutocompleteTextInput : {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 16,
  },
  googleAutocompleteListView : {
    backgroundColor : WHITE
  },
  addPlaceToItineraryButtonIcon : {
    justifyContent : "center", 
    alignItems : "center",
    marginLeft : 7 
  },
  planTripButton : {
    justifyContent : "center", 
    alignItems : "center",
    marginRight : 7 },
  //APP TITLE WITH ITINERARY BUTTON
  appTitleWithItineraryButton : { 
    flex : 1,
    fontSize : 22,
    backgroundColor : "red",
  },
  itineraryButton : {
    flex : 1,
    backgroundColor : "blue",
  },
  //PLACES DIRECTORY SCREEN V1
  placesDirectoryScreen : {
    flex : 1,
    flexDirection : "column",
    justifyContent : "center",
    alignItems : "center",
    alignContent : "center",
    marginHorizontal : 40,
    marginVertical : 40,
  },
  cardStackStyle : {
    flex : 1,
    flexDirection : "column",
    justifyContent : "center",
    alignItems : "center",
  },
  ItineraryStyleIndicatorStyle: {
    flex : 1,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  nameDescriptionContainer : {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginBottom: 10
  },
  cardContainerStyle : {
    flex : 1,
    width : DIMENSION_WIDTH*0.935,
    minHeight : DIMENSION_HEIGHT*0.74,
    marginTop : 2
  },
  cardWrapperStyle : {
    flex : 1,
    flexDirection : 'column', 
    justifyContent : 'center'
  },
  imageCarouselViewStyle : {
    flex : 20, 
    backgroundColor : 'red'
  },
  cardButtonsViewStyle : {
    flex : 1, 
    flexDirection : "row", 
    justifyContent : "space-around", 
    alignItems : "center",
  },
  safeAreaViewContainer: {
    height : '90%',
    backgroundColor: '#fff',
    flex : 1,
  },
  statusStyle: {
    flex : 1,
    flexDirection : 'row',
    padding: 15,
    justifyContent: 'space-around',
    alignItems : 'center',
    marginTop : 5,
  },
  detailWrapper: {
    flex : 1,
    marginTop: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems : 'center',
    marginBottom: 10,
  },
  itineraryListContainer : {flex : 85, justifyContent : 'center', alignItems : 'center'},
  // COMPONENT ITINERARY SIZE INDICATOR
  itinerarySizeIndicatorView: {
    flexDirection : 'row',
    justifyContent : 'center',
		backgroundColor: WHITE,
		padding: 10,
		borderRadius: 20,
		width: 130,
		shadowOpacity: 0.5,
		shadowRadius: 10,
		shadowColor: BLACK,
    shadowOffset: { height: 0, width: 0 },
    borderColor : BLACK,
    borderWidth : 1
  },
	filtersText: {
		fontFamily: ICON_FONT,
		color: DARK_GRAY,
    fontSize: 16
  },
  // COMPONENT - CURRENT ITINERARY VIEW BUTTON
  currentItineraryButtonView : {
    flexDirection : 'row',
    justifyContent : 'center',
		backgroundColor: WHITE,
		padding: 10,
		borderRadius: 20,
		width: 130,
		shadowOpacity: 0.5,
		shadowRadius: 10,
		shadowColor: BLACK,
    shadowOffset: { height: 0, width: 0 },
    borderColor : BLACK,
    borderWidth : 1
  },
  // COMPONENT - SWIPE
  cardStyle: {
    position: 'absolute',
    width: DIMENSION_WIDTH
  },
  cardContainerViewStyle : {
    flex : 30,
    flexDirection : 'column', 
    justifyContent : 'center', 
    alignItems : 'center',
  },
  //COMPONENT - LISTITEM
  listItemContainerStyle : {
    flex : 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    width : DIMENSION_WIDTH,
   },
   listItemtitleStyle : {
     flex : 1,
     fontSize : 18,
   },
  //PROFILE SCREEN
  profileScreen : {
    flex : 1,
    flexDirection : "column",
    justifyContent : "space-between",
    alignItems : "center"
  },
  upperProfileScreen : {
    flex : 1,
    justifyContent : "space-evenly",
  },
  avatarContainer : {
    flex : 1,
    flexDirection : "row",
    justifyContent : "center",
    alignItems : "center",
    marginVertical : 10,
  },
  nameDescriptionContainer : {
    flex : 1,
    flexDirection : "column", 
    justifyContent : "center", 
    alignItems : "center"
  },
  nameText : {
    flex : 1,
    fontSize : 18
  },
  descriptionText : {
    flex : 1, 
    fontSize : 15
  },
  profileButtonContainer : {
    flex : 1, 
    flexDirection : "row", 
    justifyContent : "space-evenly"
  },
  settingsContainer : {
    flex : 2.7
  },
  // COMPONENT - PLACE IMAGE CAROUSEL
  buttonViewWithinImage : {
    flex : 1,
    flexDirection : 'row',
    justifyContent : 'space-between', 
    alignItems : 'center',
  },
  // PLACES DIRECTORY SCREEN V2
  cardContainer : {
    flex : 1, 
    alignItems : 'center',
    justifyContent : 'center',
    height : DIMENSION_HEIGHT*0.75,
  },
  ImagePlaces : {
    flex : 1,
    resizeMode : 'repeat',
    flexDirection : 'row',
    width : DIMENSION_WIDTH*0.9,
    alignItems : 'flex-end',
    justifyContent : 'center',
    borderWidth : 2,
    borderColor : BLACK, 
    overflow : 'hidden',
  },
  ImageContainer : {
    flex : 1,
    justifyContent : 'center', 
    alignItems : 'center', },
  // COMPONENT - ITINERARY LIST
  itineraryListView : {
  
  },

});
