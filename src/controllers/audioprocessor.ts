import { Request, Response } from "express";
import { Blob } from 'buffer';
import { isInt32Array } from "util/types";
import * as service from "../services/audioprocessor";
export const translate = async (req: Request, res: Response, next: any) => {
	//console.log(req);
	try {
		let data = await service.create(req.params.id, req.file?.originalname!);
		console.log(data, 'DATA');
		const view = new Int32Array(data);
		res.send(view);//.json({ data: data });
	} catch (e) {
		next(e);
	}
};
