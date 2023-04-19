import { getRandomInt } from '../utils/getRandomInt'

export const fetchRandomFact = (url, handleFact) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const fact = data?.data[getRandomInt(0, 10)]?.fact?.split(' ')[0]
      handleFact(fact)
    })
}

export const fetchCatFact = (url, fact, handleCat) => {
  fetch(`${url}${fact}`)
    .then((res) => res.json())
    .then((data) => {
      const { url } = data
      handleCat(data)
    })
}

// EjvyjvHCohfvyDwt0JONvqHQFfjFnsUQ
// https://api.giphy.com/v1/gifs/search?api_key=wNBFfTMaAur3bol88wvJTrgDnr46w0RH&q=gato&limit=25&offset=0&rating=g&lang=en