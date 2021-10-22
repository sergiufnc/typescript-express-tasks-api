import express, {Request, Response} from 'express'

import {findAll, find, create, update, remove} from '../services/list.service'
import {BaseList, List} from "../interfaces/list.interface";

export const listController = express.Router();


// GET /api/lists
listController.get('/', async (req: Request, res: Response) => {
    try {
        const lists: Array<List> = await findAll()

        res.status(200).json({lists})
    } catch (e: any) {
        res.status(500).json({error: e.message});
    }
})


// GET /api/lists/:id
listController.get('/:id', async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id)

        const list: List = await find(id)

        res.status(200).json({list})
    } catch (e: any) {
        res.status(500).json({error: e.message});
    }
})


// POST /api/lists
listController.post('/', async (req: Request, res: Response) => {
    try {
        const newList: BaseList = req.body;

        const list = await create(newList)

        res.status(200).json({list})
    } catch (e: any) {
        res.status(500).json({error: e.message});
    }
})


// PUT /api/lists/:id
listController.put('/:id', async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id)

        const updateList: List = req.body;

        const list = await update(id, updateList)

        res.status(200).json({list})
    } catch (e: any) {
        res.status(500).json({error: e.message});
    }
})


// DELETE /api/lists/:id
listController.delete('/:id', async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id)

        await remove(id)

        res.status(204).json({ok: true})
    } catch (e: any) {
        res.status(500).json({error: e.message});
    }
})
