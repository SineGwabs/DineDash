// screens/UserMenuScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet, Image } from 'react-native';


const MenuScreen = () => {
  ;

  const menuItems = [
    {
      id: 1,
      name: 'Bruschetta',
      description: 'Grilled bread with fresh tomatoes, garlic, and olive oil.',
      price: 50,
      imageUrl:  'https://www.lifeasastrawberry.com/wp-content/uploads/2012/11/warm-bruschetta-1.jpg',
      course: 'Starters',
    },
    {
      id: 2,
      name: 'Greek Salad',
      description: 'Crispy greens, tomatoes, cucumbers, olives, and feta cheese.',
      price: 60,
      imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/greek-salad-index-642f292397bbf.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*',
      course: 'Starters',
    },
    {
      id: 3,
      name: 'Soup of the Day',
      description: 'A rich and creamy seasonal soup.',
      price: 45,
      imageUrl: 'https://images.immediate.co.uk/production/volatile/sites/2/2016/08/25097.jpg?quality=90&crop=2px,151px,596px,542px&resize=556,505',
      course: 'Starters',
    },
    {
      id: 4,
      name: 'Grilled Steak',
      description: 'Juicy grilled steak served with a side of garlic butter.',
      price: 150,
      imageUrl: 'https://www.wholesomeyum.com/wp-content/uploads/2022/06/wholesomeyum-Grilled-Steak-16.jpg',
      course: 'Mains',
    },
    {
      id: 5,
      name: 'Margherita Pizza',
      description: 'Classic pizza with fresh mozzarella, tomatoes, and basil.',
      price: 120,
      imageUrl: 'https://cdn.loveandlemons.com/wp-content/uploads/2023/07/margherita-pizza-recipe.jpg',
      course: 'Mains',
    },
    {
      id: 6,
      name: 'Grilled Salmon',
      description: 'Fresh salmon fillet served with a lemon dill sauce.',
      price: 170,
      imageUrl: 'https://www.allrecipes.com/thmb/CfocX_0yH5_hFxtbFkzoWXrlycs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-12720-grilled-salmon-i-VAT-4x3-888cac0fb8a34f6fbde7bf836850cd1c.jpg',
      course: 'Mains',
    },
    {
      id: 7,
      name: 'Chocolate Lava Cake',
      description: 'Warm chocolate cake with a molten center.',
      price: 80,
      imageUrl: 'https://www.melskitchencafe.com/wp-content/uploads/2023/01/updated-lava-cakes7.jpg',
      course: 'Desserts',
    },
    {
      id: 8,
      name: 'Tiramisu',
      description: 'Classic Italian dessert with coffee and mascarpone.',
      price: 85,
      imageUrl: 'https://www.culinaryhill.com/wp-content/uploads/2021/01/Tiramisu-Culinary-Hill-1200x800-1.jpg',
      course: 'Desserts',
    },
    {
      id: 9,
      name: 'Cheesecake',
      description: 'Creamy cheesecake with a graham cracker crust.',
      price: 90,
      imageUrl: 'https://sugarspunrun.com/wp-content/uploads/2019/01/Best-Cheesecake-Recipe-2-1-of-1-4.jpg',
      course: 'Desserts',
    },
  
];

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const renderItem = ({ item }) => (
    <View style={styles.menuItem}>
      <Image source={{ uri: item.imageUrl }} style={styles.dishImage} />
      <View style={styles.dishDetails}>
        <Text style={styles.dishName}>{item.name}</Text>
        <Text style={styles.dishDescription}>{item.description}</Text>
        <Text style={styles.dishPrice}>Price: R{item.price}</Text>
      
      </View>
    </View>
  );

  const renderCourse = (course) => (
    <View key={course}>
      <Text style={styles.courseHeader}>{course}</Text>
      <FlatList
        data={menuItems.filter((item) => item.course === course)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }} 
      />
    </View>
  );
  
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Menu</Text>
  
        {/* Render each course */}
        {renderCourse('Starters')}
        {renderCourse('Mains')}
        {renderCourse('Desserts')}
      </ScrollView>
      );
    };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  courseHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#555',
    marginVertical: 15,
  },
  menuItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5,
  },
  dishImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  dishDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  dishName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  dishDescription: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  dishPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});

export default MenuScreen;
