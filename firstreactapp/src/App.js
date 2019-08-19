import React from 'react';
import './App.css';
import List from './Components/Feedback/List.js';
import Header from './Components/Header/Header.js';
import Form from './Components/Form/Form.js';

class App extends React.Component {
	constructor(){
		super();
		this.state ={ 
			feedback :
			[ 
			{
			name: 'Chris Martin',
			email: 'chris@gmail.com',
			feeedback: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"
			},
			{
			name: 'Jonas Peter',
			email: 'jonas@gmail.com',
			feeedback: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"
			},
			{
			name: 'Emi Stephen',
			email: 'emi@gmail.com',
			feeedback: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"
			},
			{
			name: 'Jack Paul',
			email: 'jack@gmail.com',
			feeedback: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"
			}
			]
		}
  	}

  	callbackFunction = (fname, femail, feed) => {
		var tempState = this.state.feedback;
		tempState.push({name:fname,email:femail,feeedback:feed});
		this.setState({
			feedback: tempState
		});
    }
  	render(){

  	return (
		<div>
			<Header />
			<Form parentCallback = {this.callbackFunction}/>
			<ul>
				{this.state.feedback.map(item => (
				List(item)
				))}
			</ul> 
		</div> 
  );  
  }
}

export default App;