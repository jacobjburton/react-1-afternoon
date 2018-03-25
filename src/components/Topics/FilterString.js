import React, {Component} from "react";

class FilterStrings extends Component
{
    constructor()
    {
        super();
        
        this.state =
        {
            unfilteredArray:
            [
                'Janna', 'Brooklyn', 'Tim', 'Jacob', 'Harry', 'Hermione', 'Ron', 'Voldemort'    
            ],
            userInput: '',
            filteredArray: []
        }
    }

    inputValue(v)
    {
        this.setState({ userInput: v });
    }

    filterThings(userInput)
    {
        var unfilteredArray = this.state.unfilteredArray;
        var filteredArray = [];

        for (var i = 0; i < unfilteredArray.length; i++)
        {
            if (unfilteredArray[i].includes(userInput))
            {
                filteredArray.push(unfilteredArray[i]);
            }
        }

        this.setState( {filteredArray: filteredArray} );
    }



    render()
    {
        return(
            <div className="puzzleBox filterStringPB">
                <h4> Filter String </h4>
                <span className="puzzleText"> Unfiltered Array: { JSON.stringify(this.state.unfilteredArray, null, 10) }</span>
                <input className="inputLine" onChange={ (e) => this.inputValue(e.target.value) }/>
                <button className="confirmationButton" onClick={ () => this.filterThings(this.state.userInput) }> Filter </button>
                <span className="resultsBox filterStringRB"> Filtered Array: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
            </div>
        )
    }
}

export default FilterStrings;