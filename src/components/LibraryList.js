import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import ListItem from './ListItem';

const LibraryList = (props) => {
  const courses = useSelector((state) => state.libraries);

  return (
    <View>
      <FlatList
        data={courses}
        keyboardDismissMode={({item}) => item.id}
        renderItem={(course, index) => {
          return <ListItem library={course} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default LibraryList;
