import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    console.log("PETBROWSER", this.props)

    return <div className="ui cards" >
      {this.props.pets.map((pet) => {
        return <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet}/>
      })}
    </div>
  }
}

export default PetBrowser
