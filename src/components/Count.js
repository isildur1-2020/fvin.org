// React - Libraries
import React, { Component } from "react";
import moment from "moment";
import "moment-timezone";
// Components
import Clock from "./Count/Clock";
import Live from "./Count/Live";

export default class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moment: moment(),
      live: null,
      actualDate: moment(),
      clockReverse: moment().hour(0).minute(0).second(0),
    };
    // HORAS ESTÁNDAR CULTOS FVIN
    //Sunday
    this.sunday       = moment().day(0).hour(9).minute(30)
    this.sundayFinish = moment().day(0).hour(11)
    //-----------------------------------------------------------------------
    // Next Days
    this.nextSunday = moment().day(7).hour(12).minute(51).second(0);
    console.log(
      `\nDomingo Inicio    : ${this.sunday}`,
      `\nDomingo Fin       : ${this.sundayFinish}`,
      `\nDomingo Siguiente : ${this.nextSunday}`
    );
  }
  //-------------------------------------------------------------------------
  componentDidMount() {
    this.clockReverse();

    this.interval = setInterval(() => {
      this.calculateRender();
    }, 1000);
  }
  componentWillMount() {
    clearInterval(this.interval);
  }
  //-------------------------------------------------------------------------
  async clockReverse() {
    const first = this.state.actualDate.isAfter(this.sundayFinish);
    if (first) {
      let clockReverse = moment.duration(
        this.nextSunday.diff(this.state.moment)
      );
      await this.setState({ clockReverse });
      return;
    }

    let clockReverse = moment.duration(this.sunday.diff(this.state.moment));
    await this.setState({ clockReverse });
  }
  //--------------------------------------------------------------------------
  calculateRender() {
    this.setState({
      actualDate: moment(),
      clockReverse: this.state.clockReverse.subtract(1, "second"),
    });
    const first = this.state.actualDate.isBetween(
      this.sunday,
      this.sundayFinish
    );
    if (first) {
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
        minute={this.state.clockReverse.minutes()}
        second={this.state.clockReverse.seconds()}
      />
    );
  }
}
