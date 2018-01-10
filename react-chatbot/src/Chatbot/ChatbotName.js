import React from 'react';
import ChatBot from 'react-simple-chatbot';

let steps = [
    {
      id: '1',
      message: 'Cao!',
      trigger: '2',
    },
    {
      id: '2',
      message: 'Kako se zoves?',
      trigger: '3',
    },
    {
      id: '3',
      user: true,
      trigger: '4',
    },
    {
      id: '4',
      message: 'Desi {previousValue}, brate!',
      end: true
    }
  ]

const Chatbot = () => <ChatBot steps={steps} />

export default Chatbot;