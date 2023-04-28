import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Handle registration logic here
    console.log('Registered successfully');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Register Screen</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={{ borderWidth: 1, padding: 10, margin: 10, width: '80%' }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={{ borderWidth: 1, padding: 10, margin: 10, width: '80%' }}
        secureTextEntry
      />
      <Button title="Register" onPress={handleRegister} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default RegisterScreen;
