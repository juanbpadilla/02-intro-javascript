const apiKey = 'tNR73FdRFrXJJ5HkR2cngTIaP4YSRos1'

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

// sin encadenar
// peticion.then(resp => {
//   resp.json().then(data => {
//     console.log(data)
//   })
// })

// encadenada
peticion
  .then(resp => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original

    const img = document.createElement('img')
    img.src = url;

    document.body.append(img)

  })
  .catch(console.warn)