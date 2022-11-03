const readFile = (
  callback,
  returnJson = false,
  filePath,
  encoding = "utf8",
  fs
) => {
  fs.readFile(filePath, encoding, (err, data) => {
    if (err) {
      throw err;
    }

    callback(returnJson ? JSON.parse(data) : data);
  });
};
module.exports = readFile;
