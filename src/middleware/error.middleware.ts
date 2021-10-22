// src/middleware/error.middleware.ts

import HttpException from "../common/http-exception";
import {NextFunction, Request, Response} from "express";

export const errorHandler = (
	error: HttpException,
	request: Request,
	response: Response,
	next: NextFunction
) => {
	const status = error.statusCode || error.status || 500;

	response.status(status).send(error);
};