import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.floatingContainer}>
        <Text style={styles.title}>Sign in with Email</Text>

        <View style={styles.inputContainer}>
          <MaterialIcons name="email" size={15} color="#333" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#888"
          />
        </View>

        <View style={styles.inputContainer}>
          <FontAwesome6 name="lock" size={15} color="#333" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            placeholderTextColor="#888"
          />
        </View>

        <View style={styles.recoverContainer}>
          <MaterialCommunityIcons name="checkbox-blank-outline" size={18} color="black" />
          <Text style={styles.recoverText}>Remember me           </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Recover')}>
            <Text style={[styles.recoverText, styles.link]}> Forgot password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 18, textAlign:'center', marginTop: 20, marginBottom: 10, color: 'white'}}>OR</Text>

        <View style={styles.iconContainer}>
          <FontAwesome5 name="facebook" size={24} color="white" style={styles.iconSpacing} />
          <AntDesign name="google" size={24} color="white" style={styles.iconSpacing} />
          <FontAwesome name="telegram" size={24} color="white" style={styles.iconSpacing} />
        </View>

        <Text style={styles.footerText}>
          Don't you have an account?{' '}
          <Text style={styles.link} onPress={() => navigation.navigate('Register')}>
            Register
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4a4a72',
    paddingHorizontal: 20,
  },
  floatingContainer: {
    width: '90%',
    backgroundColor: '#303042',
    padding: 30,
    borderRadius: 16,
    elevation: 10,
    shadowOpacity: 0.5,
    shadowRadius: 6,
    marginTop: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#a6a6c0',
    marginBottom: 10,
    marginTop: 5,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#5959c6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  recoverContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 10,
    marginBottom: 10,
  },
  recoverText: {
    fontSize: 14,
    color: 'white',
  },
  footerText: {
    fontSize: 14,
    color: 'white',
    marginTop: 30,
    textAlign: 'center',
  },
  link: {
    color: '#3498db',
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    marginTop: 10,
  },
  iconSpacing: {
    marginHorizontal: 25, 
    alignContent: 'space-between',
  },
});

export default Login;
