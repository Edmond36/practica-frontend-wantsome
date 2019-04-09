// 1. Scrieti un for care itereaza de la 0 la 20. Pentru fiecare iteratie, verifica daca numarul curent este par sau impar si va
// raporta acest lucru in consola. (exemplu: “2 este numar par”);
// Scrieti functia in doua variante: while si for

// 1. Prima Varianta

function oddEven(number) {
    var i;
    for(i=0;i<=20;i++) {
        if(i%2==0) {
            console.log(i + 'este numar par');
        }
        else console.log(i + 'este numar impar');
    }
}
console.log(oddEven(20));

// 1.A doua Varianta

function oddEven(number) {
    var i=0;
    while(i<=20) {
        if(i%2==0) {
            console.log(i + 'este numar par');
        }
        else console.log(i + 'este numar impar');
        i++;
    }
}
console.log(oddEven(20));


// 2. Scrieti un for care itereaza de la 0 la 10. Pentru fiecare iteratie, se va multiplica numarul curent cu 9 si se va afisa
// rezultatul. (exemplu: “3*9=27”).
//  Scrieti functia in doua variante: while si for

// 2.Prima varianta

function multiplyByNine(number) {
    var i;
    for(i=0;i<=10;i++) {
        var s=0;
        s=i*9;
        console.log(s);
    }
}
console.log(multiplyByNine(10));

// 2. A doua varianta

function multiplyByNine(number) {
    var i=0;
    while(i<=10) {
        var s=0;
        s=i*9;
        console.log(s);
        i++;
    }
}
console.log(multiplyByNine(10));


// 3.Pentru fiecare cifra de la 1 la 10, afisati tabla inmultirii.
// (exemplu: 1 * 0 = 0
//  1 * 1 = 1
//  …
//  1 * 10 = 10 )
// Pentru a afisa in consola pe linie noua puteti concatena un string, la final, cu + “\n”.

function multiplyTabel(number) {
    var i;
    var j;
    for(i=1;i<10;i++) {
        for(j=0;j<=10;j++) {
            console.log([i] + '*' + [j] + '=' +  i*j);
        }
    }
}
console.log(multiplyTabel(10));



// 4. Pentru functia dezvoltata la cerinta 2 de la tema anterioara, verificati si afisati in consola fiecare calificativ care se
// poate obtine pentru punctajele incepand de 1 la 10. (exemplu: “Pentru 2, obtii calificativul E. \n Pentru 7, obtii
// calificativul B \n ...samd “). Atentie: Rezultatul calificativul trebuie sa fie obtinut prin utilizarea functiei
// dezvoltate la tema anterioara ! 

var calificativDinNota = function (nota) {
    if(nota!=0  && nota>=1 && nota<3) {
        console.log('Calificatul corespunzator punctajului ' + [nota] + ' este E')
    } else if(nota!=0  && nota>=3 && nota<=6) {
        console.log ('Calificatul corespunzator punctajului ' + [nota] + ' este D');
    }
    else if(nota!=0  && nota>=7 && nota<=8) {
        console.log ('Calificatul corespunzator punctajului ' + [nota] + ' este B');
    }
    else if(nota!=0  && nota==9 ) {
        console.log ('Calificatul corespunzator punctajului ' + [nota] + ' este A');
    }
    else if(nota!=0 && nota==10) {
        console.log ('Calificatul corespunzator punctajului ' + [nota] + ' este A+');
    }
    else console.log( 'Studentul nu a participat la aceasta sesiune');
}
calificativDinNota(6);