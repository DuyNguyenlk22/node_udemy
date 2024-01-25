const uploadSingleFile = async (fileObject) => {
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  // let uploadPath = __dirname + fileObject.name;
  let uploadPath = process.cwd() + "/src/public/images/upload";
  let newName = Date.now() + "_" + fileObject.name;

  let finalPath = `${uploadPath}/${newName}`;
  // Use the mv() method to place the file somewhere on your server
  try {
    await fileObject.mv(finalPath);
    return {
      status: "Success",
      path: newName,
      error: null,
    };
  } catch (error) {
    return {
      status: "Failed",
      path: null,
      error: JSON.stringify(error),
    };
  }
};

const uploadMultipleFiles = async (fileArray) => {
  try {
    let uploadPath = process.cwd() + "/src/public/images/upload";
    let resultArray = [];
    let countSuccess = 0;

    for (let key in fileArray) {
      let newName = Date.now() + "_" + fileArray[key].name;

      let finalPath = `${uploadPath}/${newName}`;
      try {
        await fileArray[key].mv(finalPath);
        resultArray.push({
          status: "Success",
          path: newName,
          fileName: fileArray[key].name,
          error: null,
        });
        countSuccess++;
      } catch (error) {
        resultArray.push({
          status: "Failed",
          path: null,
          fileName: fileArray[key].name,
          error: JSON.stringify(error),
        });
      }
    }
    return {
      countSuccess,
      detail: resultArray,
    };
  } catch (error) {
    console.log("😐 ~ error:👉", error);
  }
};

module.exports = {
  uploadSingleFile,
  uploadMultipleFiles,
};
