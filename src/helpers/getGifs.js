export const getGifs = async( category ) =>{
  const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=15&api_key=Jn6IQ2SbO04PFQUMxezUP0PISEfyuoSG`;
  const resp = await fetch( url );
  const {data} = await resp.json();

  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.original.url
    }
  })

  return gifs;
}