import { PostTag } from './PostTag'

export class Post {
    id: string
    name: string
    content: string
    userName: string
    tags: PostTag[]
  }