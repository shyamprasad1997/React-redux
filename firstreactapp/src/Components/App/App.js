import React from 'react';
import './App.css';
import List from '../Feedback/List.js';
import Header from '../Header/Header.js';

const feedback = 
[ 
{
 name: 'Chris Martin',
 email: 'chris@gmail.com',
 feeedback: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"},
{
 name: 'Jonas Peter',
 email: 'jonas@gmail.com',
 feeedback: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"},
{
 name: 'Emi Stephen',
 email: 'emi@gmail.com',
 feeedback: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"},
{
 name: 'Jack Paul',
 email: 'jack@gmail.com',
 feeedback: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"}
]


class App extends React.Component {
  render(){
  return (
    <div>
     <Header />
     <ul>
     {feedback.map(item => (
       List(item)
     ))}
     </ul> 
     </div> 
  );  
  }
}

export default App;