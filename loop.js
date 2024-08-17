const mobile = {

    brand: 'samsung',
    price: 3300,
    color: 'black',
    camera: '32MP'
}
//for of:array
//for in:object
for (const prop in mobile){
    console.log(prop);
    console.log(mobile[prop]);
}