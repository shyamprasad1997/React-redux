import React from 'react';

class List extends React.Component{
    constructor(props)
    {
        super();
    }
    render(){
    return(
        <li className ="list" key={this.props.item.email}>
            <form className="inside_list" onSubmit={this.props.edit}>
                <div className="fas fa-address-card"></div>
                <div className="text"><h3 >Name: {this.props.item.name}</h3><h4><strong>Email: </strong>{this.props.item.email}<br></br><strong>Feedback: </strong>{this.props.item.feeedback}</h4></div>
                <input value={this.props.item.email} name={this.props.item.email} type="hidden"/>
                <input value={this.props.item.name} name="name" type="hidden"/>
                <input value={this.props.item.feeedback} name="feed" type="hidden"/>
                <button className="fas fa-edit" type="submit"></button>
            </form>
        </li>);
    }
}

export default List;