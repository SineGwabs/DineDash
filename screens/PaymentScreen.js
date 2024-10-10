// screens/PaymentScreen.js
import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native';


const PaymentScreen = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const handlePayment = () => {
    if (!selectedPaymentMethod) {
      Alert.alert("Error", "Please select a payment method.");
      return;
    }

    // Simulate payment processing
    Alert.alert("Payment Success", `Payment made via ${selectedPaymentMethod}`);
    
    // Clear cart after successful payment
    clearCart();
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment</Text>

      <Text style={styles.totalText}>Total Amount: R{getTotalPrice()}</Text>

      <Text style={styles.label}>Select Payment Method:</Text>
      <TouchableOpacity style={styles.paymentOption} onPress={() => setSelectedPaymentMethod('Visa')}>
        <Text style={styles.paymentText}>Visa</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.paymentOption} onPress={() => setSelectedPaymentMethod('MasterCard')}>
        <Text style={styles.paymentText}>MasterCard</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.paymentOption} onPress={() => setSelectedPaymentMethod('PayPal')}>
        <Text style={styles.paymentText}>PayPal</Text>
      </TouchableOpacity>

      <Button title="Complete Payment" onPress={handlePayment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  totalText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#333',
  },
  paymentOption: {
    backgroundColor: '#e0e0e0',
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  paymentText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default PaymentScreen;
