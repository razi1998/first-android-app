import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <View style={styles.container}>
        <Text style={{ fontSize: 20,alignSelf: 'center' }}>You pressed {count} times.</Text>
        <View style={styles.content}>
          <Button title="Increment" onPress={() => setCount(count + 1)} />
          <Button title="Decrement" onPress={() => setCount(count - 1)} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  content: {
    marginTop: 20,
    flexDirection:'row',
    justifyContent:'space-evenly'   
  }
});
