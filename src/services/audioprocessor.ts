import path from "path";
import * as texttospeech from "./mstexttospeech";
//import * as ffmpeg from "@ffmpeg-installer/ffmpeg";
import * as fluentffmpeg from "fluent-ffmpeg";

const extractAudio = require("ffmpeg-extract-audio");
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
var ffmpeg = require("fluent-ffmpeg");
ffmpeg.setFfmpegPath('C:\home\site\wwwroot\node_modules\@ffmpeg-installer\win32-x64\ffmpeg.exe');
export const create = async function (id: string, filename: string) {
	//if(ffmpegPath)
	//ffmpegPath.replace('win32-ia32','win32-x64');
	
	

		console.log(ffmpegPath + ' ffmpegPath');
	try {
		await extractAudio({
			input: path.resolve(`.\\videos\\${id}-${filename}`),//`C:/Users/User/Desktop/Project/Wafi/Live Translator/Live-Translator-web/Live-translator/videos/${id}-${filename}`, //`C:/Users/User/Desktop/Project/Wafi/Live Translator/Live-translator/videos/${id}-${filename}`,
			output: `${id}.wav`,
		});
		//	const file = await fs.readFile(`${id}.wav`, async (err: any) => {
		//	console.log(err);
		//});
		//bodyFormData.append("file", file);
		//let resp = await axios.post("https://nlp-poc-translator.azurewebsites.net/uploader", bodyFormData, { headers: headers })
		console.group(filename,id);
		let data = await texttospeech.texttospeech('test', id);

		return data;
	}
	catch (err) {
		console.log(err);
	}
};


