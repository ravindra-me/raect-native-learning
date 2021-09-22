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
} from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

import Header from './components/header.js';

// function UserName(props) {
//   console.log(props);
//   const {name, todo} = props;
//   return (
//     <>
//       <FlatList
//         numColumns={2}
//         keyExtractor={item => item.name}
//         renderItem={({item}) => {
//           return (
//             <TouchableOpacity
//               style={{color: 'white', backgroundColor: 'black'}}
//               onPress={() => console.log(item)}>
//               <Text
//                 style={{padding: 5, backgroundColor: 'gray', borderRadius: 10}}>
//                 {item.name}
//               </Text>
//             </TouchableOpacity>
//           );
//         }}
//         data={todo}
//       />
//       <View>
//         {todo.map((elem, index) => (
//           <View
//             key={index}
//             style={{display: 'flex', justifyContent: 'space-between'}}>
//             <Text>{elem.name}</Text>
//             <Button title="delete" />
//           </View>
//         ))}
//       </View>
//     </>
//   );
// }

// const initial = [
//   {
//     name: 'ravindra',
//   },
// ];

// function App() {
//   const [state, setstate] = useState('');
//   const [todo, setTodod] = useState(initial);

//   const handleTodo = () => {
//     setTodod(preState => {
//       return todo.concat({name: state});
//     });
//   };

//   console.log({todo}, 'Ravindra');

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       {/* <ScrollView contentContainerStyle={{flex: 1}}> */}
//       <View style={styles.header}>
//         <Text style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
//           Todo
//           <Text
//             style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
//             App
//           </Text>
//         </Text>
//       </View>
//       <View style={styles.baseText}>
//         <TextInput
//           placeholder="enter the user name"
//           style={styles.textInput}
//           value={state}
//           onChangeText={val => setstate(val)}
//         />
//         <Button
//           title="Add Todo"
//           onPress={handleTodo}
//           style={styles.submitBtn}
//           color="black"
//           backgroundColor="black"
//         />
//       </View>
//       <View>
//         <UserName name="Praveen" todo={todo} />
//       </View>
//       {/* </ScrollView> */}
//     </SafeAreaView>
//   );
// }

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

  return (
    <SafeAreaView>
      <View>
        <Header />
        <View>
          <FlatList
            data={todos}
            renderItem={({item}) => {
              console.log(item);
              return <Text>{item.title}</Text>;
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );

  //view port for list
}

const styles = StyleSheet.create({
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
