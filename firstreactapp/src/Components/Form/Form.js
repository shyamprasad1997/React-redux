import React from 'react';
import './Form.css';

class Form extends React.Component{    
    constructor(){
        super();
        this.state = {
            email:"",
            name:"",
            feed: "",
        };
    }

    submit(event)
    {
        event.preventDefault();
        this.props.parentCallback(this.state.name,this.state.email,this.state.feed);
        this.props.toggle();
        this.setState({
            email:"",
            name:"",
            feed: "",
        });        
    }

    handleChange(e)
    {
        this.setState({[e.target.name]: e.target.value});    
    }

    render(){
        return(  
        <div>
            <form onSubmit={this.submit.bind(this)}>
                <input placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange.bind(this)} required/><br></br>
                <input type ="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange.bind(this)} required/><br></br>
                <input placeholder="Feedback" name="feed" value={this.state.feed} onChange={this.handleChange.bind(this)} required/><br></br>
                <input type="submit" value="Submit"/>
            </form>
        </div>
        )
    }
}

export default Form;