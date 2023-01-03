function fastFood(code, ammount) {
    switch(code){
        case 100:
            return console.log(`${ammount} hotdogs will cost you R$ ${(ammount * 3).toFixed(2).replace(".", ",")}`);
            break
        case 200:
            return console.log(`${ammount} hamburguers will cost you R$ ${(ammount * 4).toFixed(2).replace(".", ",")}`);
            break
        case 300:
            return console.log(`${ammount} cheeseburgers will cost you $R$ ${(ammount * 5.5).toFixed(2).replace(".", ",")}`);
        case 400:
            return console.log(`${ammount} breads will cost you R$ ${(ammount * 7.5).toFixed(2).replace(".", ",")}`);
            break
        case 500:
            return console.log(`${ammount} sodas will cost you R$ ${(ammount * 3.5).toFixed(2).replace(".", ",")}`);
            break
        case 600:
            return console.log(`${ammount} juices will cost you R$ ${(ammount * 2.8).toFixed(2).replace(".", ",")}`);
            break
        default:
            return console.log("Product doesn't exist");
    };
};

fastFood(100, 2);
fastFood(200, 3);
fastFood(300, 4);
fastFood(400, 5);
fastFood(500, 6);
fastFood(600, 7);
fastFood(700, 8);