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
console.log(matchFinder('tomi amake aru kace take', 'aru'))