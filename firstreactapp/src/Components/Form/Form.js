import React from 'react';
import { withRouter } from 'react-router-dom';

import './Form.css';

class Form extends React.Component{    
    constructor(props){
        super(props);  
        this.state = props.stat;
    }

    submit(event)
    {
        event.preventDefault();
        for(let i = 0; i<this.state.feedback.length; i++) {
            if(this.state.feedback[i].email == event.target[1].value)       
            {
                this.state.feedback[i].feeedback = event.target[2].value;
                this.props.setter(this.state);
                this.props.history.push("/");
                this.toggle();
                return;                 
            }   
        }
        this.state.feedback.push({name: event.target[0].value, 
            email: event.target[1].value, feeedback: event.target[2].value});
        this.props.setter(this.state);
        this.toggle(); 
        return; 
    }

    toggle = ()=>
    {
        this.props.toggle();
        this.props.history.push("/");
    }

    handleChange(e)
    {
        this.setState({[e.target.name]: e.target.value});    
    }
    render(){
        return(
        <div className="Form">
            <center>
            <form onSubmit={this.submit.bind(this)} >
                <input placeholder="Name" name="name" readOnly={this.state.editting} 
                    value={this.state.name} 
                    onChange={this.handleChange.bind(this)} 
                    required/>
                <br></br>
                <input type ="text" placeholder="Email" name="email"
                    value={this.state.email} readOnly={this.state.editting} 
                    onChange={this.handleChange.bind(this)} 
                    required/>
                <br></br>
                <textarea placeholder="Feedback" name="feed" 
                    value={this.state.feed} 
                    onChange={this.handleChange.bind(this)} 
                    required/>
                <br></br>
                <input className="button" type="submit" 
                    value="Submit"/>
                <input name ="test" type="button" className="button" 
                    onClick= {this.toggle} 
                    value="Cancel"/>
            </form>       
            </center>
        </div>
        )
    }
}

export default withRouter(Form);