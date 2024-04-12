import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Feeds from '../Feeds/feeds';
import { Avatar, Button, } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator initialRouteName='Feeds1' screenOptions={{
      tabBarInactiveTintColor: 'gray',
    }}>
      <Tab.Screen  name="Feeds" component={Feeds} options={{tabBarIcon: ({ focused}) => (
          <Ionicons name={'receipt'}
          size={24}
          color={focused? '#0789F4' : 'gray'} />
        ), headerTitle: (props) =>( <Avatar.Image size={24} source={require('../../assets/nb1.png')} />),
      headerRight: () => (
        <View style={styles.headerRightWrapper}>
          <TouchableOpacity style={styles.imageIcon} activeOpacity={0.5}>
            <Image
            source={require('../../assets/icons/search.png')}
            style={styles.ImageIconStyle}
            />
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageIcon} activeOpacity={0.5}>
            <Image
            source={require('../../assets/icons/notification.png')}
            style={styles.ImageIconStyle}
            />
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageIcon} activeOpacity={0.5}>
            <Image
            source={require('../../assets/icons/chat.png')}
            style={styles.ImageIconStyle}
            />
        </TouchableOpacity>
        </View>
      ) }}/>
      <Tab.Screen name="Projects" component={Feeds} options={{ tabBarIcon: ({ focused}) => (
          <FontAwesome5 name={'code'}
          size={24}
          color={focused? '#0789F4' : 'gray'} />
        ),}}/>
      <Tab.Screen name="Work" component={Feeds} options={{ tabBarIcon: ({ focused}) => (
          <MaterialCommunityIcons name={'briefcase-variant'}
          size={24}
          color={focused? '#0789F4' : 'gray'} />
        ),}}/>
      <Tab.Screen name="Events" component={Feeds} options={{tabBarIcon: ({ focused}) => (
          <AntDesign name={'calendar'}
          size={24}
          color={focused? '#0789F4' : 'gray'} />
        ),}}/>
      <Tab.Screen name="Profile" component={Feeds} options={{ tabBarIcon: () => (
        <Avatar.Image size={24} source={require('../../assets/images/profile.jpg')} />
      )}}/>
  </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  headerRightWrapper: {
    marginRight: 10,
    flexDirection: 'row',
  },
  nav: {
    marginBottom: 10,
    fontSize: 12
  },
  imageIcon: {
    color: "#fff",
    margin: 10,
    marginRight: 5
  },
  ImageIconTab: {
    height: 15,
    width: 20,
    
  },
  ImageIconStyle: {
    height: 20,
    width: 20
  }
})

export default Home