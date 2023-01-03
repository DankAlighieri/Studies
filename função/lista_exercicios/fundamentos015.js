function cars(car) {
    switch (car) {
        case 'Hatch':
            return console.log("Purchased sucessfully");
            break
        case 'Sedan':
            return console.log("Are you sure you don't prefer this other model?");
            break
        case 'Motorcicles':
            return console.log("Are you sure you don't prefer this other model?");
            break
        case 'Trucks':
            return console.log("Are you sure you don't prefer this other model?");
            break
        default:
            console.log("We don't work with this type of auto here.");
            break
    };
};

cars("Hatch");
cars("Sedan");
cars("Motorcicles");
cars("Trucks");
cars("Hybrid");
