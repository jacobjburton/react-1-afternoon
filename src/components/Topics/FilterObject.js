import React, {Component} from "react";

class FilterObject extends Component
{
    constructor()
    {
        super();

        this.state =
        {
            unFilteredArray: 
            [
                {
                    name: "Guy",
                    age: 123,
                    skill: "nunchacku"
                },
                {
                    name: "Brooklyn",
                    age: 1,
                    profession: "cute little baby"
                },
                {
                    name: "Janna",
                    age: 28,
                    skill: "mommy"
                },
                {
                    name: "Jacob",
                    age: 34,
                    title: "dad"
                }
            ],
            userInput: "",
            filteredArray: []    
        };
    }

    inputValue(v)
    {
        this.setState({ userInput: v });
    }

    filterThings(prop)
    {
        var unfilteredArray = this.state.unFilteredArray;
        var filteredArray = [];

        for (var i = 0; i < unfilteredArray.length; i++)
        {
            if (unfilteredArray[i].hasOwnProperty(prop))
            {
                filteredArray.push(unfilteredArray[i]);
            }
        }

        this.setState( { filteredArray: filteredArray });
    }



    render()
    {
        return(
            <div className="puzzleBox filterObjectPB">
                <h4> Filter Object </h4>
                <span className="puzzleText"> Original: { JSON.stringify(this.state.unFilteredArray, null, 10) } </span>
                <input className="inputLine" onChange={ (e) => this.inputValue(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.filterThings(this.state.userInput) }> Filter </button>
                <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredArray, null, 10) } </span>
            </div>
        );
    }
}

export default FilterObject;