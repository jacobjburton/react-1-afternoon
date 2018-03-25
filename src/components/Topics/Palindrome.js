import React, {Component} from "react";

class Palindrome extends Component
{
    constructor()
    {
        super();


        this.state = 
        {
            userInput: "",
            palindrome: ""
        }
    }

    inputValue(val)
    {
        this.setState({ userInput: val });
    }
    
    checkforPalindrome(userInput)
    {
        var input = userInput;
        input = input.toLowerCase();

        var reverseInput = userInput;
        reverseInput = reverseInput.toLowerCase();
        reverseInput = reverseInput.split('');
        reverseInput = reverseInput.reverse();
        reverseInput = reverseInput.join('');

        if (input === reverseInput)
        {
            this.setState({ palindrome: "true" });
        }
        else
        {
            this.setState({ palindrome: 'false' });
        }

    }
    
    
    
    render()
    {
        return(
            <div className="puzzleBox filterStringPB">
                <h4> Palindrome </h4>
                <input className="inputLine" onChange={ (e) => this.inputValue(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.checkforPalindrome(this.state.userInput) }> Check Palindrome </button>
                <span className="resultsBox"> Palindrome: { this.state.palindrome } </span>
            </div>
        )
    }
}

export default Palindrome;