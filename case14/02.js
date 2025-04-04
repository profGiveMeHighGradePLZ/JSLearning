const fs = require('fs')
// fs.writeFile('text.txt','hello,node.js',err=>{
//     if(err) console.log(err);
//     else console.log('success');
// })
const path = require('path')

fs.readFile(path.join(__dirname,'../text.txt'),(err,data)=>{
    if(err) console.log(err);
    else console.log(data.toString());
    
    
})