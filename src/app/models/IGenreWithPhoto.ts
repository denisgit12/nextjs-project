import {IGenre} from "@/app/models/IGenre";
import {IDataPhotoGenre} from "@/app/models/IDataPhotoGenre";

export interface IGenreWithPhoto {
    genre:IGenre,
    photoGenre:IDataPhotoGenre
}