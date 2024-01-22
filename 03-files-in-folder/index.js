const fs = require('fs');
const path = require('path');
const pathTxtFile = path.join(__dirname, 'secret-folder');
fs.readdir(pathTxtFile, { withFileTypes: true }, (err, files) => { 
    console.log("\nCurrent directory files:"); 
    if (err) 
      console.log(err); 
    else { 
      files.forEach(file => { 
        let fileName = path.basename(file.name, path.extname(file.name));
        let extName = path.extname(file.name);
        fs.stat(path.join(pathTxtFile, file.name), (err,stats) => {
            if (err) {
                console.error(err);
                return;
            }  else {console.log(`${fileName} - ${extName.substring(1)} - ${stats.size}b`);}
          })
      }) 
    } 
  }) 