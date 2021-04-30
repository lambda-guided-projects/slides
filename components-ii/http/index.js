axios.get('https://pokeapi.co/api/v2/pokemon?offset=100&limit=100')
  .then(res => {
    console.log(res.data.results)
    res.data.results.forEach(pokemon => {
      //add a pokemon card component
      axios.get(pokemon.url)
        .then(res => {
          const newCard = pokemonCard(pokemon.name, res.data.sprites.front_default)
          document.querySelector('body').appendChild(newCard)
        })
        .catch(err => console.log(err))
    })
  })
  .catch(err => console.log(err))

function pokemonCard(name, imgUrl) {
  const cardContainer = document.createElement('div')
  const cardTitle = document.createElement('h3')
  const img = document.createElement('img')
  img.src = imgUrl
  const s = cardContainer.style
  s.backgroundColor = 'pink'
  s.width = '300px'
  s.height = '300px'
  s.display = 'flex'
  s.alignItems = 'center'
  s.justifyContent = 'center'
  s.flexDirection = 'column'
  s.marginBottom = '5px'


  cardTitle.textContent = name

  cardContainer.appendChild(cardTitle)
  cardContainer.appendChild(img)

  return cardContainer
}
