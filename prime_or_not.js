function prime_check(num){
     
    for(let i=2;i<=num**0.5;i++){
    if(num%i == 0){
        return "Not Prime";
    }
    }
   
        return "Prime"; 
}

console.log(prime_check(0)); 