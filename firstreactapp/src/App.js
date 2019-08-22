import React from 'react';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';


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
			],
			email:"",
            name:"",
			feed:"",
			editting:false,
		}
	}

	edit = (e) => {		
		e.preventDefault();
		this.toggle();
		this.setState({
			email:e.target[0].value,
			name:e.target[1].value,
			feed:e.target[2].value,
			editting:true,
		})	
	}

	stateSetter = (obj) => { 
		this.setState(obj);
	}

	toggle = (e) =>
	{
		console.log("2");
		this.setState({
			email:"",
            name:"",
            feed:"",
			editting: false,
		});
	}

  	render(){
  	return (
		<BrowserRouter>				
			<Route component={Header} />
			<Route path="/" exact render={()=>{return(
				<div>
					<center>
						<br></br><br></br>
						<Link to='/List'>Show Feedbacks</Link>&nbsp;&nbsp;&nbsp;
						<Link to="/Form">Add Feedback</Link>
					</center>
				</div>)
			}}/>

			<Route path="/Form" exact render={()=>{return(
				<div>
					<center>
						<br></br><br></br>
						<Link to='/List'>Show Feedbacks</Link>
						<Form ref={this.Form} toggle = {this.toggle.bind(this)} 
							stat = {this.state} setter = {this.stateSetter.bind(this)}/>
					</center>
				</div>)
			}} />

			<Route path="/List" render={()=>{return(
				<div>
					<center>
						<br></br><br></br>
						<Link to="/Form">Add Feedback</Link>						
					</center>
						<br></br><br></br>
						<List setter = {this.stateSetter.bind(this)} edit = {this.edit}
						 	toggle = {this.toggle.bind(this)} stat={this.state}/>
				</div>)
			}} />
		</BrowserRouter>
  	);  
  	}
}

export default App;