import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import { Avatar, Badge, Button, Card } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import discussionsData from './discussionData';

const LeftContent = () => <Avatar.Image size={40} source={require('../../../assets/images/profile.jpg')} />

const Discussion = () => {
  return (
    // <SafeAreaView>
    <ScrollView>
      <View style={{ flex: 1, }} >
      {discussionsData.map((item) => {
        return (
          <Card style={styles.card} key={item.date}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Card.Title title={item.profile} subtitle={item.title} left={LeftContent} />
          {/* {item.clubs.map((club) => {
            return (
              <Badge
                key={club}
                value={club}
                style={styles}
              />
            )
          })} */}
        </View>
    
    <Card.Content>
      <Text>{item.description}</Text>
    </Card.Content>
    <Card.Cover style={styles.cardCover} source={{ uri: item.image }} />
    <Card.Actions>
      <AntDesign name="like2" size={24} color="black" /><Text>{item.likes}</Text>
      <AntDesign name="dislike2" style={{marginTop: 5}} size={24} color="black" /><Text>{item.dislike}</Text>
      <FontAwesome name="comment-o" size={24} color="black" /><Text>{item.comments}</Text>
    </Card.Actions>
  </Card>
        )
      })}
      
    </View>
    </ScrollView>
    
    // </SafeAreaView>
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

export default Discussion 
