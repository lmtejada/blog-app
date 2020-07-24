import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context),
    id = navigation.getParam('id')
    blogPost = state.find(blogPost => blogPost.id === id);

  return <View>
    <Text>{blogPost.title}</Text>
    <Text>{blogPost.content}</Text>
  </View>;
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={
          () => navigation.navigate('Edit', { id })
        }
      >
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({});

export default ShowScreen;