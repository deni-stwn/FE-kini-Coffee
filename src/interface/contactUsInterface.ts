import { image } from "./img"

export interface ContactInterface {
  id: number
  phone_number: string
  email: string
  username_instagram: string
  youtube_channel: string
  image_contact: string
}

export interface ContactList {
  img: image[]
  title: string
  href: string
} 