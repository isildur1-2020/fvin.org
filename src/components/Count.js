//MODULES -> REACT - MOMENT
import React, { Component } from "react";
import moment from "moment";
import "moment-timezone";
// Components
import Clock from './Clock'

export default class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moment: moment(),
      live: null,
      actualDate: moment(),
      clockReverse: moment()
    };
    // HORAS ESTÁNDAR CULTOS FVIN
    //Sunday
    this.sunday = moment().day(0).hour(6).minute(30).second(0);
    this.sundayFinish = moment().day(0).hour(15).minute(0).second(0);
    //Wednesday
    this.wednesday = moment().day(3).hour(19).minute(0).second(0);
    this.wednesdayFinish = moment().day(3).hour(21).minute(0).second(0);
    //PROOF ABOUT REVERSE CLOCK
    this.domingo = moment().day(7).hour(6).minute(30).second(0);
    this.miercoles = moment().day(10).hour(19).minute(0).second(0);
  }
  // Intervalo 
  componentDidMount() {
    this.interval = setInterval(() => {
      this.calculateRender();
      this.calculateClock();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  // Render Clock
  calculateRender() {
    this.setState({
      actualDate: moment(),
    });
    const first = this.state.actualDate.isBetween(
      this.sunday,
      this.sundayFinish
    );
    const second = this.state.actualDate.isBetween(
      this.wednesday,
      this.wednesdayFinish
    );
    if (first || second) {
      this.setState({ live: true });
      return;
    }
    this.setState({ live: false });
  }
  // Reverse Clock
  calculateClock() {
    let uno =this.state.actualDate.dayOfYear()
    let dos = this.domingo.dayOfYear()
    let tres = this.miercoles.dayOfYear()

   if(dos-uno < tres-uno){
   }else if( tres-uno < dos-uno ) {
   }
  }
  render() {
    if (this.state.live) {
      return null;
    }
    return (
      <Clock
        day={this.state.clockReverse.day()}
        hour={this.state.clockReverse.hour()}
        minute={this.state.clockReverse.minute()}
        second={this.state.clockReverse.second()}
      />
    );
  }
}
