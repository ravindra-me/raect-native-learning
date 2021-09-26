/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';

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
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

// Icon.loadFont().then();

const data = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

function App() {
  // view port for style container
  const [todos, setTodo] = useState(data);

  const handleAddTodo = obj => {
    if (obj.title.length > 3) {
      setTodo(preTodo => {
        return preTodo.concat(obj);
      });
    } else {
      Alert.alert('OOPS!', 'Todo mush be over three character long', [
        {text: 'Understood', onPress: () => console.log('alert close')},
      ]);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        {/* <Icon name="ios-book" color="#4F8EF7" /> */}
        <Icon
          name="facebook"
          backgroundColor="#3b5998"
          // onPress={this.loginWithFacebook}
        >
          Login with Facebook
        </Icon>
        <Header />
        <View>
          <AddTodo onHandler={handleAddTodo} />
        </View>
        <View style={{flex: 1}}>
          <FlatList
            data={todos}
            renderItem={({item}) => {
              return <TodoItem item={item} />;
            }}
            style={{flex: 1}}
          />
        </View>
      </View>
    </SafeAreaView>
  );

  //view port for list
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseText: {
    display: 'flex',
    fontFamily: 'Cochin',
    color: 'red',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 20,
    flexDirection: 'row',
  },
  header: {
    color: 'white',
    backgroundColor: 'black',
    textAlign: 'center',
    padding: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  textInput: {
    borderWidth: 1,
    padding: 5,
    borderColor: 'red',
    borderRadius: 5,
  },
  submitBtn: {
    color: 'red',
  },
});

export default App;
