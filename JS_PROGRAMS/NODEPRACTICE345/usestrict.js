//use strict mode to reduce the probability of this having an unexpected scope
//rarely will someone want to the window object using this
'use strict'
function printThis(){
    console.log(this)
}

    printThis()//this refers to the window, or global object