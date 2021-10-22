export interface BaseTaskList {
    taskId: string,
    listId: string,
    updatedAt: string
}

export interface TaskList extends BaseTaskList {
    id: number
}