import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    console.log("PETBROWSER", this.props)

    return <div className="ui cards" pets={this.props.pets}>
      {this.props.pets.map((pet) => {
        return <Pet pet={pet} key={pet.id}  />
      })}
    </div>
  }
}

export default PetBrowser
