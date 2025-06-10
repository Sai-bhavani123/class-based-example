import React from "react";
import "./Qutes.css"; // Link to external stylesheet

class Qutes extends React.Component {
    constructor() {
        super();
        this.quotes = [
            "The best way to get started is to quit talking and begin doing.",
            "Don't let yesterday take up too much of today.",
            "It's not whether you get knocked down, it's whether you get up.",
            "If you're going through hell, keep going.",
            "Believe you can and you're halfway there.",
            "Everything you’ve ever wanted is on the other side of fear.",
      "The only way to do great work is to love what you do." ,

"In the middle of every difficulty lies opportunity.",

"Be yourself; everyone else is already taken.",

"Success is not final, failure is not fatal: It is the courage to continue that counts." ,

"To be or not to be, that is the question.",

"The greatest glory in living lies not in never falling, but in rising every time we fall." ,

"Life is what happens when you're busy making other plans.",

"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe." ,

"You miss 100% of the shots you don’t take.",

"Happiness can be found even in the darkest of times, if one only remembers to turn on the light." 
        ];
        this.quoteRef = React.createRef();
    }

    handleNewQuote = () => {
        const randomIndex = Math.floor(Math.random() * this.quotes.length);
        this.quoteRef.current.innerText = this.quotes[randomIndex];
    };

    render() {
        return (
            <div className="quote-container">
                <p className="quote-text" ref={this.quoteRef}>
                    {this.quotes[0]}
                </p>
                <button className="quote-button" onClick={this.handleNewQuote}>
                    New Quote
                </button>
            </div>
        );
    }
}

export default Qutes;
