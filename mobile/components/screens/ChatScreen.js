import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MessageModal from './ChatScreens/MessageModal';
import PostBox from './ChatScreens/PostBox';

export default function ChatScreen({ navigation }) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, author: 'Me' }]);
      setMessage('');
      Keyboard.dismiss();
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={styles.container} keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}>

      <View style={styles.wrapper}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-outline" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.text}>Current Bathroom</Text>
        </View>
        <View style={styles.chatContainer}>
          {messages.map((msg, index) => (
            <PostBox key={index} title={msg.text} author={msg.author} />
          ))}
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type a message"
            value={message}
            onChangeText={(text) => setMessage(text)}
            onSubmitEditing={sendMessage}
            returnKeyType="send"
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Ionicons name="send-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  header: {
    height: 50,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  chatContainer: {
    flex: 1,
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#d3d3d3',
    padding: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 10,
  },
});
