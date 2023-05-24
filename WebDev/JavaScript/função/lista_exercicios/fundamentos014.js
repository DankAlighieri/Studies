function fruits(fruit){
    switch (fruit) {
        case 'Apple':
            return console.log("We don't sell apples here.");
            break
        case 'Kiwi':
            return console.log("We have a shortage of kiwis.");
            break
        case 'Watermelon':
            return console.log("Here you go, 3 dollars for 2 pound");
            break
        default:
            console.log("That's not a fruit.");
            break
    };
};

fruits("Apple");
fruits("Kiwi");
fruits("Watermelon");
fruits("Banana");