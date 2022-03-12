// import React from 'react'
import Calendar from '../components/Calendar'
import './Home.css'
import Event from '../components/Event'
import Button from "../components/Button";


import React, { Component } from 'react'

export class Home extends Component {
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
       let homeBox = this.state.black ? "blackButton" : "whiteButton";

       return (
        <div className={homeBox}>
            <div className="hbox1">
                <Calendar/>
                {/* CALENDAR */}
            </div>
            <div className="hbox3">BUTTON</div>
            <div className="hbox4">
                <button className="btn_class"
                        onClick={this.changeColor.bind(this)}>
                          Button
                </button>
                <div className="homeBoxEventList">
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
                    <Event/>
                    <Event/>
                    <Event/>
                </div>
            </div>
        </div>
       )
   }
}
export default Home

    
    
//         /* <div className="homeBoxCalendar">
//         <Calendar/>  
//         </div>
//         <div className="homeboxButton">
//         <Button/>
//         </div>
//         <div className="homeBoxEvent">
//         <p className='homeBoxEventText'>Nadchodzące wydarzenia:</p>
//         <div className="homeBoxEventList">
//             <Event/>
//             <Event/>
//             <Event/>
//             <Event/>
//             <Event/>
//             <Event/>
//         </div>
//         </div> 

       