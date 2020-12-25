import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';



class Idcard extends Component {
  render() {
    return <div className="card">
      <div class="cardimg"> <img src={this.props.picture}></img> </div>
      <div class="cardinfo">
        <p>Last Name:{this.props.lastName} </p>
        <p>First Name:{this.props.firstName} </p>
        <p>Gender: {this.props.gender}</p>
        <p>Height: {this.props.height / 100}m </p>
        <p>Birth: {this.props.birth.toDateString()} </p>
      </div>

    </div>
  }
}

function App() {
  return (
    <div className="idcard">
      <h1> ID CARDS</h1>
      <Idcard
        lastName="frite"
        firstName="ss"
        gender="male"
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <Idcard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
    </div>
  );
}

export default App;
