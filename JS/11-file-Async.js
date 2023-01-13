const { ifError } = require('assert')
const {readFile,writeFile}=require('fs')


readFile('./content/first.txt','utf-8',(err,resultF)=>{
    if(err)
    {
        console.log(err)
        return
    }
    const first=resultF

readFile('./content/subfolder/second.txt','utf-8',(err,resultS)=>{
    if(err)
    {
        console.log(err)
        return
    }
    const second=resultS


writeFile('./content/subfolder/result.txt',`this is the content : ${first},${second}`,(err,res)=>{
    if(err)
    {
        console.log(err)
        return
    }
    console.log(res)
})
})
})
