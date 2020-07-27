import React from "react";
// Styles CSS
import "./styles/Clock.css";

const Clock = (props) => {
  return (
    <section className="container_Clock">
      <span className="title_Clock">próxima transmisión</span>
      <div className="containerSquares_Clock">
        <div className="squareTime_Clock">
          {props.day}
          <span className="squareTimeText_Clock">Días</span>
        </div>
        :
        <div className="squareTime_Clock">
          {props.hour}
          <span className="squareTimeText_Clock">Horas</span>
        </div>
        :
        <div className="squareTime_Clock">
          {props.minute}
          <span className="squareTimeText_Clock">Minutos</span>
        </div>
        :
        <div className="squareTime_Clock">
          {props.second}
          <span className="squareTimeText_Clock">Segundos</span>
        </div>
      </div>
    </section>
  );
};
export default Clock;
