import React, { useContext } from 'react';
import { StyleSheet, Button, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo//vector-icons';

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost } = useContext(Context);

  return <View>
    <FlatList 
      data={state}
      keyExtractor={(blogPost) => blogPost.title}
      renderItem={({ item }) => {
        return <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
          <View style={styles.row}>
            <Text style={styles.title}>{item.title}</Text>
            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
              <Feather style={styles.icon} name="trash" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>;
      }}
    />
  </View>
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" size={30} style={{ paddingRight: 10 }} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  }
});

export default IndexScreen;