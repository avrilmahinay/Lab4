import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';

const DrawerContent = () => {
  const router = useRouter();

  return (
    <DrawerContentScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => router.push('Home')}
      >
        <Icon name="home" size={24} color="#333" />
        <Text style={styles.drawerText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => router.push('Profile')}
      >
        <Icon name="person" size={24} color="#333" />
        <Text style={styles.drawerText}>Profile</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => router.push('Notifications')}
      >
        <Feather name="bell" size={24} color="#333" />
        <Text style={styles.drawerText}>Notifications</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => router.push('Settings')}
      >
        <Icon name="settings" size={24} color="#333" />
        <Text style={styles.drawerText}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => {
          console.log('Logging out...');
          router.push('Login');
        }}
      >
        <Icon name="logout" size={24} color="#333" />
        <Text style={styles.drawerText}>Logout</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  drawerText: {
    marginLeft: 15,
    fontSize: 16,
    color: '#333',
  },
});

export default DrawerContent;
