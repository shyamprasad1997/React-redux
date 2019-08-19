import React from 'react';

class Form extends React.Component{    
    constructor(){
        super();
        this.state = {
            shown: true,
            hidden:false,
            email:'',
            name:''
        };
    }

    handleClick()
    {
        this.setState({
            shown: !this.state.shown,
            hidden: !this.state.hidden            
        });        
    }

    submit()
    {
        this.props.parentCallback(this.state.name,this.state.email,this.state.feed);
        this.setState({
            hidden: !this.state.hidden,
            shown: !this.state.shown
		});
    }

    emailChange(e)
    {
        this.setState({email: e.target.value});    
    }

    nameChange(e)
    {
        this.setState({name: e.target.value});   
    }

    feedChange(e)
    {
        this.setState({feed: e.target.value});   
    }

    render(){
        var shown = {
			display: !this.state.shown ? "block" : "none"
        };
        var hidden = {
			display: !this.state.hidden ? "block" : "none"
        };
        return(  
        <div>
            <button style={hidden} onClick={this.handleClick.bind(this)} type ="button" >Add feedback</button>
            <div style={shown} className="Form">
                <input type ="text" placeholder="Name" id="name" name="name" value={this.state.name} onChange={this.nameChange.bind(this)}></input>
                <input type ="email" placeholder="Email" id="email" name="email" value={this.state.email} onChange={this.emailChange.bind(this)}></input>
                <input type ="text" name="feedback" id="feedback" value={this.state.feed} onChange={this.feedChange.bind(this)}></input>
                <button style={shown} onClick={this.submit.bind(this)} type ="button" >Submit</button>
            </div>
        </div>
        )
    }
}

export default Form;