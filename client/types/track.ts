export interface IComment {
  _id: string
  username: string
  text: string
}

export interface ITtrack {
  _id: string
  name: string
  artist: string
  text: string
  listens: number
  picture: string
  audio: string
  comments: IComment[]
}
