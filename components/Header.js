import React, {Component} from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import styles from '../assets/styles';

class Header extends Component{
	constructor(props){
		super(props);
		this.getLeftButton = this.getLeftButton.bind(this);
		this.getRightButton = this.getRightButton.bind(this);
		this.renderLeftButton = this.renderLeftButtonImage.bind(this);
		this.renderRightButton = this.renderRightButtonImage.bind(this);
	}

	renderLeftButtonImage(){
		return this.props.leftButtonImage();
	}

	renderRightButtonImage(){
		return this.props.rightButtonImage();
	}

	getLeftButton(){
		if (this.props.leftButtonVisible){
			return(
				<TouchableOpacity onPress = {()=>this.props.onPressLeftButton()}>
					{this.renderLeftButtonImage()}
				</TouchableOpacity>
			);
		}
		else{
			return(<View><Image source = {require('../assets/images/transparent.png')}/></View>);
		}
	}

	getRightButton(){
		if (this.props.rightButtonVisible){
                        return(
                                <TouchableOpacity onPress = {()=>this.props.onPressRightButton()}>
                                        {this.renderRightButtonImage()}
                                </TouchableOpacity>
                        );
                }
                else{
                        return(<View><Image source = {require('../assets/images/transparent.png')}/></View>);
                } 
	}

	render(){
		return(
		<View style = {styles.header}>
			<View style = {styles.headerContainer}>
				<View>
					{this.getLeftButton()}
				</View>
				<View>
					<Image source = {require('../assets/images/icons/temp_logo.png')}/>
				</View>
				<View>
					{this.getRightButton()}
				</View>
			</View>
		</View>);

	}
}

export default Header;
