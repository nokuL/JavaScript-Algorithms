function armstrongCheck(num){

    let sum = 0;// for summing
    let temp = num;
    let order = num.toString().length;// for the order
    while(temp >0){
        // we want iterate throu , modulus and get remainder and power and add to summ
        let remainder = temp % 10;
        sum += Math.pow(remainder, order);
        temp = Math.floor(temp/10);
    }
    return sum === num;

}