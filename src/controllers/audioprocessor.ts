import { Request, Response } from "express";
import * as service from "../services/audioprocessor";
export const translate = async (req: Request, res: Response, next: any) => {
	try {
		let data = await service.create(req.params.id, req.file?.originalname!);
		const view = new Int32Array(data);
		res.send(data); //.json({ data: data });
	} catch (e) {
		next(e);
	}
};
