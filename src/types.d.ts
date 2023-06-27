interface IPost {
  id: string;
  datetime: string;
  title: string;
  description: string;
}

interface IResponseData {
  [id: string]: IPost;
}