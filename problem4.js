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

console.log(findAddress(address));
