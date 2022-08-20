const funcs = [];

for (var i = 0; i < 10; i++) {

    // adding an anonymous function to the array
    funcs.push(function() {
        console.log(i);
    })
}

funcs[2]();
funcs[8]();