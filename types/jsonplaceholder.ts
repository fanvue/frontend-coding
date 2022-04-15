export interface PHOTO {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
export interface POST {
  userId: string;
  id: number;
  title: string;
  body: string;
  comments?: COMMENT[]; //addition of original json
}
export interface COMMENT {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
