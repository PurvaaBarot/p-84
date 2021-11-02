import React , {Component} from 'react';
import {Text , View , StyleSheet, SafeAreaView, Platform , Image , TouchableOpacity} from 'react-native';
import PostCard from './PostCard';
import { RFValue } from "react-native-responsive-fontsize";
import { FlatList } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

let posts = require('./temp_post.json');

export default class Feed extends Component {
   
    keyExtractor = (item , index) =>  {
        index.toString();
    }

     renderItem = ({item : posts}) => {
        return <PostCard post = {posts} navigation={this.props.navigation}/>
    }

    render () {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View style={styles.appTitle}>
                    <View style={styles.appIcon}>
                        <Image source={require('../assets/logo.png')} style={styles.iconImage}></Image>
                    </View>
                    <View style={styles.appTitleTextContainer}>
                        <Text style={styles.appTitleText}>Spectagram</Text>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <FlatList 
                    keyExtractor={this.keyExtractor}
                    data={posts}
                    renderItem={this.renderItem}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
container : {
    flex: 1,
    backgroundColor: "#35E0E1"
},

droidSafeArea : {
    marginTop : Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35)
},

appTitle : {
    flex: 0.07,
    flexDirection: "row"
},

appIcon : {
    flex: 0.3,
      justifyContent: "center",
      alignItems: "center"
},

iconImage : {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
},

appTitleTextContainer : {
    flex: 0.7,
    justifyContent: "center"
},

appTitleText : {
    color: "white",
    fontSize: RFValue(20),
},

cardContainer : {
    flex: 0.93   
}
})