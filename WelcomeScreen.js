import React from 'react';
import { View, Text, Button } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to the app!</Text>
      <Button title="Logout" onPress={() => navigation.navigate('GetStarted')} />
    </View>
  );
};

export default WelcomeScreen;
