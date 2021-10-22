import {BaseTask, Task} from "../interfaces/task.interface";
import db from "../common/db";

const TABLE_NAME = 'tasks'

export const findAll = async (): Promise<Task[]> => {
    return db.findAll(TABLE_NAME)
};

export const find = async (id: number): Promise<Task> => {
    return db.find(TABLE_NAME, id)
};

export const create = async (newTask: BaseTask): Promise<Task> => {
    return db.create(TABLE_NAME, newTask)
};

export const update = async (id: number, task: BaseTask): Promise<Task | null> => {
    return db.update(TABLE_NAME, id, task)
};

export const remove = async (id: number): Promise<null | void> => {
    return db.remove(TABLE_NAME, id)
};