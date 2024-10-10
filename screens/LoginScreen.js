import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');

  const handleLogin = () => {
    if (role.toLowerCase() === 'chef') {
      navigation.navigate('AddMenuItem');
    } else if (role.toLowerCase() === 'user') {
      navigation.navigate('Menu');
    } else {
      alert('Please enter a valid role (chef or user)');
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo using URL */}
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGc407qRX1v4Uz5lUF1gB71fx3X4qXN1XJMQ&s' }}
        style={styles.logo}
      />

      <Text style={styles.title}>Login</Text>

      {/* Username Input */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      {/* Role Input */}
      <TextInput
        style={styles.input}
        placeholder="Role (chef/user)"
        value={role}
        onChangeText={setRole}
      />

      {/* Login Button */}
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 100,  // Adjust size as needed
    height: 100, // Adjust size as needed
    marginBottom: 20, // Space between logo and title
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});

export default LoginScreen;
