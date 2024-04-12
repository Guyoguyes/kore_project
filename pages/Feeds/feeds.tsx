import React, { useState } from 'react';
import { View, useWindowDimensions, SafeAreaView } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';
import Discussion from '../../components/Feeds/Discussion/Discussion';
import Clubs from '../../components/Feeds/Clubs/Clubs';
import DiscussionTabs from '../../components/Feeds/Discussion/DiscussionTab';

const renderScene = SceneMap({
  first: Discussion,
  second: Clubs,
});

function Feeds() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Discussion' },
    { key: 'second', title: 'Clubs' },
  ]);

  return (
    <SafeAreaView style={{ flex: 1, marginBottom: 5 }}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />

    </SafeAreaView>
  );
}

export default Feeds;
