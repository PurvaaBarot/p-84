import React from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from "../screens/Feed";
import CreatePost from '../screens/CreatePost';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { RFValue } from "react-native-responsive-fontsize";
import { StyleSheet } from "react-native";

const Tab =createMaterialBottomTabNavigator();
const BottomTabNavigator =() => {
    return(
        <Tab.Navigator
        labeled={false}
        barStyle={styles.bottomtab} 
         screenOptions = {({route}) => ( {
           tabBarIcon : ({focused , color , size}) => {
               let iconName
               if (route.name === 'Feed'){
                   iconName = focused ? 'home' : 'home-outline'
               }

               else  if (route.name === 'CreatePost'){
                iconName = focused ? 'add-circle' : 'add-circle-outline'
            }

            return <Ionicons name = {iconName} size = {RFValue(25)} color = {color} style={styles.iconstyle}/>                
           }
         })}
            activeColor={'#ee8249'}
            inActiveColor={'grey'}
         >
            <Tab.Screen name='Feed' component={Feed}/>
            <Tab.Screen name='CreatePost' component={CreatePost}/>
        </Tab.Navigator>
    )
}
export default BottomTabNavigator;

const styles = StyleSheet.create({
    bottomtab : {
        backgroundColor : '#2f345d',
        height : '8%',
        borderTopLeftRadius : 30,
        borderTopRightRadius : 30,
        overflow : 'hidden',
        position : 'absolute'
    },
    iconstyle : {
        width : RFValue(30),
        height : RFValue(30),
    }
})