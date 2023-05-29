const getDivisors = num => {
    let arr=[];
    for (let i=1; i<=Math.sqrt(num); i++){
        if(num/i === i)
            arr.push(i);
        else if(num % i === 0){
            arr.push(i);
            arr.push(num/i);
        }
    }
    arr.sort((first,second) => {
        return first - second;
    });
    return arr;
};
        
