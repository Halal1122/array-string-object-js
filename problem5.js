function canPay(changeArray, totalDue) {
    if(!changeArray.length === 0 || !Array.isArray(changeArray)){
            return 'please proved in array';
    }
    const totalAmount = changeArray.reduce((sum, note) => sum + note, 0);
    return totalAmount >= totalDue;
}
console.log(canPay([9,19,27],40));






// 
//  else{
//     // const total == totalDue;
//     if(totalArray => changeArray){
//         return true;
//     }else{
//         return false;
//     }
// } 