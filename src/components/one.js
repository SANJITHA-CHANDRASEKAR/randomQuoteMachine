import React, { Component } from "react";

var quotes = [
  [
    "It’s your place in the world, it’s your life. Go on and do all you can with it, and make it the life you want to live.",
    "Mae Jemison"
  ],
  [
    "You may be disappointed if you fail, but you are doomed if you don’t try.",
    "Beverly Sills"
  ],
  [
    "Remember no one can make you feel inferior without your consent.",
    "Eleanor Roosevelt"
  ],
  [
    "Life is what we make it, always has been, always will be.",
    "Grandma Moses"
  ],
  [
    "The question isn’t who is going to let me; it’s who is going to stop me.",
    "Ayn Rand"
  ],
  [
    "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
    "Henry Ford"
  ],
  [
    "It’s not the years in your life that count. It’s the life in your years.",
    "Abraham Lincoln"
  ],
  ["Change your thoughts and you change your world.", "Norman Vincent Peale"],
  [
    "Either write something worth reading or do something worth writing.",
    "Benjamin Franklin"
  ],
  [
    "Nothing is impossible, the word itself says, “I’m possible!”",
    "Audrey Hepburn"
  ]
];

class RandomQuoteMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: quotes[0]
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let key = Math.floor(Math.random() * 10);
    const randomQuote = quotes[key];
    this.setState({
      quote: randomQuote
    });
  }

  render() {
  
    return (
      <> 
        <div className="ddd">
          <h1 className="quote">{this.state.quote[0]}</h1>
          <h3 className="author">-{this.state.quote[1]}-</h3>
        </div>
        
        <button className="new" onClick={this.handleClick}>Next Quote</button>
      </>
    );
  }
}

export default RandomQuoteMachine;
