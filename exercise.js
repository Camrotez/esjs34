function printAsyncName(callback, name){
    let param = setInterval(callback ,1000);
    setTimeout(() => clearInterval(param),2000)
}

printAsyncName(() => console.log("Hello"));

