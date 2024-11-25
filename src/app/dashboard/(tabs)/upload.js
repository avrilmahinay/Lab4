import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Upload = () => {
  const [postContent, setPostContent] = useState('');

  const handlePost = () => {
    console.log('Post Submitted:', postContent);

  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Create a Post</Text>


      <TextInput
        style={styles.input}
        placeholder="What's on your mind?"
        placeholderTextColor="#888"
        multiline
        numberOfLines={5}
        value={postContent}
        onChangeText={setPostContent}
      />

      <TouchableOpacity style={styles.uploadButton}>
        <FontAwesome5 name="image" size={24} color="#4a4a72" />
        <Text style={styles.uploadText}>Upload Image</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.postButton} onPress={handlePost}>
        <Text style={styles.postButtonText}>Post</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4a4a72',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    fontSize: 16,
    color: '#333',
    textAlignVertical: 'top',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  uploadText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#4a4a72',
  },
  postButton: {
    backgroundColor: '#4a4a72',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  postButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Upload;
