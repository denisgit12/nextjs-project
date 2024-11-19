import {IReviewMovie} from "@/app/models/IReviewMovie";

export interface IResponseReview {

    id: number,
    page: number,
    results: IReviewMovie[],
    total_pages: number,
    total_results: number,
}