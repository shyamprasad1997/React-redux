import React from 'react';
import './style.css'

class Users extends React.Component{
constructor(){
  super();
  this.state = {
    userData: [],
    numberOfitemsShown:10,
    previousItemsShown:0
  }
}

componentDidMount(){

  fetch('https://randomuser.me/api/?results=100')
    .then(results => {
     return results.json()
    })
    .then(data => {
      let userData = data.results.map((item) => {
        return (
            <div key = {item.name.first}>
                <br></br>
                <div className="users">
                    <br></br>
                    <img src = {item.picture.large} className="userImage"/>
                    <div>
                        <p><strong>Name:</strong> {item.name.title}. {item.name.first} {item.name.last}</p>                   
                        <p><strong>Email:</strong> {item.email}</p>    
                        <p><strong>Date of Birth:</strong> {item.dob.date}</p>                 
                    </div>
                </div>
                <br></br>
                <hr width="95%" color="gray"></hr>
            </div>
        )
      })
      
      this.setState({
        userData: userData,
      })
    })
}

showMore = () => {
    this.setState({
        previousItemsShown : this.state.numberOfitemsShown+1
    });
    if (this.state.numberOfitemsShown + 10 <= this.state.userData.length) {
        this.setState(state => ({ numberOfitemsShown: state.numberOfitemsShown + 10 }));
    } else {
        this.setState({ numberOfitemsShown: 10,previousItemsShown:0 })
    }
  }

render(){

    const itemsToShow = this.state.userData
      .slice(this.state.previousItemsShown, this.state.numberOfitemsShown)
      .map(item => {return(item)});

  return(
    <div>
        <center>
            <br></br>
            <button onClick={this.showMore}>Next</button>&nbsp;&nbsp;&nbsp;<span>Showing: {this.state.previousItemsShown} to {this.state.numberOfitemsShown}</span>
        </center>
        {itemsToShow.length ? itemsToShow : ""}
        <center>
            <br></br>
            <button onClick={this.showMore}>Next</button>&nbsp;&nbsp;&nbsp;<span>Showing: {this.state.previousItemsShown} to {this.state.numberOfitemsShown}</span>
        </center>
    </div>
  )
}
}

export default Users;