export const getGifs =  async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=VyOW7vKo0My561Qzu0jFaHQXl1NnUO71&q=valorant=${category}&limit=20`
    const response = await fetch(url)
    const {data} = await response.json()
  
    //console.log(data);
  
    const gifs = data.map(img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
  
    }))
  
    console.log('nueva data', gifs);
    return gifs
  }
  