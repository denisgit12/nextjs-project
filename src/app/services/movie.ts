import {IResponseMovie} from "@/app/models/ResponseMovie";
import {IGenre} from "@/app/models/IGenre";

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTRkZjNmYTUxMWE3NTdkZGEyOTRiOTNkMmVlMGRkOCIsIm5iZiI6MTczMTYwNzAxOC4yODM' +
    'xOTc2LCJzdWIiOiI2NzM2MzVhYTI5NTRkMjY0NzYyNTkxN2UiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.uxFUNiONihFRLcQ4DmV' +
    '_Df9VQ38JLsVbBPEolXd-5bY';


export const movieServer = {
    getAllMovies: (page: number): Promise<IResponseMovie> => {
        return fetch(`https://api.themoviedb.org/3/discover/movie?page=${page}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        ).then(resp => resp.json())
            .then(value => value)
    },

    getAllGenre: (): Promise<IGenre[]> => {
        return fetch(`https://api.themoviedb.org/3/genre/movie/list`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        ).then(resp => resp.json())
            .then(value => value)
        // return data;
    }
}