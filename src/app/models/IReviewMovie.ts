export interface IReviewMovie {
	author: string;
	author_details: RootObjectAuthor_details;
	content: string;
	created_at: string;
	id: string;
	updated_at: string;
	url: string;
}
export interface RootObjectAuthor_details {
	name: string;
	username: string;
	avatar_path: string;
	rating: number;
}