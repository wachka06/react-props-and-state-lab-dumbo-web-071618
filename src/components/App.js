import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (event) => {
    // console.log(event.target.value)
    this.setState({filters: {type: event.target.value}})
  }

  onFindPetsClick = () => {
    if (this.state.filters.type === "all") {
      fetch('/api/pets')
      .then(res => res.json())
      .then(data => {
        this.setState({pets: data})
      })
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(res => res.json())
      .then(data => {
        this.setState({pets: data})
      })
    }
  }

  onAdoptPet = (id) => {
    // console.log("ID", id)
    let updatedPets = this.state.pets.map((pet) => {
      if (pet.id === id) {
        // console.log("THISPET", pet)
        return {...pet, isAdopted: true}
        //making a copy of object

       // this.setState({...pet, isAdopted: true})
      }
      else {
        return pet
        // just return the original pet object.

       // this.setState({...pet})
      }
    })

    this.setState({
      pets: updatedPets
    })
  }

  render() {
    console.log("THIS STATE", this.state)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
