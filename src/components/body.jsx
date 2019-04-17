import React, { Component } from 'react';
import '../css/body.css';

class Body extends Component {
    render() {
        return (
            <section className="addItem-form">
                <form>
                    <div>
                        <span>Name:</span> 
                        <input className = "itemName" type = "text" placeholder = "What did you spend on?"/>
                    </div>
                    <div>
                        <span>Category:</span> 
                        <select className ="itemCategory">
                            <option value ="food">Food</option>
                            <option value ="cash">Utilities</option>
                            {/* fetch from database */}
                        </select>
                    </div>
                    <div>
                        <span>Date:</span>
                        <input className ="itemDate" type="date" ></input>
                    </div>
                    <div>
                        <span>Amount:</span>
                        <input className = "itemAmount" type = "number" placeholder = "How much?"/>
                    </div>
                </form>
                <div id="button"><span>Add a new expense</span></div>
            </section>
            
        );
    }
}

export default Body;