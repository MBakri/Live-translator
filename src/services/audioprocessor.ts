import path from "path";
import * as texttospeech from "./mstexttospeech";

const extractAudio = require("ffmpeg-extract-audio");
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const ffmpeg = require("fluent-ffmpeg");
ffmpeg.setFfmpegPath(ffmpegPath);
export const create = async function (id: string, filename: string) {

	await extractAudio({
		input: path.resolve(`.\\videos\\${id}-${filename}`),//`C:/Users/User/Desktop/Project/Wafi/Live Translator/Live-Translator-web/Live-translator/videos/${id}-${filename}`, //`C:/Users/User/Desktop/Project/Wafi/Live Translator/Live-translator/videos/${id}-${filename}`,
		output: `${id}.wav`,
	});
	let data = await texttospeech.texttospeech("test");
	return data;
};
