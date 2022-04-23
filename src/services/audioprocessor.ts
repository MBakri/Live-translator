import * as texttospeech from "./mstexttospeech";

const extractAudio = require("ffmpeg-extract-audio");
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const ffmpeg = require("fluent-ffmpeg");
ffmpeg.setFfmpegPath(ffmpegPath);
export const create = async function (id: string, filename: string) {
	await extractAudio({
		input: `C:/Users/User/Desktop/Project/Wafi/Live Translator/Live-translator/videos/${id}-${filename}`,
		output: `${id}.mp3`,
	});
	return await texttospeech.texttospeech('test');
};
