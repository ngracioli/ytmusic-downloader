const express = require("express");
const ytdl = require("@distube/ytdl-core");
const router = express.Router();

router.get("/download", async (req, res) => {
    const url = req.query.url;

    if (!url) {
        return res.status(400).send("URL is required");
    }

    try {
        const info = await ytdl.getInfo(url);
        const title = info.videoDetails.title
            .replace(/[^a-z0-9]/gi, "_")
            .toLowerCase();
        const audioFormat = ytdl.chooseFormat(info.formats, {
            quality: "highestaudio",
            filter: "audioonly",
        });

        res.header(
            "Content-Disposition",
            `attachment; filename="${title}.mp3"`
        );

        ytdl.downloadFromInfo(info, {
            format: audioFormat,
            quality: "highestaudio",
        })
            .pipe(res)
            .on("finish", () => {
                console.log(`Downloaded: ${title}`);
            });
    } catch (err) {
        console.error(err);
        return res
            .status(500)
            .send("An error occurred while processing your request");
    }
});

module.exports = router;
