function cubeNumber(number) {
    if (typeof number !== 'number') {
        return "please enter a number"
    }else{
        let cube= 0;
        let result = Math.pow(number,3);
        return result;
    }

}
console.log(cubeNumber('tt'));
