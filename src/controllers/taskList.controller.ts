import express, {Request, Response} from 'express'

import {create, remove} from '../services/taskList.service'
import {BaseTaskList, TaskList} from "../interfaces/taskList.interface";

export const taskListController = express.Router();

// POST /api/task-lists
taskListController.post('/', async (req: Request, res: Response) => {
    try {
        const {taskId, listId} = req.body;

        const taskList = await create(taskId, listId)

        res.status(200).json({taskList})
    } catch (e: any) {
        res.status(500).json({error: e.message});
    }
})


// DELETE /api/task-lists/:id
taskListController.delete('/:taskId/:listId', async (req: Request, res: Response) => {
    try {
        const taskId: number = parseInt(req.params.taskId)
        const listId: number = parseInt(req.params.listId)

        await remove(taskId, listId)

        res.status(204).json({ok: true})
    } catch (e: any) {
        res.status(500).json({error: e.message});
    }
})
