import React from 'react';
import { View, Text, Button } from 'react-native';

const Signup = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Signup Ekranı</Text>
      <Button title="Geri Dön" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Signup;
