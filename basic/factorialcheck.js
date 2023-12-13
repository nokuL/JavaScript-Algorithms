function factorialcheck(num){
    if(num===0 || num===1){
        return 1
    }else{
        return num * factorialcheck(num-1)
    }
}

console.log(factorialcheck(5))