import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';


const Home = () => {
  return (
    <View style={styles.container}>

      <View style={styles.card}>
        <View style={styles.profileSection}>
          <View style={styles.iconBox}>
            <FontAwesome6 name="user" size={28} color="white" />
          </View>
          <View style={styles.textBox}>
            <Text style={styles.title}>Hello,</Text>
            <Text style={styles.subtitle}>Avril Mahinay</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.balanceButton}>
          <Text style={styles.balanceText}>Balance: 100,000 Php</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <FontAwesome6 name="money-bill-transfer" size={24} color="#4a4a72" />
          <Text style={styles.actionText}>Send Money</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <FontAwesome6 name="wallet" size={24} color="#4a4a72" />
          <Text style={styles.actionText}>My Wallet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <FontAwesome6 name="file-invoice-dollar" size={24} color="#4a4a72" />
          <Text style={styles.actionText}>Transactions</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  card: {
    backgroundColor: '#4a4a72',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconBox: {
    width: 60,
    height: 60,
    backgroundColor: '#5959c6',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  textBox: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 14,
    color: '#ddd',
  },
  balanceButton: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
  },
  balanceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4a4a72',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  actionButton: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    width: '30%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  actionText: {
    marginTop: 10,
    fontSize: 12,
    color: '#4a4a72',
    textAlign: 'center',
  },
});

export default Home;
