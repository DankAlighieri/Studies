const funcs = [];

for (let i = 0; i < 10; i++) {

    // adding an anonymous function to the array with the respective value attributed to i.
    funcs.push(function() {
        console.log(i);
    })
}

funcs[2]()
funcs[8]()