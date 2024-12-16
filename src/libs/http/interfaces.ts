export interface ApiData<Data> {
  data: Data
  messages: {code: number; content: string; show: boolean; type: number}[]
  success: boolean
}

interface ListData<Item> {
  total: number
  page: number
  size: number
  totalCount: number
  items: Item[]
}

export type ListApiData<Item> = ApiData<ListData<Item>>

export interface SelectableItem {
  disabled: boolean
  group: string | null
  selected: boolean
  text: string
  value: string
}
