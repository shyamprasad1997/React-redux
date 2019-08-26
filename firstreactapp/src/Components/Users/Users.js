import React from 'react';
import './style.css'

class Users extends React.Component{
constructor(){
  super();
  this.state = {
    userData: [],
    numberOfitemsShown:9,
    previousItemsShown:0
  }
}

componentDidMount(){

  fetch('https://randomuser.me/api/?results=50')
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
    if ((this.state.numberOfitemsShown + 10) <= this.state.userData.length) {
        this.setState({
            previousItemsShown : this.state.numberOfitemsShown + 1,
            numberOfitemsShown: this.state.numberOfitemsShown + 10 });
    } 
  }

showLess = () => {
    if ((this.state.previousItemsShown - 10) >= 0) {
        this.setState({
            previousItemsShown : this.state.previousItemsShown - 10,
            numberOfitemsShown: this.state.previousItemsShown - 1 });
    } 
  }

render(){
    const itemsToShow = this.state.userData
      .slice(this.state.previousItemsShown, this.state.numberOfitemsShown + 1)
      .map(item => {return(item)});

  return(
    <div>
        <center>
            <br></br>
            <button onClick={this.showLess}>Previous</button>&nbsp;&nbsp;&nbsp;<span>Showing: {this.state.previousItemsShown} to {this.state.numberOfitemsShown}</span>
            &nbsp;&nbsp;&nbsp;<button onClick={this.showMore}>Next</button>           
        </center>
        {itemsToShow.length ? itemsToShow : ""}
        <center>
            <br></br>
            <button onClick={this.showLess}>Previous</button>&nbsp;&nbsp;&nbsp;<span>Showing: {this.state.previousItemsShown} to {this.state.numberOfitemsShown}</span>
            &nbsp;&nbsp;&nbsp;<button onClick={this.showMore}>Next</button>       
        </center>
    </div>
  )
}
}

export default Users;