import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import './App.css';
import List from './Components/Feedback/List.js';
import Header from './Components/Header/Header.js';
import Form from './Components/Form/Form.js';
import { connect } from 'react-redux';

class App extends React.Component {
	constructor(){
		super();
		this.state=({store.getState()})
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
						<Link className="linkTag" to='/List'>Show Feedbacks</Link>&nbsp;&nbsp;&nbsp;
						<Link className="linkTag" to="/Form">Add Feedback</Link>&nbsp;&nbsp;&nbsp;
					</center>
				</div>)
			}}/>

			<Route path="/Form" exact render={()=>{return(
				<div>
					<center>
						<br></br><br></br>
						<Link className="linkTag" to='/List'>Show Feedbacks</Link>
						<Form ref={this.Form} toggle = {this.toggle.bind(this)} 
							stat = {this.state} setter = {this.stateSetter.bind(this)}/>
					</center>
				</div>)
			}} />

			<Route path="/List" render={()=>{return(
				<div>
					<center>
						<br></br><br></br>
						<Link className="linkTag" to="/Form">Add Feedback</Link>						
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