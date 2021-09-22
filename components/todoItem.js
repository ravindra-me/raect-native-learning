import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Switch,
  Button,
  FlatList,
  Touchable,
  TouchableOpacity,
} from 'react-native';

export default function todoItem(props) {
  const {item} = props;
  return (
    <TouchableOpacity>
      <Text style={styles.item}>{item.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderRadius: 5,

    borderColor: 'black',
  },
});
