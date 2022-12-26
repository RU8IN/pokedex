
export default class Pokedex {

    _BASE_URL = "https://pokeapi.co/api/v2/"
  
    async getResource(method) {
      const url = this._BASE_URL + method
      const res = await fetch(url)
  
      if (!res.ok) {
        throw new Error(`\n\n${res.Error}`)
      }
  
      const body = await res.json()
  
      return body
    }
  
    getPokemon(id) {
      return this.getResource(`pokemon/${id}/`)
    }
  }