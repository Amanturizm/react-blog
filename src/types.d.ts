interface IPost {
  id?: string;
  datetime: string;
  title: string;
  description: string;
}

interface IResponseData {
  [id: string]: IPost;
}

interface IPostForm {
  datetime?: string;
  title: string;
  description: string;
}

interface IAboutText {
  title: string;
  [paragraph: string]: string;
}