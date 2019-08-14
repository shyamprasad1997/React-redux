import React from 'react';

const List = (item) => {
    return(
            <li className ="list">
                <div className ="list1">
                    <div className="inside_list">
                        <div className="fas fa-address-card"></div>
                        <span className="text"><h3>Name: {item.name}</h3><h4><strong>Email: </strong>{item.email}<br></br><strong>Feedback: </strong>{item.feeedback}</h4></span>
                    </div>
                </div>
            </li>);
    }

export default List;