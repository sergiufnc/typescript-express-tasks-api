import express, {Request, Response} from 'express'

import {findAll, find, create, update, remove} from '../services/task.service'
import {BaseTask, Task} from "../interfaces/task.interface";

export const taskController = express.Router();


// GET /api/tasks
taskController.get('/', async (req: Request, res: Response) => {
    try {
        const tasks: Array<Task> = await findAll()

        res.status(200).json({tasks})
    } catch (e: any) {
         res.status(500).json({error: e.message});
    }
})


// GET /api/tasks/:id
taskController.get('/:id', async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id)

        const task: Task = await find(id)

        res.status(200).json({task})
    } catch (e: any) {
        res.status(500).json({error: e.message});
    }
})


// POST /api/tasks
taskController.post('/', async (req: Request, res: Response) => {
    try {
        const newTask: BaseTask = req.body;

        const task = await create(newTask)

        res.status(200).json({task})
    } catch (e: any) {
        res.status(500).json({error: e.message});
    }
})


// PUT /api/tasks/:id
taskController.put('/:id', async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id)

        const updateTask: Task = req.body;

        const task = await update(id, updateTask)

        res.status(200).json({task})
    } catch (e: any) {
        res.status(500).json({error: e.message});
    }
})


// DELETE /api/tasks/:id
taskController.delete('/:id', async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id)

        await remove(id)

        res.status(204).json({ok: true})
    } catch (e: any) {
        res.status(500).json({error: e.message});
    }
})
