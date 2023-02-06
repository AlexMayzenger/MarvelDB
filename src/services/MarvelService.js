


class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/'
    _apiKey = 'apikey=75ad8e99e9c7219c683fc0386e45af4f'

    getRecource = async (url) => { //получение данных со ссылки, асинк ставим тк функиция асинхронная 
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`); 
        }
        return await res.json(); //ответ с сервера форматируем в формат json
    }

    getAllCharacters = async ()=> {
        const res = await this.getRecource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
        return res.data.results.map(this._transformCharacter)
    } 
    getCharacter = async (id)=> {
        const res = await this.getRecource(`${this._apiBase}characters/${id}?${this._apiKey}`);
        return this._transformCharacter(res.data.results[0]);
    } 

    _transformCharacter = (char) => {        
        return {
            name: char.name,
            description : char.description ? `${char.description.slice(0, 210)}...` : 'There is no description for this character',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
        }
    }

}



export default MarvelService;