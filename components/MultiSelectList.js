import React ,{Component} from "react";
import {FlatList} from "react-native";
import styles from "../assets/styles";
import {ListItem} from "react-native-elements"; 


class MultiSelectList extends Component{
    
    constructor(props){
        super(props);
    }
    
    keyExtractor = (item, index) => index.toString()

    _renderItem = ({item, key}) => (
      <ListItem
	key={key}
        title = {item.name}
        onPress = {() => this.props.navigation.navigate(item.screen)}
        containerStyle = {styles.listItemContainerStyle}
        titleStyle = {styles.listItemtitleStyle}
        leftIcon={item.icon}
      />
    );
  
    render() {
      return (
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.data}
          renderItem={this._renderItem}
          
        />
      );
    }
  }
  
export default MultiSelectList;
  
