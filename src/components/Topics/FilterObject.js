import React, { Component } from 'react';

export default class FilterObject extends Component {
  constructor(){
    super();

    this.state = {
      ninjas:[
        {
          name: 'Naruto',
          title: 'Genin',
          jutsu: 'Ninjutsu'
        },
        {
          name: 'Shikamaru',
          title:'Chunin',
          tenure: 3
        },
        {
          name:'Kakashi',
          title:'Jonin'
        }
      ],

      userInput: '',
      filteredNinjas: [],
    }

  }

  handleChange(val) { 
    this.setState({userInput: val})
  };

  filterNinjas(prop) {
    let ninjas = this.state.ninjas;
    let filteredNinjas = [];

    for ( let i = 0; i < ninjas.length; i++ ) {
      if ( ninjas[i].hasOwnProperty(prop) ) {
        filteredNinjas.push(ninjas[i]);
      }
    }

    this.setState({ filteredNinjas: filteredNinjas });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4> Filter Object </h4>
        <span className="puzzleText"> Original: {JSON.stringify(this.state.ninjas,null,10)}</span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}/>
        <button className="confirmationButton" onClick={ () => this.filterNinjas(this.state.userInput) }> Filter </button>
        <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredNinjas,null,10)}</span>
      </div>
    )
  }
}