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

class Greetings extends Component {
  render() {
    let greetings = {
      de: 'Hallo',
      en: 'Hello',
      fr: 'Bonjour',
      es: 'Hola',
    }
    return (
      <div className="box">
        {greetings[this.props.lang]} {this.props.children}
      </div>
    );
  }
}


class Random extends Component {
  render() {
    let randomNum = Math.floor(Math.random() * (this.props.max - this.props.min + 1)) + this.props.min;
    return (
      <div className="randompart">
        Random value between {this.props.min} and {this.props.max} => {randomNum}
      </div>
    )
  }
}



class BoxColor extends Component {
  render() {

    return (
      <div style={{ backgroundColor: `rgb(${this.props.r}, ${this.props.g}, ${this.props.b})` }}>
        rgb({this.props.r},{this.props.g},{this.props.b})

      </div >
    )

  }
}


function App() {
  return (
    <div className="idcard">
      <h1> ID CARDS</h1>
      <Idcard
        lastName="Ed"
        firstName="Doe"
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

      <h1>Greetings</h1>

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">Greg</Greetings>

      <h1> Random</h1>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <h1>Color boxes</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
    </div>

  );
}

export default App;
