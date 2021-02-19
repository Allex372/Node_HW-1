const path = require('path');
const fs = require('fs');
const dirName = path.join(__dirname, '1800');
const dirNamefemale = path.join(__dirname + '/2000');
const filePath = path.join(__dirname + '/1800/Alina.txt');
const filePath2 = path.join(__dirname+ '/1800/Allex.txt');
const filePathStar = path.join(__dirname + '/StarTask')

//Task 1 Star
// function upFile(filePathStar1){
//     fs.readdir(filePathStar1,((err, files) => {
//         if (err){
//             console.log(err)
//             return;
//         }
//         for (const file of files) {
//             fs.stat(path.join(filePathStar1,file),(err1, stats) => {
//                 console.log(stats.isDirectory())
//                 if (stats.isDirectory()){
//                     upFile(path.join(filePathStar1,file))
//                 }else {
//                     fs.rename(path.join(filePathStar1, file), path.join(filePathStar,file), err2 => {
//                         if (err2){
//                             console.log(err2)
//                         }
//                     })
//                 }
//                 if (err1){
//                     console.log(err1)
//                 }
//             })
//         }
//     }))
// }
// upFile(filePathStar)

function upFile(filePathDinamic){
    fs.readdir(filePathDinamic, (err, files) => {
        if (err){
            console.log(err)
            return;
        }
        for (const file of files) {
            fs.stat(path.join(filePathDinamic, file), (err1, stats) => {
                if (stats.isDirectory()){
                    upFile(path.join(filePathDinamic, file))
                }else {
                    fs.rename(path.join(filePathDinamic,file), path.join(filePathStar,file), err2 => {
                        if (err2){
                            console.log(err2)
                        }
                    })
                }
                if (err1){
                    console.log(err1)
                }
            })
        }
    })

}
upFile(filePathStar)


//Task1 MALE
// fs.readdir(dirName, (err,files)=>{
//     if (err){
//         console.log(err)
//         return;
//     }
//     for (const file of files) {
//         fs.readFile(path.join(dirName,file), (err1, data) => {
//             console.log(JSON.parse(data).gender);
//             if (JSON.parse(data).gender === 'male'){
//                 fs.rename(path.join(dirName,file), path.join(__dirname,'2000',file), err2 => {
//                     if (err2){
//                         console.log(err2)
//                     }
//                 })
//             }
//         })
//     }
//     console.log(files)
// })

//Task1 Female
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
