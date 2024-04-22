//importing fs module
const fs = require('fs'); //require is a function in Node.js used to import modules

const readFileAsync= (filePath) =>{
    return new Promise((resolve, reject) => {
        fs.readFile(filePath,'utf8',(err,data) =>{   
            if(err){
                reject('Error reading file');

            }else{
                resolve(data);
            }
           })
    });
    myPromise.then((result)=>{

    }).catch((error) => {
        console.error("An error occurred:", error);
    });
    

    }

