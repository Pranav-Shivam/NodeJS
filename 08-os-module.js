const os=require('os');
let data=os.userInfo();
console.log(data);

//
console.log(`The uptime of the PC is ${os.uptime()}`);

//current os info

const info={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
};

console.log(info);