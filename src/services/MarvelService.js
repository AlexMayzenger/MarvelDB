


class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/'
    _apiKey = 'apikey=75ad8e99e9c7219c683fc0386e45af4f'

    getRecource = async (url) => {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Coild not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }

    getAllCharacters = ()=> {
        return this.getRecource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
    } 
    getCharacters = (id)=> {
        return this.getRecource(`${this._apiBase}characters/${id}?${this._apiKey}`);
    } 
}



export default MarvelService;