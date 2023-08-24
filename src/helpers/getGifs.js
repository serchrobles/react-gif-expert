const api_key = 'JzPaYgIKG122u0mKagXXC1XL1ZEXACkZ';
const giphy_url = 'https://api.giphy.com/v1/gifs/search';

export const getGifs = async ( category ) => {
  const url = `${giphy_url}?api_key=${api_key}&q=${category}&limit=10`;
  const resp = await fetch( url );
  const { data = [] } = await resp.json();

  const gifs = data.map( gif => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url
  }));
  
  return gifs;
};