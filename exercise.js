function printAsyncName(callback, name){
    let param = setInterval(callback ,1000);
    setTimeout(() => console.log(name),2000);
    setTimeout(() => clearInterval(param),2000);
    
}

function call(){
    console.log("hello")
}

printAsyncName(call,"luciano")

