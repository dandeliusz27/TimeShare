import React, { Component } from 'react'
import Calendar from '../components/Calendar'
import './ProfilePage.css'
import Event from '../components/Event'
import Button from "../components/Button";


export class ProfilePage extends Component {
  constructor(){
    super();

    this.state = {
         black: true
    }
}

changeColor(){
   this.setState({black: !this.state.black})
}

render(){
   let hbox41 = this.state.black ? "blackButton1" : "whiteButton1";

   return (
    <div className="homeBox1">
        <div className="hbox11">
            <Calendar/>
            {/* CALENDAR */}
        </div>
        <div className="hbox31">BUTTON</div>
        <div className={hbox41}>
            <button className="btn_class1"
                    onClick={this.changeColor.bind(this)}>
                      Button
            </button>
            <div className="homeBoxEventList1">
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

export default ProfilePage