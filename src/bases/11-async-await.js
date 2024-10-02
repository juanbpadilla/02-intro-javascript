
// const getImagenPromesa = () => {
//   return new Promise((resolve, reject) => {
//     resolve('https://alsdjflasdf.com/algo')
//   })
// }

// const getImagenPromesa = () => new Promise(resolve => resolve('https://alsdjflasdf.com/algo'))

// getImagenPromesa().then(console.log)

const getImagen = async () => {
  try {

    const apiKey = 'tNR73FdRFrXJJ5HkR2cngTIaP4YSRos1'
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    const { data } = await resp.json();

    const { url } = data.images.original

    const img = document.createElement('img')
    img.src = url;

    document.body.append(img)

  } catch (error) {
    // manejo del error
    console.error(error)
  }
}

getImagen();

