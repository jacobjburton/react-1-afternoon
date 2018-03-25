import React, {Component} from "react";

class EvenAndOdd extends Component
{
    constructor()
    {
        super();

        this.state = 
        {
            evenArray: [],
            oddArray: [],
            userInput: ""
        }

    }


    inputValue(input)
    {
        this.setState({ userInput: input });
    }

    assignEvenAndOdds(input)
    {
        var fullArray = input.split(",");
        var evens = [];
        var odds = [];

        for (var i = 0; i < fullArray.length; i++)
        {
            if (fullArray[i] % 2 === 0)
            {
                evens.push(parseInt(fullArray[i], 10));
            }
            else
            {
                odds.push(parseInt(fullArray[i], 10));
            }
        }
        this.setState( {evenArray: evens, oddArray: odds} );
    }



    render()
    {
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={ (e) => this.inputValue(e.target.value)}/>
                <button className="confirmationButton" onClick={ (e) => this.assignEvenAndOdds(this.state.userInput) }>
                    Separate
                </button>
                <span className="ResultsBox">Evens: { JSON.stringify(this.state.evenArray) }</span>
                <span className="ResultsBox">Odds: { JSON.stringify(this.state.oddArray) }</span>
            </div>
        )
    }
}

export default EvenAndOdd;