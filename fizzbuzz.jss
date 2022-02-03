function check(num){
  var i=1
  
  for(i;i<=num;i++){
    if((i%3==0)&&(i%5==0)){
      console.log("FizzBuzz");
      
    }
    else if(i%3==0){
      console.log("Fizz");
    }
    else if(i%5==0){
      console.log("Buzz")
    }
    else{
      console.log(i);
    }
  }
}
check(30)