import React, { Component } from "react";
import { Text, View, Image, StyleSheet, SafeAreaView, Platform, StatusBar, Dimensions } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import {RFValue} from 'react-native-responsive-fontsize';
import { ScrollView, TextInput } from "react-native-gesture-handler";

export default class CreateStory extends Component {
	constructor(props) {
		super(props);
		this.state = {
            default: 'image_1',
            dropDownHeight: 40,
		};
	}

	render() {
            let previewImages = {
                'image_1' : require('../assets/image_1.jpg'),
                'image_2' : require('../assets/image_2.jpg'),
                'image_3' : require('../assets/image_3.jpg'),
                'image_4' : require('../assets/image_4.jpg'),
                'image_5' : require('../assets/image_5.jpg'),
                'image_6' : require('../assets/image_6.jpg'),
                'image_7' : require('../assets/image_7.jpg'),
            }

            return (
			<View style={styles.container}>
				<SafeAreaView style={styles.droidSafeArea} />
				<View style={styles.appTitle}>
					<View style={styles.appIcon}>
						<Image
							source={require("../assets/logo.png")}
							style={styles.iconImage}
						></Image>
					</View>
					<View style={styles.appTitleTextContainer}>
						<Text style={styles.appTitleText}>New Post</Text>
					</View>
				</View>
                <View style={styles.fieldsContainer}>
                    <ScrollView>
                        <Image source={previewImages[this.state.default]} style={styles.previewImage}/>
                        <View style={{height : RFValue(this.state.dropDownHeight)}}>
                            <DropDownPicker
                            items = {[
                                {label : 'Image 1',value : 'image_1'},
                                {label : 'Image 2',value : 'image_2'},
                                {label : 'Image 3',value : 'image_3'},
                                {label : 'Image 4',value : 'image_4'},
                                {label : 'Image 5',value : 'image_5'},
                            ]} 
                            defaultValue = {this.state.default} containerStyle = {{height : 40, borderRadius : 20 , marginBottom : 10}}
                            onOpen = {()=>{
                                this.setState({
                                    dropDownHeight  : 170
                                })
                            }}

                            onClose = {()=>{
                                this.setState({
                                    dropDownHeight  : 40
                                })
                            }}

                            style = {{
                                backgroundColor : 'transparent'
                            }}

                            itemStyle = {{
                                justifyContent : 'flex-start'
                            }}

                            dropDownStyle = {{
                                backgroundColor : '#2f345d'
                            }}

                            labelStyle = {{
                                color : 'white',
                            }}

                            arrowStyle = {{
                                color : 'white',
                            }}

                            onChangeItem = {
                                item => {
                                    this.setState({ 
                                        defaultImage : item.value
                                    })
                                }
                            }
                            />
                        </View>

                        <TextInput 
                        style = {[styles.inputFont, styles.inputFontExtra, styles.inputTextBig]}
                        onChangeText = {
                            Caption => {
                                this.setState({
                                    Caption
                                })
                            }
                        }
                        placeholder = {'Caption'}
                        placeholderTextColor = {'white'}
                        multiline = {true}
                        numberOfLines = {4}
                        />
                       
                    </ScrollView>
                </View>
			</View>
            )
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#15193c"
	},
	droidSafeArea: {
		marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
	},
	appTitle: {
		flex: 0.07,
		flexDirection: "row"
	},
	appIcon: {
		flex: 0.3,
		justifyContent: "center",
		alignItems: "center"
	},
	iconImage: {
		width: "100%",
		height: "100%",
		resizeMode: "contain"
	},
	appTitleTextContainer: {
		flex: 0.7,
		justifyContent: "center"
	},
	appTitleText: {
		color: "white",
		fontSize: RFValue(28),
	},

    fieldsContainer : {
        flex : 0.85,
    },

    previewImage : {
        width : '93%',
        height : RFValue(250),
        alignSelf : 'center',
        borderRadius : RFValue(10),
        marginVertical : RFValue(10),
        resizeMode : 'contain'
    },

    inputFont : {
        height : RFValue(40),
        borderColor : 'white',
        borderRadius : RFValue (10),
        paddingLeft : RFValue(10),
        borderWidth : RFValue(1),
        color : 'white',
    },

    inputFontExtra : {
        marginTop : RFValue(15)
    },

    inputTextBig : {
        textAlignVertical : 'top',
        padding : RFValue(5)
    }
})