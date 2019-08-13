import React from 'react';
import './App.css';

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
      <ul>
        {feedback.map(item => (
          <li className ="list">
            <div className ="list1">
            <div className="inside_list">
              <div className="fas fa-address-card"></div>
              <span className="text"><h3>Name: {item.name}<br></br> Email: {item.email}</h3><h4><strong>Feedback: </strong>{item.feeedback}</h4></span>
              </div>
            </div>
          </li>
        ))}
      </ul>    
  );  
  }
}

export default App;