import React from 'react';
import ChatBot from 'react-simple-chatbot';

let steps = [
    {
      id: '1',
      message: 'Pogodi koji broj sam zamislio',
      trigger: '2',
    },
    {
      id: '2',
      options: [
          { value: 1, label: 'Jedan', trigger: '3'},
          { value: 8, label: 'Osam', trigger: '3'},
          { value: 5, label: 'Pet', trigger: '4'},
      ]
    },
    {
      id: '3',
      message: 'Aj probaj ponovo',
      trigger: '2',
    },
    {
      id: '4',
      message: 'Jeste!',
      end: true
    }
  ]

const Chatbot = () => <ChatBot steps={steps} />

export default Chatbot;