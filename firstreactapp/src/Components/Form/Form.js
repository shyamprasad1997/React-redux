import React from 'react';
import './Form.css';

class Form extends React.Component{    
    constructor(props){
        super();
        this.state={
            email:props.stat.email,
            name:props.stat.name,
            feed:props.stat.feed,
            editable:props.stat.editable
        }
    }

    submit(event)
    {
        event.preventDefault();
        let flag = 0;
        let tempState = this.props.stat.feedback;
        tempState.forEach(item => {
            if(item.email == event.target[1].value)       
            {
                item.feeedback = event.target[2].value;
                this.props.setter(tempState);
                this.props.toggle();
                flag = 1;
                return;                 
            }   
        });
        if(flag == 0)
        {
            tempState.push({name:event.target[0].value, email:event.target[1].value, feeedback:event.target[2].value});
            this.props.setter(tempState);
            this.props.toggle(); 
        }
    }

    toggle()
    {
        this.props.toggle();
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
                <input placeholder="Name" name="name" 
                    value={this.state.name} 
                    onChange={this.handleChange.bind(this)} 
                    required/>
                <br></br>
                <input type ="text" placeholder="Email" name="email"
                    value={this.state.email} readOnly={this.state.editable} 
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
                    onClick= {this.toggle.bind(this)} 
                    value="Cancel"/>
            </form>       
            </center>
        </div>
        )
    }
}

export default Form;