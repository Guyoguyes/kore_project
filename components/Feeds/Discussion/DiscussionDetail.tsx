import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Card, Avatar } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; // Make sure you import discussionsData from the correct path
import discussionsData from './discussionData';

const LeftContent = () => <Avatar.Image size={40} source={require('../../../assets/images/profile.jpg')} />

const DiscussionDetail = ({ route }: any) => {

  const {itemId} = route.params;
  
  const discussion: any = discussionsData.find(item => item.id === itemId);

  return (
    <ScrollView>
      <Card style={styles.card}>
        <Card.Title title={discussion.profile} subtitle={discussion.title} left={LeftContent} />
        <Card.Content>
          <Text>{discussion.description}</Text>
        </Card.Content>
        <Card.Cover style={styles.cardCover} source={{ uri: discussion.image }} />
        <Card.Actions>
          <AntDesign name="like2" size={24} color="black" /><Text>{discussion.likes}</Text>
          <AntDesign name="dislike2" style={{marginTop: 5}} size={24} color="black" /><Text>{discussion.dislike}</Text>
          <FontAwesome name="comment-o" size={24} color="black" /><Text>{discussion.comments}</Text>
        </Card.Actions>
      </Card>
      {/* Render comments here */}
      {discussion.commentData.map((comment: any, index: any) => (
        <View key={index} style={styles.commentContainer}>
          <Text style={styles.comment}>{comment}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10
  },
  cardCover: {
    margin: 10
  },
  commentContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  comment: {
    fontSize: 16,
  }
});

export default DiscussionDetail;
