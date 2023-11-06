const myNameIs = {
    name : 'Sumanth',

    regularFunction: function() {
        console.log(this.name)
    },

    arrowFunction: () => {
        console.log(this.name)
    },
}

myNameIs.regularFunction()//"prints name"
myNameIs.arrowFunction()//undefined
