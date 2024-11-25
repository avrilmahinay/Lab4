import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router'

const Register = () => {

  const router = useRouter ();

    return (
      <View style={styles.container}> 

        <View style={styles.floatingContainer}>

          <Text style={styles.title}>Create an Account</Text>

          <View style={styles.nameContainer}>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="First Name"
                placeholderTextColor="#888"
              />
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Last Name"
                placeholderTextColor="#888"
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              placeholderTextColor="#888"
            />
          </View>
  
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#888"
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              placeholderTextColor="#888"
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry
              placeholderTextColor="#888"
            />
          </View>
  
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>
  
          <Text style={styles.footerText}>
            Already have an account?{' '}
            <Text style={styles.link} onPress={() => router.back('Login')}>
              Login
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
  backButton: {
    position: 'absolute',
    top: 40, 
    left: 10,
    zIndex: 1, 
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
    alignContent:'center',
    color: 'white',
    marginBottom: 30,
  },
  nameContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '105%', 
    marginBottom: 20, 
   },
  inputWrapper: {
    flex: 1, 
    marginRight: 10, 
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#a6a6c0',
    fontSize: 16,
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
  link: {
    color: '#3498db',
    fontWeight: 'bold'
  },
  footerText: {
    fontSize: 14,
    color: 'white',
    marginTop: 40,
    marginBottom: 40,
    textAlign: 'center',
  },
});

export default Register;
