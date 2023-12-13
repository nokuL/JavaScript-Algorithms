function armstrongcheck(num){
    //function to check if num is armstrongchek
    sum = 0;
    num_string = num.tostring();
    if(num_string===null){
        return False;
    }else{
        order = num_string.length;
        string_array = num_string.split("");
        for (let string in string_array){
            sum += parseInt(string)**order
            
        }
        return sum === num;

    }
}