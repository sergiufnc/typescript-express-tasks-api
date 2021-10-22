export interface BaseTask {
    title: string,
    updatedAt: string
}

export interface Task extends BaseTask {
    id: number,
}