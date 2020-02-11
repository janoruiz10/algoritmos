var x=[1,2,-1,-3];
//1,2,0,0
function resetNegativos(array){
    for (let i = 0; i < array.length; i++) {
       if(array[i] < 0){
        array[i] = 0; 
       }        
    }
    return array;
}

y = resetNegativos(x);
console.log(y)
