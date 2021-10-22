import mysql from 'mysql'
import {BaseTask, Task} from "../interfaces/task.interface";

export const query = (sql: string, values: Array<any> = []) => new Promise<any>((resolve, reject) => {
    const connection = mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USERNAME,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    });

    connection.connect();

    connection.query(sql, values, (error: any, results: Array<any>) => {
        if (error) reject(error);

        resolve(results);
    });

    connection.end();
})

export const findAll = async (tableName: string): Promise<any> => {
    return query(`select * from ${tableName}`)
};

export const find = async (tableName: string, id: number): Promise<any> => {
    const results = await query(`select * from ${tableName} where id = ${id} limit 1`)

    if (!results[0]) {
        return null
    }

    return results[0]
};

export const create = async (tableName: string, data: any): Promise<any> => {
    const keys = Object.keys(data)
    const values = Object.values(data)

    const keysString = keys.join(', ')
    const valuesString = values.map(() => '?').join(', ')

    const created = await query(`insert into ${tableName} (${keysString}) values (${valuesString})`, values)

    const id: number = parseInt(created.insertId)

    return find(tableName, id)
};

export const update = async (tableName: string, id: number, data: any): Promise<any> => {
    const task: Task = await find(tableName, id)

    if (!task) {
        return null
    }

    const values = []

    const conditions = Object.entries(data).map(item => {
        values.push(item[1])

        return `${item[0]}=?`
    })

    values.push(id)

    await query(`update ${tableName} set ${conditions.join(',')} where id = ?`, values)

    return find(tableName, id)
};

export const remove = async (tableName: string, id: number): Promise<any> => {
    const item: any = await find(tableName, id)

    if (!item) {
        return null
    }

    await query(`delete from ${tableName} where id = ${id}`)

    return item
};

export default {
    query,
    findAll,
    find,
    create,
    update,
    remove
}