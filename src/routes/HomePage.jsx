import React, { Component } from 'react';
import Calendar from '../components/Calendar';
import './HomePage.css';
import Event from '../components/Event';
import { FaChevronUp } from "react-icons/fa";
import Button from '../components/Button';


export class HomePage extends Component {
  constructor(){
    super();

    this.state = {
         closed: true
    }
}

changeColor(){
   this.setState({closed: !this.state.closed})
}

render(){
   let homeEventBox = this.state.closed ? "homeEventBoxClosed" : "homeEventBoxOpen";

   return (
    <div className="homeContainer">
        <div className="homeCalendarBox">
        </div>
        <div className="homeButtonBox">
          <Button/>
        </div>
        <div className={homeEventBox}>
            <button className="homeEventButton"
                    onClick={this.changeColor.bind(this)}>
                      <FaChevronUp size="18px"/>
            </button>
            <div className="homeEventList">
                <Event/>
                <Event/>
                <Event/>
                <Event/>
                <Event/>
                <Event/>
                <Event/>
                <Event/>
                <Event/>
                <Event/>
                <Event/>
            </div>
        </div>
    </div>
   )
}
}

export default HomePage