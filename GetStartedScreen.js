import React from 'react';
import { View, Text, Button } from 'react-native';

const GetStartedScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to my app!</Text>
      <Button title="Register" onPress={() => navigation.navigate('Register')} />
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default GetStartedScreen;
