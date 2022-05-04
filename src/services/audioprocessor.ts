import * as texttospeech from "./mstexttospeech";

const extractAudio = require("ffmpeg-extract-audio");
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const ffmpeg = require("fluent-ffmpeg");
ffmpeg.setFfmpegPath(ffmpegPath);
export const create = async function (id: string, filename: string) {
	await extractAudio({
		input: `F:/MB/Live-translator/videos/${filename}`, //`C:/Users/User/Desktop/Project/Wafi/Live Translator/Live-translator/videos/${id}-${filename}`,
		output: `${filename}.wav`,
	});
	return await texttospeech.texttospeech("test");
};
