// src/middleware/error.middleware.ts

import {NextFunction, Request, Response} from "express";

export const notFoundHandler = (
	request: Request,
	response: Response,
	next: NextFunction
) => {
	const message = "Resource not found";

	response.status(404).json({error: message});
};