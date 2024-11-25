import React from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign'; 
import Entypo from '@expo/vector-icons/Entypo';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';


const SearchBar = () => {
      return (
        <View style={styles.container}>

        <View style={styles.searchContainer}>
            <TextInput 
                style={styles.searchInput} 
                placeholder="Search for tasks..."
                placeholderTextColor="#888"
            />
            <EvilIcons name="search" size={25} color="black" style={styles.searchIcon} />
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.taskContainer}>
                {[
                    {
                        name: "Avril Mahinay",
                        description: "I need help with tutoring in subjects like Computer Programming and Information Management. If you have a background in education or tutoring, I'd love to hear from you."
                    },
                    {
                        name: "Joana Razon",
                        description: "I have some printing and copying tasks that need to be completed. If you have access to printing facilities and can help, please let me know."
                    },
                    {
                        name: "Jonnavien Asuelo",
                        description: "I'm planning an event and could use some extra hands for set-up, coordination, and cleanup. If you're organized and enjoy working at events, I'd appreciate your help!"
                    },
                    {
                        name: "Shiela Theresa Mosqueda",
                        description: "I need assistance with picking up and delivering items, like groceries or packages. A reliable vehicle is a must!"
                    },
                    {
                        name: "Jules Gifford Filoteo",
                        description: "I lost my phone and the last place I went is in the cafeteria. If somebody finds it, please let me know."
                    }
                ].map((task, index) => (
                    <TouchableOpacity key={index} style={styles.taskBox}>
                        <View style={styles.row}>
                            <EvilIcons name="user" size={25} color="white" />
                            <Text style={styles.taskTitle}>{task.name}</Text>
                            
                        </View>
                        <Text style={styles.taskLabel}>{task.description}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#4a4a72',
  },
  searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20,
      marginHorizontal: 15,
      height: 35,
      borderWidth: 1,
      borderColor: 'grey',
      borderRadius: 9,
      backgroundColor: '#fff',
      paddingHorizontal: 10,
  },
  searchInput: {
      flex: 1,
      height: '110%',
      fontSize: 15,
  },
  searchIcon: {
      marginLeft: 10,
  },
  scrollContent: {
      paddingHorizontal: 20,
      paddingBottom: 60,
  },
  label: {
      fontSize: 14,
      color: 'grey',
  },
  taskContainer: {
      marginTop: 10,
  },
  taskBox: {
      backgroundColor: '#303042',
      width: '100%',
      padding: 15,
      borderRadius: 5,
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#303042',
      flexDirection: 'column', 
  },
  row: {
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      marginBottom: 5, 
  },
  taskLabel: {
      fontSize: 15,
      color: 'grey',
      flexShrink: 1, 
      marginTop: 5,
  },
  taskTitle: {
      fontWeight: 'bold',
      fontSize: 15,
      color: 'gray',
      flex: 1, 
      marginRight: 10, 
  },
  taskPrice: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#2c7c2c', 
  },
});
export default SearchBar