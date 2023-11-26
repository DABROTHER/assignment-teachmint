interface PostDetailsResponse {
  data: PostDetailsList[];
}
interface PostDetailsList {
  userId: number;
  id: number;
  title: string;
  body: string;
}
