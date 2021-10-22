import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";

import {listController} from './controllers/list.controller'
import {taskController} from './controllers/task.controller'
import {taskListController} from './controllers/taskList.controller'

import {errorHandler} from "./middleware/error.middleware";
import {notFoundHandler} from "./middleware/notFound.middleware";

dotenv.config();

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/lists', listController);
app.use('/api/tasks', taskController);
app.use('/api/task-lists', taskListController);

app.use(errorHandler)
app.use(notFoundHandler)

export default app