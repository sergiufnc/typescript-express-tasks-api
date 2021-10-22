import {BaseTaskList, TaskList} from "../interfaces/taskList.interface";
import db from "../common/db";

const TABLE_NAME = 'taskLists'

export const findById = async (id: number): Promise<TaskList> => {
    return db.find(TABLE_NAME, id)
}

export const findByTaskIdAndListId = async (taskId: number, listId: number): Promise<TaskList | null> => {
    const found = await db.query(`select * from ${TABLE_NAME} where taskId = ? and listId = ?`, [taskId, listId])

    if (!found[0]) {
        return null
    }

    return found[0]
}

export const create = async (taskId: number, listId: number): Promise<TaskList | null> => {
    const checkDuplicate = await findByTaskIdAndListId(taskId, listId)

    if (checkDuplicate) {
        return null
    }

    const created = await db.query(`insert into ${TABLE_NAME} (taskId, listId) values (?, ?)`, [taskId, listId])

    const id: number = parseInt(created.insertId)

    return findById(id)
};

export const remove = async (taskId: number, listId: number): Promise<null | void> => {
    return db.query(`delete from ${TABLE_NAME} where taskId = ? and listId = ?`, [taskId, listId])
};