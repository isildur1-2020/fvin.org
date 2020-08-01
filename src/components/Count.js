//MODULES -> REACT - MOMENT
import React, { Component } from "react";
import moment from "moment";
import "moment-timezone";
// COMPONENTS
import Clock from './Clock'
import Live from './Live'

export default class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moment: moment(),
      live: null,
      actualDate: moment(),
      clockReverse: moment().hour(0).minute(0).second(0)
    };
    // HORAS ESTÁNDAR CULTOS FVIN
    //Sunday
    this.sunday = moment().day(0).hour(6).minute(30).second(0);
    this.sundayFinish = moment().day(0).hour(15).minute(0).second(0);
    //Wednesday
    this.wednesday = moment().day(3).hour(19).minute(0).second(0);
    this.wednesdayFinish = moment().day(3).hour(21).minute(0).second(0);
  }
  // Intervalo 
  componentDidMount() {
    this.clockReverse()
    this.interval = setInterval(() => {
      this.calculateRender();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  // Reverse Clock
  async clockReverse() {
    const first = this.state.moment.isAfter(this.sundayFinish)
    const second = this.state.moment.isBefore(this.wednesday)

    const third = this.state.moment.isAfter(this.wednesdayFinish)
    const fourth = this.state.moment.isBefore(this.sunday)
    console.log(first, second, third, fourth)
    console.log(this.sunday, this.sundayFinish)
    console.log(this.wednesday, this.wednesdayFinish)

    if( first && second ) {
      let duration = moment.duration(this.wednesday.diff(this.state.moment))
      await this.setState({clockReverse: duration})
    } else if( third && fourth ) {
      let duration = moment.duration(this.sunday.diff(this.state.moment))
      await this.setState({clockReverse: duration})
    }
  }
  // Render Clock
  calculateRender() {
    this.setState({
      actualDate: moment(),
      clockReverse: this.state.clockReverse.subtract(1, 'second')
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
  render() {
    if (this.state.live) {
      return <Live />;
    }
    return (
      <Clock
        day={this.state.clockReverse.days()}
        hour={this.state.clockReverse.hours()}
        minute={ this.state.clockReverse.minutes()}
        second={this.state.clockReverse.seconds()}
      />
    );
  }
}
