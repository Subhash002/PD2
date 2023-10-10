import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";

const doConversion = async (inputFile, outputFormat) => {
  const ffmpeg = createFFmpeg({ log: true });
  await ffmpeg.load();
  ffmpeg.FS("writeFile", inputFile.name, await fetchFile(inputFile));
  await ffmpeg.run("-i", inputFile.name, `output.${outputFormat}`);
  const data = ffmpeg.FS("readFile", `output.${outputFormat}`);
  const url = URL.createObjectURL(
    new Blob([data.buffer], { type: `video/${outputFormat}` })
  );
  return url;
};

export default doConversion;
