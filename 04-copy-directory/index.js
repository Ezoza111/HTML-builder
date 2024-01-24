const fs = require("fs")
const path = require("path")
const folderPath = path.join(__dirname, "files")
const newFolderPath = path.join(__dirname, "files-copy")
fs.mkdir(newFolderPath, { recursive: true }, (err,files) => {
    if(err) {
        throw err
    }
    console.log("create folder")
})
function copyDir() {
  fs.readdir(folderPath, { withFileTypes: true }, (err, files) => {
    files.forEach((file) => {
      let  filePath = path.join(__dirname, "files", file.name)
      let newFilePath = path.join(newFolderPath, file.name)
      fs.copyFile(filePath, newFilePath, (err) => {
        if(err) {console.log(err)} else {
            console.log('copyFile')
        }
      })
    })
 })
}
copyDir()