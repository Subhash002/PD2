import multer from "multer";
const upload = multer({ dest: "uploads/" });

export default function uploadFile(req, res) {
  upload.single("file")(req, res, function (err) {
    if (err) {
      return res.status(5000).json({ error: err.message });
    }
    res.status(200).json({ file: req.file });
  });
}
