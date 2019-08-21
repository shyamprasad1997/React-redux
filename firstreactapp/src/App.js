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
			],
			show:false,		
			email:"",
            name:"",
			feed:"",
			editable:false
		}
	}
	  
	edit = (e) => {
		e.preventDefault();
		this.toggle();
		this.setState({
			email:e.target[0].value,
            name:e.target[1].value,
			feed:e.target[2].value,
			editable:true
		})
	}

	stateSetter = (obj) => { 
		this.setState({
			feedback: obj
		});
	}
	
	toggle(e)
	{	
		this.setState({
			email:"",
            name:"",
            feed:"",
			show: !this.state.show,
			editable:false
		});
	}
  	render(){
  	return (
		<div>
			<Header />
			{this.state.show ?
				<Form toggle = {this.toggle.bind(this)} stat={this.state} editab={this.state.editable} setter= {this.stateSetter.bind(this)}/> :
					<center><br></br><button onClick={this.toggle.bind(this)} type ="button" >Add feedback</button></center>}
			<ul>
			{this.state.feedback.map((item, index) => {
				return (<List item={item} edit={this.edit}/>)
				})}
			</ul> 
		</div> 
  	);  
  	}
}

export default App;