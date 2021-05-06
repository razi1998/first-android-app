import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <View style={styles.container}>
        <Text style={{ fontSize: 20, }}>You pressed {count} times.</Text>
        <View style={styles.content}>
          <Button title="Increment" onPress={() => setCount(count + 1)} />
        </View>
        <View style={styles.content}>
          <Button title="Decrement" onPress={() => setCount(count - 1)} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  content: {
    marginTop: 20,
    flexDirection: 'row',
    
  }
});
