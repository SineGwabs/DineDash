// screens/HomeScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [menuItems, setMenuItems] = useState([]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Christoffel's Menu</Text>
      <Text style={styles.subtitle}>Total Menu Items: {menuItems.length}</Text>

      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.menuText}>{item.name} - {item.course}</Text>
            <Text style={styles.menuText}>Description: {item.description}</Text>
            <Text style={styles.menuText}>Price: ${item.price}</Text>
          </View>
        )}
      />
      
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddMenuItem')}
      >
        <Text style={styles.buttonText}>Add New Dish</Text>
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
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333333',
  },
  menuItem: {
    backgroundColor: '#FFF',
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 4,
  },
  menuText: {
    fontSize: 16,
    color: '#333333',
  },
  addButton: {
    backgroundColor: '#841584',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default HomeScreen;
