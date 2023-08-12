function cubeNumber(number) {
    if (typeof number !== 'number') {
        return "please enter a number"
    }else{
        let cube= 0;
        let result = Math.pow(number,3);
        return result;
    }

}


function matchFinder(string1, string2) {
    if(typeof string1 !== 'string' || typeof string1 !== 'string'){
        return ('please enter a number')
    }
    if (string1.includes(string2)) {
        return true;
    } else {
        return false;
    }
}


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


    function findAddress(obj) {
        const street = address.street || "__";
        const house = address.house || "__";
        const society = address.society || "__";
        return street+ "," + house+ "," + society;
    }
    let address = {
        street: 10,
        house: "15A",
        society: "Earth Perfect"
    }


    function canPay(changeArray, totalDue) {
        if(!changeArray.length === 0 || !Array.isArray(changeArray)){
                return 'please proved in array';
        }
        const totalAmount = changeArray.reduce((sum, note) => sum + note, 0);
        return totalAmount >= totalDue;
    }

