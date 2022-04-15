const extractAudio = require("ffmpeg-extract-audio");
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const ffmpeg = require("fluent-ffmpeg");
ffmpeg.setFfmpegPath(ffmpegPath);
export const create = async function (id: string, filename: string) {
	let result = await extractAudio({
		input: `C:/Users/Malek Bakri/OneDrive/Desktop/MB Training/New folder/Training/Live-translator/videos/${id}-${filename}`,
		output: `${id}.mp3`,
	});
	return result;
};
