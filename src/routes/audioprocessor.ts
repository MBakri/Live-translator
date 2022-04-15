import express from "express";
import multer from "multer";
import path from "path";
import * as controller from "../controllers/audioprocessor";
var router = express.Router();

const videoStorage = multer.diskStorage({
	destination: "videos", // Destination to store video
	filename: (req, file, cb) => {
		cb(null, req.params.id + "-" + file.originalname);
	},
});
const videoUpload = multer({
	storage: videoStorage,
	limits: {
		fileSize: 10000000, // 10000000 Bytes = 10 MB
	},
	fileFilter(req, file, cb) {
		// upload only mp4 and mkv format
		if (!file.originalname.match(/\.(mp4|MPEG-4|mkv)$/)) {
			return cb(new Error("Please upload a video"));
		}
		cb(null, true);
	},
});
router.post("/translate/:id", videoUpload.single("video"), controller.translate);

export = router;
