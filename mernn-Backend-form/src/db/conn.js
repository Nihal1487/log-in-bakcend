const mongoose = require("mongoose");
const color = require("ansi-colors")
mongoose
  .connect("mongodb+srv://nima:wdoaHZB8NS6MzqDw@cluster0.vhsnfmh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log(color.bgGreen.bold("Connection Successfull....."));
  })
  .catch((e) => {
    console.log(e);
  });


  // wdoaHZB8NS6MzqDw