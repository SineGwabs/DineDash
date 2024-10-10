// screens/AddMenuItemScreen.js
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';


const AddMenuItemScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('Starters');
  const [price, setPrice] = useState('');

  const handleAddItem = () => {
    const newItem = { id: Date.now(), name, description, course, price };
    // Handle adding item to menu
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Dish Name</Text>
      <TextInput 
        value={name} 
        onChangeText={setName} 
        style={styles.input} 
        placeholder="Enter dish name" 
      />

      <Text style={styles.label}>Description</Text>
      <TextInput 
        value={description} 
        onChangeText={setDescription} 
        style={styles.input} 
        placeholder="Enter description" 
      />

      <Text style={styles.label}>Course</Text>
      <Picker 
        selectedValue={course} 
        onValueChange={(itemValue) => setCourse(itemValue)} 
        style={styles.picker}
      >
        <Picker.Item label="Starters" value="Starters" />
        <Picker.Item label="Mains" value="Mains" />
        <Picker.Item label="Desserts" value="Desserts" />
      </Picker>

      <Text style={styles.label}>Price</Text>
      <TextInput 
        value={price} 
        onChangeText={setPrice} 
        keyboardType="numeric" 
        style={styles.input} 
        placeholder="Enter price" 
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={handleAddItem}
      >
        <Text style={styles.buttonText}>Add Dish</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333333',
  },
  input: {
    height: 40,
    borderColor: '#CCC',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#FFF',
  },
  picker: {
    height: 50,
    marginBottom: 15,
    backgroundColor: '#FFF',
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: '#FFA500',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default AddMenuItemScreen;
