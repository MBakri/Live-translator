import { Request, Response } from "express";
import * as service from "../services/audioprocessor";
import fs from "fs";
import path from "path";
export const translate = async (req: Request, res: Response, next: any) => {
	try {
		let data = await service.create(req.params.id, req.file?.originalname!);
		var filePath = `C:/Users/User/Desktop/Project/Wafi/Live Translator/Live-Translator-web/Live-translator/YourAudioFile.wav`  //path.join(__dirname, req.params.id + '.wav');
		var stat = fs.statSync(filePath);
		res.writeHead(200, {
			'Content-Type': 'audio/wav',
			'Content-Length': stat.size
		});
		var readStream = fs.createReadStream(filePath);

		// We replaced all the event handlers with a simple call to readStream.pipe()
		readStream.pipe(res);
		//	return res.status(200).json(data); //.json({ data: data });
	} catch (e) {
		next(e);
	}
};
