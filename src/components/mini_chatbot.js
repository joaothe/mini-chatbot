import React, { Component } from 'react';

//calling react-native chatbot library
import Bot from 'react-native-chatbot';

//Instructions that chatbot will follow
const steps = [
  {
    id: '0',
    message: 'Welcome to react chatbot!',
    trigger: '1',
  },
  {
    id: '1',
    message: 'Bye!',
    end: true,
  },
];


export default class ChatBot extends Component {
  render() {
    return (
      <Bot steps={steps} />
    );
  }
}