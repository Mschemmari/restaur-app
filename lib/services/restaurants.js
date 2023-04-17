const API_KEY = 'AIzaSyBuwvMIUfuI5y4RBYDE1W2lvgbsgR0jJV4';
const ENDPOINT = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
//?location=${latitud},${longitud}&radius=1500&type=restaurant&key=${API_KEY}


function getNearbyPlaces(location, radius, type) {
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=${radius}&type=${type}&key=YOUR_API_KEY`;
  
    return fetch(url)
      .then(response => response.json())
      .then(data => data.results)
      .catch(error => console.log(error));
  }
export const searchRestaurants = async ({ search }) => {
    console.log(search, 'search');
    if (search === '') return null

    try {
        const response = await fetch(`${ENDPOINT}?query=${search}&key=${API_KEY}`)
        const json = await response.json()
        const restaurants = json.results

        return restaurants?.map(r => ({
            name: r.name,
            address: r.formatted_address,
            lat: r.geometry.location.lat,
            lng: r.geometry.location.lng,
        }))
    } catch (e) {
        throw new error('Error searching restaurants')
    }
}