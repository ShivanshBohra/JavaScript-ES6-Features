// It is used for asynchronous operation

 let prom = new Promise((res,rej)=>{
    let flag = false;
    if(flag){
        res();
    }else{
        rej();
    }
 })
// based on resove and reject, these 2 methods are call.
prom.then(()=>{
    console.log("promise is resolved")
})
.catch(()=>{
    console.log("promise is rejected")
})
// -------------------------------
let prom1 = new Promise((res,rej)=>{
    let flag = true;
  setTimeout(()=>{
    if(flag){
        res();
    }else{
        rej();
    }

  },5000)
 })
// based on resove and reject, these 2 methods are call.
prom1.then(()=>{
    console.log("promise is resolved")
})
.catch(()=>{
    console.log("promise is rejected")
})