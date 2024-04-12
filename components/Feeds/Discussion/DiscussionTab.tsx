import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, ScrollView, useWindowDimensions } from 'react-native'
import { Avatar, Badge, Button, Card } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import discussionsData from './discussionData';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import Discussion from './Discussion';

const renderScene = SceneMap({
  first: Discussion,
  second: Discussion,
});

// const tabBar = () => <TabBar  />

const DiscussionTabs = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Discussionq' },
    { key: 'second', title: 'Clubs' },
  ]);
  return (
    <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        // renderTabBar={tabBar}
      />
  )
}

const styles = StyleSheet.create({
  card:{
    margin: 10
  },
  cardCover:{
    margin: 10
  }
})

export default DiscussionTabs 
