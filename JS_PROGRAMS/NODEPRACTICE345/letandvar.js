var x = 1;
let y = 1;

if (true) {
    var x = 2;
    let y = 2;
    //console.log(y);
}
console.log(x);
//expected output is 2
console.log(y);
//expected output is 1