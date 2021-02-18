const path = require('path');
const fs = require('fs');
const dirName = __dirname + '/1800';
const dirNamefemale = __dirname + '/2000'
const filePath = __dirname + '/1800/Alina.txt'
const filePath2 = __dirname+ '/1800/Allex.txt'

// fs.readFile(path.join(filePath), (err, data) => {
//     console.log(JSON.parse(data).gender)
// })
fs.readdir(dirName, (err,files)=>{
    if (err){
        console.log(err)
        return;
    }
    for (const file of files) {
        fs.readFile(path.join(dirName,file), (err1, data) => {
            console.log(JSON.parse(data).gender);
            if (JSON.parse(data).gender === 'male'){
                fs.rename(path.join(dirName,file), path.join(__dirname,'2000',file), err2 => {
                    if (err2){
                        console.log(err2)
                    }
                })
            }
        })
    }
    console.log(files)
})

// fs.readdir(dirNamefemale, (err,files)=>{
//     if (err){
//         console.log(err)
//         return;
//     }
//     for (const file of files) {
//         fs.readFile(path.join(dirNamefemale,file), (err1, data) => {
//             console.log(JSON.parse(data).gender);
//             if (JSON.parse(data).gender === 'female'){
//                 fs.rename(path.join(dirNamefemale,file), path.join(__dirname,'1800',file), err2 => {
//                     if (err2){
//                         console.log(err2)
//                     }
//                 })
//             }
//         })
//     }
//     console.log(files)
// })
