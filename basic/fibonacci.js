function fibonacci(num){
    if(num===1 || num===2){
        return 1;
    }else{
        return fibonacci(n-1)+ fibonacci(n-2);
    }
}

console.log(fibonacci(3))