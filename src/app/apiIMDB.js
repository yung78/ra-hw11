export async function getMovies(search) {
  try {
    const response = await fetch(`${process.env.REACT_APP_IMDB_API_URL}?apikey=${process.env.REACT_APP_IMDB_API_TOKEN}&s=${search}`);
    const data = response.json();
    const finalyData = await data;
    
    if (finalyData.Response === 'True')  {
      return finalyData;
    }

    return {Search: [finalyData]}
  } catch(err) {
   throw Error(err)
  }
}

export async function getMovie(id) {
  try {
    const response = await fetch(`${process.env.REACT_APP_IMDB_API_URL}?apikey=${process.env.REACT_APP_IMDB_API_TOKEN}&i=${id}`);
    const data = response.json();
    
    return data;
  } catch(err) {
   throw Error(err)
  }
}
