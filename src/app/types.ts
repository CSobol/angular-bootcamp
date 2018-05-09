export interface IVideo {
  title: string;
  author: string;
  id: string;
  viewDetails: IMoreDetails[]
}

export interface IMoreDetails {
  age: number;
  region: string;
  date: string;
}
