function sortMaker(arr) {
    if(arr[0] <= 0 || arr[2] <= 0){
        return ['invalid input','invalid input']
    }
    else if(arr[0] === arr[1]){
        [arr[0], arr[1]] = [arr[1],arr[0]];
        return 'equal';
        
    }
    else{
        return arr.slice().sort((a, b) => b - a);
    }
    }
console.log(sortMaker([7, 9]));
