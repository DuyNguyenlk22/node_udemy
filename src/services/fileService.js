const uploadSingleFile = async (fileObject) => {
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let uploadPath = __dirname + fileObject.name;

  // Use the mv() method to place the file somewhere on your server
  try {
    await fileObject.mv(uploadPath);
    return {
      status: "Success",
      path: "image-path",
      error: null,
    };
  } catch (error) {
    console.log("😐 ~ uploadSingleFile ~ error:👉", error);
    return {
      status: "Failed",
      path: null,
      error: JSON.stringify(error),
    };
  }
};

const uploadMultipleFiles = () => {};

module.exports = {
  uploadSingleFile,
  uploadMultipleFiles,
};
