let numbers = [10,2,0,9,3,22];

let stock;
for(let i = 0;i<numbers.length;i++){
    for(let j=i+1;j<numbers.length;j++){
        if(numbers[i]<numbers[j]){
          stock =  numbers[i]
          numbers[i]=numbers[j]
          numbers[j]= stock  
        }
     }
}
console.log(numbers);
