// 1. Scrieti o functie de tip named function care accepta ca argument un CNP si verifica sexul unei persoane. In urma apelului acestei functii, se va returna un text de forma "Persoana verificata este de sexul M/F".

function sexMF(CNP) {
    if(CNP.toString().charAt(0)=='1' || CNP.toString().charAt(0)=='3' || CNP.toString().charAt(0)=='5' || CNP.toString().charAt(0)=='7' || CNP.toString().charAt(0)=='9') {
        return 'Persoana verificata este de sexul M';
    }
    else return 'Persoana verificata este de sexul F';
}
console.log(sexMF(CNP));

// 2. Scrieti o functie de tip function expression care accepta ca argument o valoare numerica cuprinsa intre 1 si 10 si decide calificativul punctajului. 

var calificativDinNota = function (nota) {
    if(nota!=0  && nota>=1 && nota<3) {
        return 'Calificatul corespunzator punctajului ' + [nota] + ' este E'
    } else if(nota!=0  && nota>=3 && nota<=6) {
        return 'Calificatul corespunzator punctajului ' + [nota] + ' este D';
    }
    else if(nota!=0  && nota>=7 && nota<=8) {
        return 'Calificatul corespunzator punctajului ' + [nota] + ' este B';
    }
    else if(nota!=0  && nota==9 ) {
        return 'Calificatul corespunzator punctajului ' + [nota] + ' este A';
    }
    else if(nota!=0 && nota==10) {
    return 'Calificatul corespunzator punctajului ' + [nota] + ' este A+';
    }
    else return 'Studentul nu a participat la aceasta sesiune';
}
console.log(calificativDinNota(6));

// 3. Scrieti o functie care accepta ca argument numele marcii unei masini si returneaza un text de forma: "Marca [marca] se produce in [tara]". Trebuie sa aveti macar 6 cazuri. In cazul in care functia nu recunoaste marca, va returna "Marca este necunoscuta. " Scrieti codul in 3 variante diferite.

// Prima varianta.

var taraDeFabricatie = function (marcaMasina) {
    if(marcaMasina=='volkswagen' || marcaMasina=='Volkswagen') {
        return 'Marca ' + [marcaMasina] + ' se produce in Germania.';
    }
    else if(marcaMasina=='ford' || marcaMasina=='Ford') {
        return 'Marca ' + [marcaMasina] + ' se produce in Romania.';
    }
    else if(marcaMasina=='fiat' || marcaMasina=='Fiat') {
        return 'Marca ' + [marcaMasina] + ' se produce in Italia.';
    }
    else if(marcaMasina=='toyota' || marcaMasina=='Toyota') {
        return 'Marca ' + [marcaMasina] + ' se produce in Japonia.';
    }
    else if(marcaMasina=='chevrolet' || marcaMasina=='Chevrolet') {
        return 'Marca ' + [marcaMasina] + ' se produce in America.';
    }
    else if(marcaMasina=='bmw' || marcaMasina=='Bmw' || marcaMasina=='BMW') {
        return 'Marca ' + [marcaMasina] + ' se produce in Germania.';
    }
    else if(marcaMasina=='mercedes' || marcaMasina=='Mercedes') {
        return 'Marca ' + [marcaMasina] + ' se produce in Germania.';
    }
    else return 'Marca este necunoscuta.'
}
console.log(taraDeFabricatie('Toyota'));

// A doua varianta.

var taraDeFabricatie = function(marcaMasina) {
    switch (marcaMasina) {

        case('volkswagen' , 'Volkswagen') :
        return 'Marca ' + [marcaMasina] + ' se produce in Germania.';
        break;

        case('ford' , 'Ford') :
        return 'Marca ' + [marcaMasina] + ' se produce in Romania.';
        break;

        case('fiat' , 'Fiat') :
        return 'Marca ' + [marcaMasina] + ' se produce in Italia.';
        break;

        case('toyota' , 'Toyota') :
        return 'Marca ' + [marcaMasina] + ' se produce in Japonia.';
        break;

        case('chevrolet' , 'Chevrolet') :
        return 'Marca ' + [marcaMasina] + ' se produce in America.';
        break;

        case('bmw' , 'Bmw' , 'BMW') :
        return 'Marca ' + [marcaMasina] + ' se produce in Germania.';
        break;

        case('mercedes' , 'Mercedes') :
        return 'Marca ' + [marcaMasina] + ' se produce in Germania.';
        break;

        default :
        return 'Marca este necunoscuta.';
    }
}
console.log(taraDeFabricatie('Volkswagen'));

// A treia varianta.

var taraDeFabricatie = function (marcaMasina) {
    var marciMasini= {
        'volkswagen' : 'Marca ' + [marcaMasina] + ' se produce in Germania.',
        'ford' : 'Marca ' + [marcaMasina] + ' se produce in Romania.',
        'fiat' : 'Marca ' + [marcaMasina] + ' se produce in Italia.',
        'toyota' : 'Marca ' + [marcaMasina] + ' se produce in Japonia.',
        'chevrolet' : 'Marca ' + [marcaMasina] + ' se produce in America.',
        'bmw' : 'Marca ' + [marcaMasina] + ' se produce in Germania.',
        'mercedes' : 'Marca ' + [marcaMasina] + ' se produce in Germania.',
    }
    return marciMasini[marcaMasina];
}
console.log(taraDeFabricatie('fiat'));

// 4. Scrieti o functie de tip IIFE care afiseaza in consola: "Afisez, deci ma autoapelez". Veti crea un fisier javascript separat pe care il veti include intr-un fisier html. Verificarea se va face prin deschiderea paginii html in browser.

console.log((function functieAutoapelare() {
    var autoapelare = 'Afisez, deci ma autoapelez.'; 
    return autoapelare;
   })());