export interface BaseList {
    title: string,
    updatedAt: string
}

export interface List extends BaseList {
    id: number
}