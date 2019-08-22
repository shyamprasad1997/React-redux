import React from 'react';
import { withRouter } from 'react-router-dom';

class List extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = props.stat;
        this.state.email = this.state.name = this.state.feed = "";
        this.state.editting = false;
        this.props.setter(this.state);
    }

    edit = (e) => {
        this.props.history.push("/Form");
        this.props.edit(e);
    }
    render(){
    return(
        this.state.feedback.map(item => (
        <li className ="list" key={item.email}>
            <form className="inside_list" onSubmit={this.edit}>
                <div className="fas fa-address-card"></div>
                <div className="text"><h3 >Name: {item.name}</h3>
                    <h4><strong>Email: </strong>{item.email}<br></br>
                    <strong>Feedback: </strong>{item.feeedback}</h4></div>
                <input value={item.email} name={item.email} type="hidden"/>
                <input value={item.name} name="name" type="hidden"/>
                <input value={item.feeedback} name="feed" type="hidden"/>
                <button className="fas fa-edit" type="submit"></button>
            </form>
        </li>)));
    }
}

export default withRouter(List);