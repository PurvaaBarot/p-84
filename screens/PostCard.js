import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  ViewPagerAndroidBase,
  TouchableOpacity
} from "react-native";

import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from "react-native-responsive-fontsize";


export default class PostCard extends Component {
 
  render() {
   
      return (
          <TouchableOpacity 
          style={styles.container}
          onPress={() =>
            this.props.navigation.navigate("PostScreen", {
              Post: this.props.Post
            })
          }>
           <View style={styles.cardContainer}>
               <View style={styles.authorcontainer}>
                   <View style={styles.authorImageContainer}>
                       <Image source={require('../assets/profile_img.png')} style={styles.profileImage}/>
                   </View>
                   <View style={styles.authorNameContainer}>
                       <Text style={styles.authorNameText}>
                           {this.props.post.author}
                       </Text>
                   </View>
               </View>
               <Image source={require('../assets/post.jpeg')} style={styles.postImage}/>
               <View style={styles.captionContainer}>
                   <Text style={styles.captionText}>
                       {this.props.post.caption}
                   </Text>
               </View>
               <View style={styles.actioncontainer}>
                   <View style={styles.likebutton}>
                       <Ionicons name={'heart'} size={RFValue(30)} color={'white'}/>
                       <Text style={styles.liketext}>
                           12k
                       </Text>
                   </View>
               </View>
           </View>
       </TouchableOpacity>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  
  androidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },

  cardContainer : {
      marginTop : -20,
      marginBottom : 20,
      marginLeft : 20,
      marginRight : 20,
      backgroundColor : '#2f345d',
      borderRadius : 20,
      height : undefined,
      padding  :10
  },

  captionContainer : {
      flexDirection : 'row'
  },

  captionText : {
      flex : 1,
  },

  authorNameText : {
      fontFamily : 'BubbleGum-sans',
      fontSize : 25,
      color :'white'
  },

  authorNameContainer : {
    fontFamily : 'BubbleGum-sans',
    fontSize : 18,
    color :'white'
  },

  authorcontainer : {
      marginTop : 5
  },

  actioncontainer : {
      marginTop : 10,
      justifyContent : 'center',
      alignItems : 'center'
  },

  likebutton : {
      backgroundColor : '#eb3948',
      borderRadius : 30,
      width : 160,
      height : 40,
      flexDirection : 'row'
  },

  liketext : {
    fontFamily : 'BubbleGum-sans',
    fontSize : 25,
    color :'white',
    marginLeft : 25,
    marginTop : 6
  },

  authorImageContainer : {
      width : 30,
      height : 20,
      marginLeft : 20,
      marginTop : 5,
  },

  postImage : {
      resizeMode : 'contain',
      width : Dimensions.get('window').width-60,
      height : 260,
      borderRadius :10
  }
});