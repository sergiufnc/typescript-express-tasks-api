import {BaseList, List} from "../interfaces/list.interface";
import db from "../common/db";

const TABLE_NAME = 'lists'

export const findAll = async (): Promise<List[]> => {
    return db.findAll(TABLE_NAME)
};

export const find = async (id: number): Promise<List> => {
    return db.find(TABLE_NAME, id)
};

export const create = async (newList: BaseList): Promise<List> => {
    return db.create(TABLE_NAME, newList)
};

export const update = async (id: number, task: BaseList): Promise<List | null> => {
    return db.update(TABLE_NAME, id, task)
};

export const remove = async (id: number): Promise<null | void> => {
    return db.remove(TABLE_NAME, id)
};