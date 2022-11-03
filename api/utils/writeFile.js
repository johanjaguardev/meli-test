const writeFile = (fileData, callback, filePath, encoding = "utf8", fs) => {
  fs.writeFile(filePath, fileData, encoding, (err) => {
    if (err) {
      throw err;
    }

    callback();
  });
};
module.exports = writeFile;
