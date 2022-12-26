import React from 'react'
import Pokedex from '../../services/pokedex'

export default class App extends React.Component {

  render() {
    const pokedex = new Pokedex()
    let my_pokemon
    pokedex.getPokemon(1)
      .then(
      (pokemon) => {
        my_pokemon = pokemon
        console.log(my_pokemon)
      }
    )
      .catch(
        (error) => {
          return (<div>asdas <i class="fa fa-cart-arrow-down" aria-hidden="true"></i></div>)
        })
    return (<div></div>)
  }
}



// const pokedex = new Pokedex()

// pokedex.getPokemon(1153)
//   .then(
//   (pokemon) => {
//     console.log(pokemon)
//   }
// )
//   .catch(
//     (error) => {
//       console.log(error)
//     })