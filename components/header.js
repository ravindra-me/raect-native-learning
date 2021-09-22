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

export default function Header() {
  return (
    <View style={styles.header}>
      <Text>Todo App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    color: '#fff',
    backgroundColor: 'coral',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    height: 50,
  },
});
