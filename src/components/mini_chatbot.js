import React, { Component } from 'react';

//calling react-native chatbot library
import Bot from 'react-native-chatbot';

//Instructions that chatbot will follow
const steps = [
  {
    id: '1',
    message: 'Hello, my name is joao, what is your name?',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: 'ola',
  },
  {
    id: 'ola',
    message: 'Hello {previousValue}',
    trigger: '3',
  },
  {
    id: '3',
    message: 'What do you want to know?',
    trigger: '4',
  },
  {
    id: '4',
    options: [
      { value: 1, label: 'How old are you?', trigger: '5' },
      { value: 2, label: 'What do you study?', trigger: '6' },
      { value: 3, label: 'Do you work with?', trigger: '7' },
      { value: 4, label: 'Nice to meet you', trigger: '8' },
    ],
  },
  {
    id: '5',
    message: 'I am 30 years old!',
    trigger: '3',
  },
  {
    id: '6',
    message: 'Computer Science!',
    trigger: '3',
  },
  {
    id: '7',
    message: 'Software development',
    trigger: '3',
  },
  {
    id: '8',
    message: 'Nice to meet you too',
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