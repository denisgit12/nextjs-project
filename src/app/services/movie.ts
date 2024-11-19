import {IResponseMovie} from "@/app/models/ResponseMovie";
import {IGenre} from "@/app/models/IGenre";
import {IMovie} from "@/app/models/IMovie";
import {IDetailMovie} from "@/app/models/IDetailMovie";
import {IResponseReview} from "@/app/models/IResponseReview";

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTRkZjNmYTUxMWE3NTdkZGEyOTRiOTNkMmVlMGRkOCIsIm5iZiI6MTczMTYwNzAxOC4yODM' +
    'xOTc2LCJzdWIiOiI2NzM2MzVhYTI5NTRkMjY0NzYyNTkxN2UiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.uxFUNiONihFRLcQ4DmV' +
    '_Df9VQ38JLsVbBPEolXd-5bY';


export const movieServer = {

    getAllMovies: async (page: number): Promise<IResponseMovie> => {
        return await fetch(`https://api.themoviedb.org/3/discover/movie?page=${page}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        ).then(resp => resp.json())
            .then(value => value)
    },
    getAllGenre: async (): Promise<IGenre[]> => {
        return await fetch(`https://api.themoviedb.org/3/genre/movie/list`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        ).then(resp => resp.json())
            .then(value => value.genres)
        // return data;
    },
    getPopularMovie: async (): Promise<IMovie[]> => {
    return await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    ).then(resp => resp.json())
        .then(value => value.results)
},
    getOneMovie: async (id:string | number): Promise<IDetailMovie> => {
        return await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        ).then(resp => resp.json())
            .then(value => value)
    },
    getReview: async (id:string | number): Promise<IResponseReview> => {
        return await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        ).then(resp => resp.json())
            .then(value => value)
    }

}