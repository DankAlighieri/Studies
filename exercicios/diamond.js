let base = 20;
let string="";

for(let i=0;i<=base*2;i+=2){
    string="";

    if(i<=base){ // imprime triangulo de cima
        for(let space=base-i;space>0;space-=2){
            string+=" ";
        };

        for(let simbol=i;simbol>=0;simbol--){
            string+="*";
        };
            console.log(string);
    } else{ // imprime triangulo de baixo
        for(let space=(i-base);space>0;space-=2){
            string+=" ";
        };

        for(let simbol=(base*2)-i;simbol>0;simbol--){
            string+="*"
        };
            console.log(string);
    };
};