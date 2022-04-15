import { Request, Response } from "express";
import * as service from "../services/audioprocessor";
export const translate = async (req: Request, res: Response, next: any) => {
	console.log(req);
	try {
		let data = await service.create(req.params.id, req.file?.originalname!);
		res.status(200).json({ data: data });
	} catch (e) {
		next(e);
	}
};
