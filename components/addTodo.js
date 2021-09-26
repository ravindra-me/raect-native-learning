import React, {useState} from 'react';

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
import uuid from 'react-native-uuid';
export default function addTodo(props) {
  const [title, setTitle] = useState('');

  const {onHandler} = props;

  const handleChange = val => {
    setTitle(val);
  };

  return (
    <View>
      <TextInput
        placeholder="enter your todo"
        style={styles.input}
        onChangeText={handleChange}
      />
      <View style={[styles.button]}>
        <Button
          title="ADD TODO"
          color="white"
          onPress={() =>
            onHandler({
              title,
              id: uuid.v4(),
            })
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    margin: 5,
    marginTop: 20,
    borderBottomWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
  },
  button: {
    backgroundColor: 'green',
    padding: 5,
    margin: 5,
    marginTop: 20,
    borderRadius: 5,
  },
});
