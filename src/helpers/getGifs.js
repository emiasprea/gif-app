export const getGifs = async (category) => {
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=tUDND6p78yM1WzamsJXGiewoyqE8wKGv&q=${encodeURI(category)}&limit=15`;
    const resp = await fetch(URL);
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
    // console.log(gifs);
    return gifs;
}