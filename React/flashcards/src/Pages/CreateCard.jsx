import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class CreateCard extends Component{
    render() {
        return(
            <div className = "page">
                <h1>CREATE A CARD!</h1>
                <Link to = "home"><button className = "button3">home</button></Link>
                <table id = "cardInputTable">
                    <tr>
                        <td><h2>QUESTION</h2></td>
                        <td><h2>ANSWER</h2></td>
                    </tr>
                    <tr>
                        <td><textarea className = "cardInput"></textarea></td>
                        <td><textarea className = "cardInput"></textarea></td>
                    </tr>
                    
                </table>
                <button className= "button2" >SUBMIT</button>
            </div>
        )
    }
}
export default CreateCard