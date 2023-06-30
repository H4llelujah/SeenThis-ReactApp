// const kinoApiKey = 'c0e1e51f-e038-4f8f-87af-ebe82d35fc05';
const kinoApiKey = '1a350648-ce9b-42f6-8ad5-175a48adfa5e';
const kpURL = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top';
const apikey = 'cc706953';


export default class MovieService {
    static async getAll(){
            const response = await fetch(kpURL, {
                method: 'GET',
                headers: {
                    'X-API-KEY': kinoApiKey,
                    'Content-Type': 'application/json',
                }
            })

            if (!response.ok) {
                const errorMessage = `Status: ${response.status}`
                throw new Error(errorMessage);
            }

            const data = await response.json();
            return data;
        }
    static async getByName(name) {
        const response = await fetch(`https://www.omdbapi.com/?t=${name}&apikey=${apikey}`, {
            method: 'GET',
        })
        if (!response.ok) {
            const errorMessage = `Status: ${response.status}`
            throw new Error(errorMessage);
        }
        const data = await response.json();
        return data;
    }
}