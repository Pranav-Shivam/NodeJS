const {readFileSync,writeFileSync}=require('fs')

const first=readFileSync('./content/first.txt','utf-8');
const second=readFileSync('./content/subfolder/second.txt','utf-8');

console.log(first)
console.log('-------')
console.log(second)

writeFileSync('./content/result.txt','This the append content ',{flag:'a'})
