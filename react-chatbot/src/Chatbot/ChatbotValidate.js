import React from 'react';
import ChatBot from 'react-simple-chatbot';

let steps = [
    {
      id: '1',
      message: 'Unesi broj',
      trigger: '2',
    },
    {
      id: '2',
      user:  true,
      validator: value => isNaN(value) ? 'Nije broj' : true,
      trigger: '1'
    }
  ]

const Chatbot = () => <ChatBot steps={steps} />

export default Chatbot;